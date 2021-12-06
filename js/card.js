document.querySelectorAll(".card").forEach(function(elem) {
	elem.onclick = function() {
		const link = elem.getAttribute("href");
		if (link) {
			window.open(link, '_blank').focus();
		}
	}
	elem.onmouseover = function() {
		elem.querySelector(".title").style.opacity = 1;
	}
	elem.onmouseleave = function() {
		elem.querySelector(".title").style.opacity = 0;
	}
});