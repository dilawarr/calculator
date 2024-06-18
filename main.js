const darkGrayButtons = document.querySelectorAll(".bg-dark-gray");
const grayButtons = document.querySelectorAll(".bg-gray");
const orangeButtons = document.querySelectorAll(".bg-orange");

darkGrayButtons.forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(85, 85, 85)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});

grayButtons.forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(195, 195, 195)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});

orangeButtons.forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(256, 140, 5)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});
