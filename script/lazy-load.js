const IMG_LIST = [...document.querySelectorAll("img[data-src]")];
const MARGIN_X = 0;
const MARGIN_Y = 200;
/*
    Return codes:
    0 if src attribute exists
    1 if src attribute is set
    false if src attribute is not set and element is not visible
*/
function lazyLoad(elem) {
    let rect = elem.getBoundingClientRect();
    let rx = rect.left;
    let ry = rect.top;
    let rw = rect.width;
    let rh = rect.height;
    let vx = 0 - MARGIN_X;
    let vy = 0 - MARGIN_Y;
    let vw = window.innerWidth + MARGIN_X;
    let vh = window.innerHeight + MARGIN_Y;

    if (elem.src) {
        return 0;
    }

    if (((rx < vx && rx + rw > vx) || (rx < vx + vw && rx + rw > vx + vw) || (rx > vx && rx + rw < vx + vw)) && 
        ((ry < vy && ry + rh > vy) || (ry < vy + vh && ry + rh > vy + vh) || (ry > vy && ry + rh < vy + vh))) {
        elem.src = elem.dataset.src;
        return 1;
    }

    return false;
}

function sequentialLoad(index, list) {
    const elem = list[index];
    let status = lazyLoad(elem);

    function loadNext() {
        if (index < list.length-1) {
            sequentialLoad(index+1, list);
        }
    }

    if (status === false || status === 0) {
        loadNext();
    } else if (status === 1) {
        elem.onload = loadNext;
    }
}

window.addEventListener("load", function() {
    sequentialLoad(0, IMG_LIST);

    window.addEventListener("scroll", function() {
        sequentialLoad(0, IMG_LIST);
    });
});