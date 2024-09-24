import {
  add,
  donateMoney,
  getInnerText,
  getValue,
  setValue,
  showModal,
  substraction,
} from "./utilities.js";

// After clicking donate Now button the amount updates from Quota Total Donation  and User Available Balance.

// Quota Donation
const donateAmountQuota = document.getElementById("donateAmountQuota");

donateAmountQuota.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.

  donateMoney("inputAmountQuota", "quotaAmount", "availableBalance");

  // show modal after successful donation
  if (getValue("inputAmountQuota")) {
    showModal();
    document.getElementById("inputAmountQuota").value = "";
  } else {
    return 0;
  }
});

// Noakhali Donation
const donateAmountNoakhali = document.getElementById("donateAmountNoakhali");

donateAmountNoakhali.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.
  donateMoney("inputAmountNoakhali", "noakhaliAmount", "availableBalance");
  // show modal after successful donation
  if (getValue("inputAmountNoakhali")) {
    showModal();
    document.getElementById("inputAmountNoakhali").value = "";
  } else {
    return 0;
  }
});

// Feni Donation
const donateAmountFeni = document.getElementById("donateAmountFeni");

donateAmountFeni.addEventListener("click", function () {
  // in this donateAmount Function need inputAmountId,donatedAmountId,availableBalanceId as parameters.
  donateMoney("inputAmountFeni", "feniAmount", "availableBalance");
  // show modal after successful donation
  if (getValue("inputAmountFeni")) {
    showModal();
    document.getElementById("inputAmountFeni").value = "";
  } else {
    return 0;
  }
});

window.onload = function () {
  // Toggle donation and History contents with clicking the button
  const donationContainer = document.getElementById("donationContainer");
  const historyContainer = document.getElementById("historyContainer");
  const btnDonation = document.getElementById("btnDonation");
  const btnHistory = document.getElementById("btnHistory");

  btnDonation.style.background = "rgb(162, 235, 52)";

  btnDonation.addEventListener("click", function () {
    donationContainer.style.display = "block";
    historyContainer.style.display = "none";

    btnDonation.style.background = "rgb(162, 235, 52)";
    btnHistory.style.background = "";

    btnDonation.style.border = "none";
    btnHistory.style.border = "1px solid gray";

    btnDonation.style.color = "black";
    btnHistory.style.color = "rgb(189, 187, 210)";
  });

  btnHistory.addEventListener("click", function () {
    donationContainer.style.display = "none";
    historyContainer.style.display = "block";

    btnDonation.style.background = "";
    btnHistory.style.background = "rgb(162, 235, 52)";

    btnDonation.style.border = "1px solid gray";
    btnHistory.style.border = "none";

    btnDonation.style.color = "rgb(189, 187, 210)";
    btnHistory.style.color = "black";
  });
};
