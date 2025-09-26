// script.js

// ========== MOBILE NAVIGATION TOGGLE ==========
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
  
  // ========== CONTACT FORM VALIDATION ==========
  function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      return false; // prevent form submission
    }
  
    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Thank you! Your message has been submitted.");
    return true; // allow submission
  }
  