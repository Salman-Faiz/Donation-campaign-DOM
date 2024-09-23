import {
  add,
  getInnerText,
  getValue,
  setValue,
  substraction,
} from "./utilities.js";

const donateAmount = document.getElementById("donateAmount");
donateAmount.addEventListener("click", function () {
  // to add the donation money to the UI
  const inputAmount = getValue("inputAmount");
  const innerTextAmount = getInnerText("quotaAmount");
  const sum = add(innerTextAmount, inputAmount);
  setValue("quotaAmount", sum);
  // reduce money from current balance
  const availableBalance = getInnerText("availableBalance");
  const remainingBalance = substraction(availableBalance, inputAmount);
  setValue("availableBalance", remainingBalance);
});

// inputAmount donateAmount
