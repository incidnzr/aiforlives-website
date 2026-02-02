// Additional components for AI For Lives website

// Accordion for FAQ section
function initAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent = header.nextElementSibling;

      // Close other open items
      document.querySelectorAll(".accordion-item.active").forEach((item) => {
        if (item !== accordionItem) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Toggle current item
      accordionItem.classList.toggle("active");

      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
}

// Form validation for contact form
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      let isValid = true;

      // Reset error states
      [name, email, message].forEach((field) => {
        field.classList.remove("error");
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
          errorElement.remove();
        }
      });

      // Validate name
      if (!name.value.trim()) {
        showError(name, "Please enter your name");
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, "Please enter your email address");
        isValid = false;
      } else if (!emailRegex.test(email.value)) {
        showError(email, "Please enter a valid email address");
        isValid = false;
      }

      // Validate message
      if (!message.value.trim()) {
        showError(message, "Please enter your message");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, "Message should be at least 10 characters long");
        isValid = false;
      }

      if (isValid) {
        // Here you would normally submit the form to a server
        // For now, show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
          alert("Thank you for your message! We will get back to you soon.");
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  }
}

function showError(input, message) {
  input.classList.add("error");

  const errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  errorElement.style.color = "var(--coral)";
  errorElement.style.fontSize = "0.9rem";
  errorElement.style.marginTop = "5px";

  input.parentNode.insertBefore(errorElement, input.nextSibling);
}

// Project filtering
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".project-filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Filter projects
      projectItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 10);
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initContactForm();
  initProjectFilter();
});
