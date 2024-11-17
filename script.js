// Elements
const promptpayInput = document.getElementById("promptpay-id");
const amountInput = document.getElementById("amount");
const generateButton = document.getElementById("generate");
const qrCodeContainer = document.getElementById("qrcode");
const displayId = document.getElementById("display-id");
const displayAmount = document.getElementById("display-amount");
const amountButtons = document.querySelectorAll(".amount-btn");

// Function to generate QR code
function generateQRCode() {
  const promptpayId = promptpayInput.value.trim();
  const amount = amountInput.value.trim();

  if (!promptpayId) {
    alert("Please enter a valid PromptPay ID.");
    return;
  }

  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  displayId.textContent = promptpayId;
  displayAmount.textContent = amount;

  const qrUrl = `https://promptpay.io/${promptpayId}/${amount}`;
  qrCodeContainer.innerHTML = `<img src="${qrUrl}" alt="PromptPay QR Code" style="width: 150px; height: 150px;">`;
}

// Event listener for generating QR code
generateButton.addEventListener("click", generateQRCode);

// Event listeners for amount buttons
amountButtons.forEach(button => {
  button.addEventListener("click", function() {
    const amount = this.getAttribute("data-amount");
    amountInput.value = amount; // Set amount input to the clicked value
  });
});
