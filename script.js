ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});

<script>
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (err) => {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", err);
    });
});
</script>

ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});
