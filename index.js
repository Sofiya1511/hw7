class Calculator {
  constructor() {
    this.display = document.getElementById("display");
    this.currentInput = "";
    this.currentResult = 0;
    this.addEventListenersToButtons();
  }

  clearDisplay() {
    this.display.textContent = "0";
    this.currentInput = "";
  }

  appendToDisplay(value) {
    if (this.display.textContent === "0") {
      this.display.textContent = value;
    } else {
      this.display.textContent += value;
    }
    this.currentInput += value;
  }

  backspace() {
    if (this.currentInput.length > 0) {
      this.currentInput = this.currentInput.slice(0, -1);
      this.display.textContent = this.currentInput || "0";
    }
  }

  calculateSquareRoot() {
    try {
      this.currentResult = Math.sqrt(eval(this.currentInput));
      this.display.textContent = this.currentResult;
    } catch (error) {
      this.display.textContent = "Error";
    }
  }

  calculatePercentage() {
    try {
      this.currentResult = eval(this.currentInput) / 100;
      this.display.textContent = this.currentResult;
    } catch (error) {
      this.display.textContent = "Error";
    }
  }

  addEventListenersToButtons() {
    const buttons = document.querySelectorAll(".calculator button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => this.handleButtonClick(button));
    });
  }

  handleButtonClick(button) {
    const value = button.textContent;
    if (button.dataset.operation) {
      this.performOperation(button.dataset.operation, value);
    } else {
      this.appendToDisplay(value);
    }
  }

  performOperation(operation, value) {
    switch (operation) {
      case "clear":
        this.clearDisplay();
        break;
      case "backspace":
        this.backspace();
        break;
      case "sqrt":
        this.calculateSquareRoot();
        break;
      case "percentage":
        this.calculatePercentage();
        break;
      case "plus-minus":
        this.togglePositiveNegative();
        break;
      case "equals":
        this.calculateResult();
        break;
      default:
        this.appendToDisplay(value);
        break;
    }
  }

  togglePositiveNegative() {
    try {
      const isNegative = this.currentInput.startsWith("-");
      if (isNegative) {
        this.currentInput = this.currentInput.slice(1);
      } else {
        this.currentInput = "-" + this.currentInput;
      }
      this.display.textContent = this.currentInput;
    } catch (error) {
      this.display.textContent = "Error";
    }
  }

  calculateResult() {
    try {
      this.currentResult = eval(this.currentInput);
      this.display.textContent = this.currentResult;
    } catch (error) {
      this.display.textContent = "Error";
    }
  }
}

const calculator = new Calculator();
