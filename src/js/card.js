window.onload = function() {
	document.querySelectorAll(".card").forEach(function(elem) {
		elem.onclick = function() {
			const link = elem.getAttribute("href");
			if (link) {
				window.open(link, '_blank').focus();
			}
		}
	});
}