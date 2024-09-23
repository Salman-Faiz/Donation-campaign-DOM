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
  {
    const inputAmount = getValue(inputAmountId);

    if (inputAmount > 0) {
      const innerTextAmount = getInnerText(donatedAmountId);
      const sum = add(innerTextAmount, inputAmount);

      // Reduce money from current balance
      const availableBalance = getInnerText(availableBalanceId);
      const remainingBalance = substraction(availableBalance, inputAmount);

      if (availableBalance >= inputAmount) {
        // Update quotaAmount and availableBalance in the UI
        setValue(donatedAmountId, sum);
        setValue(availableBalanceId, remainingBalance);
      } else {
        alert("Insufficient Balance");
      }
    } else {
      alert("Invalid input: Amount must be a positive number");
    }
  }
}
