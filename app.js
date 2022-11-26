const InputDetailContainer = document.querySelector(".input-details-container");
const displayCardName = document.querySelector(".card-name");
const inputCardName = document.querySelector("#input-card-name");
const displayCardCvc = document.querySelector(".back-card-cvc");
const inputCardCvc = document.querySelector("#input-card-cvc");
const displayCardMonth = document.querySelector(".month");
const displayCardYear = document.querySelector(".year");
const inputCardDateMonth = document.querySelector("#input-card-date-month");
const inputCardDateYear = document.querySelector("#input-card-date-year");
const displayCardNumber = document.querySelector(".front-card-number");
const inputCardNumber = document.querySelector("#input-card-number");
const button = document.querySelector(".btn");
const buttonComplete = document.querySelector(".btn-complete");
const errMsg = document.querySelectorAll(".error-text");
const completedContainer = document.querySelector(
  ".completed-details-container-main",
);
const endButton = document.querySelector(".btn-complete");
let requiredName = false;
let requiredNumber = false;
let requiredMonth = false;
let requiredYear = false;
let requiredCvc = false;
let numberSuccess = [];
const setCardName = () => {
  inputCardName.style.color = "# #21092f";
  inputCardName.style.opacity = "1";
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  displayCardName.innerHTML = inputCardName.value;
  let temp = inputCardName.value.split("");
  if (num.includes(temp[inputCardName.value.length - 1])) {
    errMsg[0].style.visibility = "visible";
    errMsg[0].innerHTML = `Please enter only letters`;
  } else {
    errMsg[0].style.visibility = "hidden";
    requiredName = true;
  }
};
const setCardNumber = () => {
  let succes1;
  let cardNumber = inputCardNumber.value.toLowerCase();
  let str = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let specialChar = "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/";
  let symbols = specialChar.split("");
  inputCardNumber.style.color = "# #21092f";
  inputCardNumber.style.opacity = "1";
  displayCardNumber.innerHTML = cardNumber;
  let temp = cardNumber.split("");
  if (
    str.includes(temp[cardNumber.length - 1]) ||
    symbols.includes(temp[cardNumber.length - 1])
  ) {
    succes1 = false;
    errMsg[1].innerHTML = `Please enter only number not letters or symbols`;
    errMsg[1].style.visibility = "visible";
    numberSuccess.push(succes1);
  } else {
    succes1 = true;
    numberSuccess.push(succes1);
    errMsg[1].style.visibility = "hidden";
  }

  if (cardNumber.length === 16) {
    let toArr = cardNumber.split("");
    let firstP = [];
    let secondP = [];
    let thirdP = [];
    let fourthP = [];

    for (let i = 0; i < toArr.length; i++) {
      if (firstP.length !== 4) {
        firstP.push(toArr[i]);
      } else if (secondP.length !== 4) {
        secondP.push(toArr[i]);
      } else if (thirdP.length !== 4) {
        thirdP.push(toArr[i]);
      } else if (fourthP.length !== 4) {
        fourthP.push(toArr[i]);
      }
    }
    window.addEventListener("click", () => {
      requiredNumber = true;
      displayCardNumber.innerHTML = `${firstP.join("")} ${secondP.join(
        "",
      )} ${thirdP.join("")} ${fourthP.join("")}`;
    });
  } else if (cardNumber.length !== 16) {
    requiredNumber = false;
    errMsg[1].style.visibility = "visible";
    errMsg[1].innerHTML = `You have entered ${cardNumber.length} out of 16 numbers`;
  }
};
const setCardMonth = () => {
  inputCardDateMonth.style.color = "# #21092f";
  inputCardDateMonth.style.opacity = "1";
  if (inputCardDateMonth.value > 9) {
    displayCardMonth.innerHTML = `${inputCardDateMonth.value}/`;
  } else {
    displayCardMonth.innerHTML = `0${inputCardDateMonth.value}/`;
  }
  console.log(typeof inputCardDateMonth.value);
  if (inputCardDateMonth.value > 12) {
    alert("Please enter a valid month");
    displayCardMonth.innerHTML = "";
    inputCardDateMonth.value = "";
  } else {
    requiredMonth = true;
  }
};
const setCardYear = () => {
  inputCardDateYear.style.color = "# #21092f";
  inputCardDateYear.style.opacity = "1";
  if (inputCardDateYear.value.length > 2) {
    alert("Please enter a valid year");
    displayCardYear.innerHTML = "";
    inputCardDateYear.value = "";
  } else {
    displayCardYear.innerHTML = `${inputCardDateYear.value}`;
    requiredYear = true;
  }
};
const setCardCvc = () => {
  inputCardCvc.style.color = "# #21092f";
  inputCardCvc.style.opacity = "1";
  if (inputCardCvc.value.length > 3) {
    alert("Please enter 3 Digit cvc");
    inputCardCvc.value = "";
    displayCardCvc.innerHTML = "";
  }
  displayCardCvc.innerHTML = inputCardCvc.value;
  requiredCvc = true;
};

const getCardDetails = function (
  customerName,
  cardNumber,
  cardExpiryMonth,
  cardExpiryYear,
  cardCvC,
) {
  this.customerName = customerName;
  this.cardNumber = cardNumber;
  this.cardExpiryMonth = cardExpiryMonth;
  this.cardExpiryYear = cardExpiryYear;
  this.cardCvC = cardCvC;
};

const userJsonObject = () => {
  if (
    requiredName == true &&
    requiredNumber == true &&
    requiredMonth == true &&
    requiredYear == true &&
    requiredCvc == true
  ) {
    let customerName = inputCardName.value;
    let cardNumber = inputCardNumber.value;
    let ExpiryMonth = inputCardDateMonth.value;
    let ExpiryYear = inputCardDateYear.value;
    let cardCvC = inputCardCvc.value;

    let cardUser = new getCardDetails(
      customerName,
      cardNumber,
      ExpiryMonth,
      ExpiryYear,
      cardCvC,
    );
    let jsonObj = JSON.stringify(cardUser);
    console.log(jsonObj);
    InputDetailContainer.style.display = "none";
    completedContainer.style.visibility = "visible";
  } else {
    console.log("no Data");
  }
};

const refresh = () => {
  window.location.reload();
};

inputCardName.addEventListener("keyup", setCardName);
inputCardCvc.addEventListener("keyup", setCardCvc);
inputCardDateMonth.addEventListener("keyup", setCardMonth);
inputCardDateYear.addEventListener("keyup", setCardYear);
inputCardNumber.addEventListener("keyup", setCardNumber);
button.addEventListener("click", userJsonObject);

endButton.addEventListener("click", refresh);
