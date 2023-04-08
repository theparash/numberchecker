// Assigns the DOM elements to variables using their respective IDs or class names.
const loader = document.querySelector(".loader");
const result = document.getElementById("result");
const checkButton = document.getElementById("check-button");
const numberInput = document.getElementById("number-input");

// Sets the focus on the input box when the page loads.
window.addEventListener("load", () => {
  numberInput.focus();
});

// Checks the entered number for validity when the user hits the Enter key.
numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkNumber(); // Calls the checkNumber() function.
  }
});

// Checks the entered number for validity when the "Check" button is clicked.
checkButton.addEventListener("click", checkNumber); // Calls the checkNumber() function.

// Defines the checkNumber() function to check the entered number for validity.
function checkNumber() {
  // Displays the loading animation.
  loader.style.display = "block";
  // Gets the user input.
  const userInput = numberInput.value;
  // Checks the first three digits of the number.
  const firstThreeDigits = userInput.substring(0, 3);
  if (
    firstThreeDigits === "984" ||
    firstThreeDigits === "985" ||
    firstThreeDigits === "986"
  ) {
    // If the number starts with 984, 985, or 986, it's NTC.
    setTimeout(() => {
      result.innerText = "Your Number is NTC";
      result.style.opacity = 1;
      loader.style.display = "none";
    }, 1000); // Displays the result after a delay of 1 second.
  } else if (
    firstThreeDigits === "980" ||
    firstThreeDigits === "981" ||
    firstThreeDigits === "982"
  ) {
    // If the number starts with 980, 981, or 982, it's Ncell.
    setTimeout(() => {
      result.innerText = "Your Number is Ncell";
      result.style.opacity = 1;
      loader.style.display = "none";
    }, 1000); // Displays the result after a delay of 1 second.
  } else {
    // If the number doesn't start with any of the above, it's invalid.
    setTimeout(() => {
      result.innerText = "Invalid Number";
      result.style.opacity = 1;
      loader.style.display = "none";
    }, 1000); // Displays the result after a delay of 1 second.
  }
}
