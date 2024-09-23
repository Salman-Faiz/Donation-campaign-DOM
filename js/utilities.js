// get value from the html element
export function getInnerText(elementId) {
  const getStringValue = document.getElementById(elementId).innerText;
  const getNumericValue = parseFloat(getStringValue);
  console.log(getNumericValue);

  return getNumericValue;
}

// get value from the input field
export function getValue(elementId) {
  const getStringValue = document.getElementById(elementId).value;
  const getNumericValue = parseFloat(getStringValue);
  console.log(getNumericValue);

  return getNumericValue;
}

// set Value to the destination
export function setValue(destinationId, finalValue) {
  const destination = document.getElementById(destinationId);
  destination.textContent = finalValue;
}

// addition
export function add(previousDonation, newDonation) {
  const totalDonatedAmount = previousDonation + newDonation;
  return totalDonatedAmount;
}

// substraction
export function substraction(previousAmount, donatedAmount) {
  const currentAmount = previousAmount - donatedAmount;
  return currentAmount;
}
