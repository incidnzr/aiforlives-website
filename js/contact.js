// Contact Page JavaScript

document.addEventListener("DOMContentLoaded", function () {

  // ─── FAQ Accordion ───────────────────────────────────────────────────────────
  const faqQuestions = document.querySelectorAll(".faq-question");

  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        faqQuestions.forEach((other) => {
          if (other !== this) {
            other.classList.remove("active");
            other.nextElementSibling.classList.remove("active");
            other.nextElementSibling.style.maxHeight = null;
          }
        });

        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        if (this.classList.contains("active")) {
          answer.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.classList.remove("active");
          answer.style.maxHeight = null;
        }
      });
    });

    // Open first FAQ by default
    faqQuestions[0].click();
  }

  // ─── Contact Form → Netlify Forms ────────────────────────────────────────────
  const contactForm    = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (contactForm) {
    // Real-time validation on blur / input
    contactForm.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("blur",  () => validateField(input));
      input.addEventListener("input", () => clearError(input));
    });

    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData   = new FormData(this);
      const formObject = Object.fromEntries(formData.entries());

      if (!validateContactForm(formObject)) return;

      const submitBtn   = this.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      submitBtn.disabled  = true;

      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          successMessage.style.display = "block";
          contactForm.reset();
          successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => { successMessage.style.display = "none"; }, 10000);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        showError(
          submitBtn.closest(".form-submit"),
          "Something went wrong. Please email us directly at aiforlives@gmail.com"
        );
      } finally {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled  = false;
      }
    });
  }

  // ─── Newsletter Form → Netlify Forms ─────────────────────────────────────────
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address");
        return;
      }

      const submitBtn    = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Subscribing…";
      submitBtn.disabled    = true;

      try {
        const formData = new FormData(this);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          newsletterForm.innerHTML =
            '<p style="color:#fff;font-size:1.1rem;"><i class="fas fa-check-circle" style="color:var(--teal-light);margin-right:8px;"></i>Thanks for subscribing! We\'ll be in touch.</p>';
        } else {
          throw new Error("Subscription failed");
        }
      } catch {
        submitBtn.textContent = originalText;
        submitBtn.disabled    = false;
        alert("Subscription failed. Please try again or email us directly.");
      }
    });
  }

  // ─── Engagement card buttons → pre-fill dropdown & scroll ────────────────────
  document.querySelectorAll(".engagement-card .btn").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#contact-form") return;
      e.preventDefault();

      const type           = this.textContent.toLowerCase();
      const interestSelect = document.getElementById("interest");
      if (interestSelect) {
        if      (type.includes("youth"))   interestSelect.value = "youth";
        else if (type.includes("partner")) interestSelect.value = "partner";
        else if (type.includes("support")) interestSelect.value = "volunteer";
      }

      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // ─── Animate engagement cards on scroll ──────────────────────────────────────
  const engagementCards = document.querySelectorAll(".engagement-card");
  if (engagementCards.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity   = "1";
              entry.target.style.transform = "translateY(0)";
            }, i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    engagementCards.forEach((card) => {
      card.style.opacity    = "0";
      card.style.transform  = "translateY(30px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(card);
    });
  }

  // ─── Validation helpers ───────────────────────────────────────────────────────
  function validateContactForm(data) {
    clearAllErrors();
    let ok = true;

    if (!data.name || data.name.trim().length < 2) {
      showError(document.getElementById("name"), "Please enter your full name");
      ok = false;
    }
    if (!data.email || !validateEmail(data.email)) {
      showError(document.getElementById("email"), "Please enter a valid email address");
      ok = false;
    }
    if (!data.interest) {
      showError(document.getElementById("interest"), "Please select an option");
      ok = false;
    }
    if (!data.message || data.message.trim().length < 10) {
      showError(document.getElementById("message"), "Please enter a message (at least 10 characters)");
      ok = false;
    }
    if (!data.privacy) {
      showError(document.getElementById("privacy").parentElement, "You must accept the privacy policy");
      ok = false;
    }
    return ok;
  }

  function validateField(field) {
    const value = field.value.trim();
    if (field.hasAttribute("required") && !value) {
      showError(field, "This field is required"); return false;
    }
    if (field.type === "email" && value && !validateEmail(value)) {
      showError(field, "Please enter a valid email address"); return false;
    }
    if (field.id === "name"    && value.length < 2)  { showError(field, "Name must be at least 2 characters"); return false; }
    if (field.id === "message" && value.length < 10) { showError(field, "Message must be at least 10 characters"); return false; }
    clearError(field);
    return true;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(field, message) {
    clearError(field);
    field.classList.add("error");
    const el = document.createElement("div");
    el.className   = "error-message";
    el.textContent = message;
    field.parentNode.insertBefore(el, field.nextSibling);
    field.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function clearError(field) {
    field.classList.remove("error");
    const next = field.nextElementSibling;
    if (next?.classList.contains("error-message")) next.remove();
  }

  function clearAllErrors() {
    document.querySelectorAll(".error").forEach((f) => {
      f.classList.remove("error");
      const next = f.nextElementSibling;
      if (next?.classList.contains("error-message")) next.remove();
    });
  }

});
