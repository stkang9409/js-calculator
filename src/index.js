const rows = document.querySelectorAll(".row"),
  buttons = document.querySelectorAll(".button"),
  display = rows[0].querySelector(".display"),
  show = rows[0].querySelector(".show_operator");

let valueOnDisplay = "0",
  output = "",
  operator = "";

const operations = ["+", "-", "*", "/"];

function clearHandler() {
  (valueOnDisplay = "0"), (output = ""), (operator = "");
  display.innerText = valueOnDisplay;
}

function operatorHandler(value) {
  if (output !== "" || valueOnDisplay !== "0") {
    equalHandler();
    operator = value;
    show.innerText = output + operator;
  }
}

function equalHandler() {
  if (valueOnDisplay !== "0") {
    if (operator !== "") {
      output = output + operator + `(${valueOnDisplay})`;
      output = String(eval(output));
    } else {
      output = valueOnDisplay;
    }
    valueOnDisplay = "0";
  }
  display.innerText = output;
  operator = "";
  show.innerText = "";
}

function addNumber(value) {
  if (valueOnDisplay === "0") {
    valueOnDisplay = String(value);
  } else {
    valueOnDisplay = valueOnDisplay + String(value);
  }
  display.innerText = valueOnDisplay;
}

function clickHandler(event) {
  const button = event.target;
  const value = button.innerText;
  if (button.innerText === "=") {
    equalHandler(value);
  } else if (button.innerText === "C") {
    clearHandler();
  } else if (operations.includes(value)) {
    operatorHandler(value);
  } else {
    addNumber(value);
  }
}

function init() {
  display.innerText = valueOnDisplay;
  buttons.forEach(function (item) {
    item.addEventListener("click", clickHandler);
  });
}

init();
