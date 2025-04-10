function bookService() {
  const phone = "917836840700"; // Your WhatsApp number
  const message =
    "Hello! I'd like to book a service. Kindly guide me through the process.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
function openWhatsApp() {
  const phone = "917836840700"; // your WhatsApp number (without +)
  const message = "Hi, I'd like to book a service. Please assist me.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
function makeCall() {
  const phone = "917836840700"; // your phone number
  window.location.href = `tel:${phone}`;
}

