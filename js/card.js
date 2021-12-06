document.querySelectorAll(".card").forEach(function(elem) {
	elem.onclick = function() {
		const link = elem.getAttribute("href");
		if (link) {
			window.open(link, '_blank').focus();
		}
	}
	elem.onmouseover = function() {
		elem.querySelector(".info").style.opacity = 1;
	}
	elem.onmouseleave = function() {
		elem.querySelector(".info").style.opacity = 0;
	}
});