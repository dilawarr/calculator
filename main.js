const display = document.querySelector(".display");
let operands = [0, 0];
let operator = "+";
let currOperand = 0;
let clearText = 0;
let isFloat = 0;

function clearDisplay() {
	clearText = 0;
	isFloat = 0;
	display.textContent = "";
}

document.querySelector("body").addEventListener("keyup", (event) => {
	if (event.key == "Backspace") {
		if (display.textContent[display.textContent.length - 1] == ".") isFloat = 0;
		display.textContent = display.textContent.slice(0, -1);
	} else if (event.key >= "0" && event.key <= "9") {
		if (clearText) clearDisplay();
		if (display.textContent.length < 8) display.textContent += event.key;
	}
});

document.querySelectorAll(".bg-dark-gray").forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(85, 85, 85)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});

document.querySelectorAll(".bg-gray").forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(195, 195, 195)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});

document.querySelectorAll(".bg-orange").forEach((button) => {
	button.addEventListener(
		"mousedown",
		() => (button.style.backgroundColor = "rgb(256, 140, 5)")
	);
	button.addEventListener("mouseup", () => (button.style.backgroundColor = ""));
});

document.querySelector("#clear").addEventListener("click", () => {
	operands[0] = 0;
	operands[1] = 0;
	currOperand = 0;
	clearDisplay();
});

document.querySelector(".decimal").addEventListener("click", () => {
	if (!isFloat) {
		if (display.textContent == "") display.textContent += 0;
		if (display.textContent.length < 7) display.textContent += ".";
		isFloat = 1;
	}
});

document.querySelectorAll(".number").forEach((button) => {
	button.addEventListener("click", (event) => {
		if (clearText) clearDisplay();
		if (display.textContent.length < 8)
			display.textContent += event.target.textContent.trim();
	});
});

document.querySelectorAll(".operator").forEach((button) => {
	button.addEventListener("click", () => {
		if (display.textContent !== "") {
			operands[currOperand] = Number(display.textContent);
			clearDisplay();
			if (currOperand == 1) {
				console.log(operands[0], operands[1], operator);
				switch (operator) {
					case "+":
						operands[0] += operands[1];
						break;
					case "-":
						operands[0] -= operands[1];
						break;
					case "*":
						operands[0] *= operands[1];
						break;
					case "/":
						if (operands[1] == 0) operands[0] = "lmaoo";
						else {
							operands[0] /= operands[1];
							operands[0] = +parseFloat(operands[0].toFixed(7));
						}
						break;
				}
				operands[1] = "x";
				display.textContent = operands[0];
				if (Number(display.textContent) >= 10000000)
					display.textContent /= 100000000;
				if (Number.isInteger(Number(display.textContent))) {
					isFloat = 0;
					display.textContent = display.textContent.substring(0, 8);
				} else {
					isFloat = 1;
					display.textContent = display.textContent.substring(0, 9);
				}
				clearText = 1;
				currOperand = -1;
			} else if (currOperand == 0 && button.textContent == "=") {
				display.textContent = operands[0];
				clearText = 1;
				currOperand--;
			}
			currOperand = (currOperand + 1) % 2;
		}
		if (button.textContent != "=") operator = button.textContent;
	});
});
