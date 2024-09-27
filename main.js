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

let bill;
let tipPercent;
let people;
let billInputValid = false;
let tipInputValid = false;
let peopleInputValid = false;
let tipButtonValue = 0;

document.addEventListener("keypress", () => {
  if(billInput.value != "" && peopleInput.value != "") {
    if(tipButtonValue != 0 || tipInput.value != "") {
      checkInput();
    }
  }
});

tipButtonsArea.addEventListener("click", (e) => {
  if(e.target.id == "five-button") {
    tipButtonValue = 5
    resetButtonColors();
    button5.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "ten-button") {
    tipButtonValue = 10;
    resetButtonColors();
    button10.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "fifteen-button") {
    tipButtonValue = 15;
    resetButtonColors();
    button15.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "twenty-five-button") {
    tipButtonValue = 25;
    resetButtonColors();
    button25.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if(e.target.id == "fifty-button") {
    tipButtonValue = 50;
    resetButtonColors();
    button50.style.backgroundColor = "hsl(172, 67%, 45%)";
  }
});

tipInput.addEventListener("keypress", () => {
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
  // checkPeopleInput();
}

function checkBillInput() {
  bill = Number(billInput.value);
  if(typeof bill == "number" && !isNaN(bill)) {
    billInputValid = true;
  }
}

function checkTipInput() {
  
}