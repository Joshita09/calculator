const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display) {
        display.value += input;
    } else {
        console.error("Display element not found.");
    }
}

function clearDisplay() {
    if (display) {
        display.value = "";
    } else {
        console.error("Display element not found.");
    }
}

function calculate() {
    if (display) {
        try {
            // Basic expression evaluation without using eval
            display.value = Function(`'use strict'; return (${display.value})`)();
        } catch (error) {
            console.error("Calculation error:", error);
            display.value = "Error";
        }
    } else {
        console.error("Display element not found.");
    }
}
