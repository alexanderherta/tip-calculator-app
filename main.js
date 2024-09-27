const tipAmountDisplay = document.querySelector("#tip-amount-display");
const totalAmountDisplay = document.querySelector("#total-amount-display");
const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelector("#tip-input");
const peopleInput = document.querySelector("#people-input");
const tipButtonsArea = document.querySelector(".percentage-area");
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
  if(e.target.id == "5-button") {
    tipButtonValue = 5
  } else if(e.target.id == "10-button") {
    tipButtonValue = 10;
  } else if(e.target.id == "15-button") {
    tipButtonValue = 15;
  } else if(e.target.id == "25-button") {
    tipButtonValue = 25;
  } else if(e.target.id == "50-button") {
    tipButtonValue = 50;
  }
});

function checkInput() {
  checkBillInput();
  checkTipInput();
  checkPeopleInput();
}

function checkBillInput() {
  bill = Number(billInput.value);
  if(typeof bill == "number" && !isNaN(bill)) {
    billInputValid = true;
  }
}

function checkTipInput() {
  
}