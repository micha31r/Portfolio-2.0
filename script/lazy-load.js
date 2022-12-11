function lazyLoad(elem) {
    let rect = elem.getBoundingClientRect();
    let rx = rect.left;
    let ry = rect.top;
    let rw = rect.width;
    let rh = rect.height;
    let vx = 0;
    let vy = 0;
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    if (!elem.src) {
        if (((rx < vx && rx + rw > vx) || (rx < vx + vw && rx + rw > vx + vw) || (rx > vx && rx + rw < vx + vw)) && 
            ((ry < vy && ry + rh > vy) || (ry < vy + vh && ry + rh > vy + vh) || (ry > vy && ry + rh < vy + vh))) {
            elem.src = elem.dataset.src;
        }
    }
}

function loadAllImage() {
    document.querySelectorAll("img[data-src]").forEach(function(elem) {
        lazyLoad(elem);
    });
}

window.addEventListener("load", function() {
    loadAllImage();
    window.addEventListener("scroll", function() {
        loadAllImage();
    });
});