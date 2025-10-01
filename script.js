  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("✅ Thank you, your message has been sent! We'll get back to you shortly.");

    form.reset();
  });