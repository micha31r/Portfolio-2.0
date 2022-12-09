const cursor = document.querySelector("#cursor");
const delta = 1/120;
const speed = 10;
const marginX = 20;
const marginY = 5;

let mouseX = 0;
let mouseY = 0;
let isSelected = false;
let target = null;

window.addEventListener("mousemove", function(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;

	target = null;
	document.querySelectorAll(".work .item").forEach(item => {
		let itemRect = item.getBoundingClientRect();
		item.classList.remove("selected");
		if (mouseX >= itemRect.x && mouseX <= itemRect.x + itemRect.width && mouseY >= itemRect.y && mouseY <= itemRect.y + itemRect.height) {
			target = item;
			item.classList.add("selected");
		}
	});
});

function animate() {
	let rect = cursor.getBoundingClientRect();

	// Set mouse as default target rect
	let tx = mouseX;
	let ty = mouseY;
	let tw = 20;
	let th = 20;
	let zIndex = 100;

	// Update target rect if target element exists
	if (target) {
		let targetRect = target.getBoundingClientRect();
		tx = targetRect.x - marginX;
		ty = targetRect.y - marginY;
		tw = targetRect.width + marginX*2;
		th = targetRect.height + marginY*2;
		zIndex = -1;
	}

	let xOffset = tx - rect.x;
	let yOffset = ty - rect.y;
	let widthOffset = tw - rect.width;
	let heightOffset = th - rect.height;

	cursor.style.top = rect.y + yOffset * delta * speed + "px";
	cursor.style.left = rect.x + xOffset * delta * speed  + "px";
	cursor.style.width = rect.width + widthOffset * delta * speed + "px";
	cursor.style.height = rect.height + heightOffset * delta * speed + "px";
	cursor.style.zIndex = zIndex;
}

setInterval(animate, delta * 1000);