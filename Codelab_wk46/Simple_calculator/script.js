 // Select display and buttons container
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

// Event listener for all buttons except "=" and "C"
buttons.addEventListener("click", function(event) {
    if (event.target !== calculateButton && event.target !== clearButton) {
        display.innerText += event.target.innerText;
    }
});

// Event listener for "=" button to calculate result
calculateButton.addEventListener("click", function(event) {
    // Prevent the default behavior of the button
    event.stopPropagation();
    try {
        //eval() is used to evaluate the expression directly - easy way to calculate the result
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "????";
    }
});

// Clear button event listener
clearButton.addEventListener("click", function() {
    display.innerText = ""; // Clear the display
});

//But be aware that eval() is not recommended for production code, as it can be a security risk. Can you decribe why that is?
//eval() can execute any code passed to it, which can be a security risk if the code is not trusted. For example, if the input is coming from a user, they could potentially execute malicious code.
//Therefore, it is recommended to use other methods to evaluate expressions, such as using a library like math.js or writing your own parser.