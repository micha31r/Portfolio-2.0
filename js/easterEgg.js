const COLORS = [
	"rgb(20,156,59)",	// Green
	"rgb(82,42,251)", 	// Blue
	"rgb(209,156,0)", 	// Yellow
	"rgb(224,45,72)", 	// Red
	"rgb(158,45,224)", 	// Purple
]
var index = 0;

document.querySelector(".name span").onclick = function() {
	index++;
	if (index > COLORS.length-1) {
		index = 0;
	}
	let color = COLORS[index]
	document.documentElement.style.setProperty('--color-primary', color);
}