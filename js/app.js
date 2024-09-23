import {
  add,
  donateMoney,
  getInnerText,
  getValue,
  setValue,
  substraction,
} from "./utilities.js";

// After clicking donate Now button the amount updates from Quota Total Donation  and User Available Balance.

// Quota Donation
const donateAmountQuota = document.getElementById("donateAmountQuota");

donateAmountQuota.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.
  donateMoney("inputAmountQuota", "quotaAmount", "availableBalance");
});

// Noakhali Donation
const donateAmountNoakhali = document.getElementById("donateAmountNoakhali");

donateAmountNoakhali.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.
  donateMoney("inputAmountNoakhali", "noakhaliAmount", "availableBalance");
});

// Feni Donation
const donateAmountFeni = document.getElementById("donateAmountFeni");

donateAmountFeni.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.
  donateMoney("inputAmountFeni", "feniAmount", "availableBalance");
});
