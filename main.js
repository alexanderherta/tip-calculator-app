const tipAmountDisplay = document.querySelector("#tip-amount-display");
const totalAmountDisplay = document.querySelector("#total-amount-display");
const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelector("#tip-input");
const peopleInput = document.querySelector("#people-input");
const tipButtonsArea = document.querySelector(".percentage-area");
const button5 = document.querySelector("#five-button");
const button10 = document.querySelector("#ten-button");
const button15 = document.querySelector("#fifteen-button");
const button25 = document.querySelector("#twenty-five-button");
const button50 = document.querySelector("#fifty-button");
const resetButton = document.querySelector("#reset-button");
resetButton.disabled = true;
let resetButtonColorOn = false;
let billInputValid = false;
let tipInputValid = false;
let peopleInputValid = false;
let tipButtonValue = 0;
let bill;
let tipPercent;
let people;
let tipAmount;
let total;

tipButtonsArea.addEventListener("click", (e) => {
  if(e.target.id == "five-button") {
    tipButtonValue = 5
    tipInput.value = "";
    resetButtonColors();
    button5.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "ten-button") {
    tipButtonValue = 10;
    tipInput.value = "";
    resetButtonColors();
    button10.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "fifteen-button") {
    tipButtonValue = 15;
    tipInput.value = "";
    resetButtonColors();
    button15.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "twenty-five-button") {
    tipButtonValue = 25;
    tipInput.value = "";
    resetButtonColors();
    button25.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "fifty-button") {
    tipButtonValue = 50;
    tipInput.value = "";
    resetButtonColors();
    button50.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
});

tipInput.addEventListener("input", () => {
  tipButtonValue = 0;
  resetButtonColors();
});

function resetButtonColors() {
  button5.style.backgroundColor = "hsl(183, 100%, 15%)";
  button10.style.backgroundColor = "hsl(183, 100%, 15%)";
  button15.style.backgroundColor = "hsl(183, 100%, 15%)";
  button25.style.backgroundColor = "hsl(183, 100%, 15%)";
  button50.style.backgroundColor = "hsl(183, 100%, 15%)";
}

function checkInput() {
  checkBillInput();
  checkTipInput();
  checkPeopleInput();
  if(billInputValid && tipInputValid && peopleInputValid) {
    calculateTip();
  }
}

function checkBillInput() {
  bill = Number(billInput.value);
  if(typeof bill == "number" && !isNaN(bill)) {
    billInputValid = true;
  }
}

function checkTipInput() {
  if(tipButtonValue == 0) {
    tipPercent = Number(tipInput.value);
  } else {
    tipPercent = tipButtonValue;
  }

  if(typeof tipPercent == "number" && !isNaN(tipPercent) && tipPercent > 0 && tipPercent <= 100) {
    tipInputValid = true;
  }
}

function checkPeopleInput() {
  people = Number(peopleInput.value);
  if(Number.isInteger(people)) {
    peopleInputValid = true;
  }
}

function calculateTip() {
  tipPercent = tipPercent / 100;
  tipAmount = bill * tipPercent;
  tipAmount = Math.round(tipAmount * 100) / 100;

  total = bill / people;
  total = Math.round(total * 100) / 100;
  
  tipAmount = tipAmount.toString();
  total = total.toString();

  let decimalSearch = tipAmount.charAt(tipAmount.length - 2)
  if(decimalSearch == ".") {
    tipAmount = tipAmount + "0";
  }
  decimalSearch = total.charAt(total.length - 2);
  if(decimalSearch == ".") {
    total = total + "0";
  }
  displayResults();
}

function displayResults() {
  tipAmountDisplay.innerText = tipAmount;
  totalAmountDisplay.innerText = total;
  resetButton.disabled = false;
  resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
  resetButton.style.color = "hsl(183, 100%, 15%)";
  resetButton.classList.add("reset-button-hover");
  resetButtonColorOn = true;
  resetButton.addEventListener("mouseover", () => {
    if(resetButtonColorOn) {
      resetButton.style.backgroundColor = "hsl(172, 79%, 54%)";
    }
  });
  resetButton.addEventListener("mouseleave", () => {
    if(resetButtonColorOn) {
      resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
  });
}

function resetInput() {
  billInput.value = "";
  tipButtonValue = 0;
  resetButtonColors();
  tipInput.value = "";
  peopleInput.value = "";
  tipAmountDisplay.innerText = "0.00";
  totalAmountDisplay.innerText = "0.00";
  resetButton.classList.remove("reset-button-hover");
  resetButton.style.backgroundColor = "rgba(114, 114, 114, 0.5)";
  resetButton.style.color = "hsl(182, 19%, 26%)";
  resetButtonColorOn = false;
}