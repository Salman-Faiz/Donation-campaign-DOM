// Get numeric value from a non-input HTML element
export function getInnerText(elementId) {
  const getStringValue = document.getElementById(elementId).innerText.trim();
  const getNumericValue = parseFloat(getStringValue);

  if (isNaN(getNumericValue)) {
    return 0;
  }

  return getNumericValue;
}

// Get numeric value from an input field
export function getValue(elementId) {
  const getStringValue = document.getElementById(elementId).value.trim();

  // Using this regular expression to validate that the input contains only numbers
  const isNumeric = /^\d+(\.\d+)?$/.test(getStringValue);

  if (!isNumeric) {
    return 0;
  }

  const getNumericValue = parseFloat(getStringValue);
  return getNumericValue;
}

// Set value to the destination element (updates innerText)
export function setValue(destinationId, finalValue) {
  const destination = document.getElementById(destinationId);
  destination.textContent = finalValue; // Update textContent with the new value
}

// addition (sum of previous and new donations)
export function add(previousDonation, newDonation) {
  return previousDonation + newDonation;
}

//  subtraction (remaining balance after donation)
export function substraction(previousAmount, donatedAmount) {
  return previousAmount - donatedAmount;
}

// Donation functionalities
export function donateMoney(
  inputAmountId,
  donatedAmountId,
  availableBalanceId
) {
  const inputAmount = getValue(inputAmountId);
  const availableBalance = getInnerText(availableBalanceId);

  if (inputAmount > 0) {
    if (availableBalance >= inputAmount) {
      const innerTextAmount = getInnerText(donatedAmountId);
      const sum = add(innerTextAmount, inputAmount);
      // Reduce money from current balance
      const remainingBalance = substraction(availableBalance, inputAmount);
      // Update quotaAmount and availableBalance in the UI
      setValue(donatedAmountId, sum);
      setValue(availableBalanceId, remainingBalance);
    } else {
      document.getElementById(inputAmountId).value = "";
      return alert("Insufficient Balance");
    }
  } else {
    document.getElementById(inputAmountId).value = "";
    return alert("Invalid input: Amount must be a positive number");
  }
}

// show Modal

export function showModal() {
  const modal = document.getElementById("congratsModal");
  const closeModal = document.getElementById("closeModal");
  modal.classList.remove("hidden");
  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

// history container elements
export function donationRecords(amount, title) {
  const historyDiv = document.createElement("div");
  // donation records date
  const donatedTime = new Date().toString();
  historyDiv.innerHTML = ` <div class="border-2 border-gray-300 mt-10 rounded-lg p-6">
                <h1 class="text-xl text-black font-bold">${amount} Taka is Donated ${title}</h1>
                  <p class='text-gray-500'><strong>Date:</strong> ${donatedTime}</p>
            </div>`;

  document.getElementById("historyContainer").appendChild(historyDiv);
}
