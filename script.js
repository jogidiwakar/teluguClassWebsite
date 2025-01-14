// Form Submission Script
document.getElementById("meetingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var timing = document.getElementById("timing").value;

  // Send an email notification (using your email service, e.g., EmailJS or a backend API)
  sendEmailNotification(name, email, phone, timing);

  // Send a WhatsApp message notification
  sendWhatsAppNotification(name, phone, timing);

  // Reset the form after submission
  document.getElementById("meetingForm").reset();

  alert("Meeting successfully arranged! We will contact you shortly.");
});

// Function to send an email notification
function sendEmailNotification(name, email, phone, timing) {
  var emailBody = `
    <h3>Meeting Scheduled for Telugu Course</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Preferred Time:</strong> ${timing}</p>
  `;

  // Example: Sending email using an email service (EmailJS or backend API)
  console.log("Sending email notification to: jogidiwakarjogi@gmail.com");
  console.log("Email Body: " + emailBody);
  // Use EmailJS or another email service to send the email here
}

// Function to send a WhatsApp message notification
function sendWhatsAppNotification(name, phone, timing) {
  var message = `*Meeting scheduled for Telugu course*\n\nName: ${name}\nPhone: ${phone}\nPreferred Time: ${timing}`;

  // Sending WhatsApp message using the WhatsApp API link
  var whatsappUrl = `https://wa.me/9381012709?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}