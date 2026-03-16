// Focus Areas Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Focus navigation functionality
  const focusNavItems = document.querySelectorAll(".focus-nav-item");
  const focusSections = document.querySelectorAll(".focus-area-section");

  if (focusNavItems.length > 0 && focusSections.length > 0) {
    // Show first section by default
    const firstSection = document.querySelector(".focus-area-section.active");
    if (!firstSection) {
      focusSections[0].classList.add("active");
      focusNavItems[0].classList.add("active");
    }

    // Navigation click handler
    focusNavItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("data-target");

        // Update active nav item
        focusNavItems.forEach((navItem) => {
          navItem.classList.remove("active");
        });
        this.classList.add("active");

        // Show corresponding section
        focusSections.forEach((section) => {
          section.classList.remove("active");
          if (section.id === targetId) {
            section.classList.add("active");

            // Smooth scroll to section
            setTimeout(() => {
              section.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 100);
          }
        });
      });
    });

    // URL hash handling
    function handleHashChange() {
      const hash = window.location.hash.substring(1);
      if (
        hash &&
        (hash === "media" || hash === "health" || hash === "environment")
      ) {
        const targetNav = document.querySelector(
          `.focus-nav-item[data-target="${hash}"]`
        );
        if (targetNav) {
          targetNav.click();
        }
      }
    }

    // Initial hash check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
  }

  // Stats animation for health section
  const statNumbers = document.querySelectorAll(".stat-number");

  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stat = entry.target;
            const targetValue = parseInt(stat.textContent);
            let current = 0;
            const increment = targetValue / 50; // 50 steps
            const duration = 1000; // 1 second
            const stepTime = duration / 50;

            const counter = setInterval(() => {
              current += increment;
              if (current >= targetValue) {
                stat.textContent = targetValue;
                clearInterval(counter);
              } else {
                stat.textContent = Math.floor(current);
              }
            }, stepTime);

            observer.unobserve(stat);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((stat) => {
      observer.observe(stat);
    });
  }

  // Animation for focus cards
  const focusCards = document.querySelectorAll(
    ".project-card, .highlight-card, .env-topic"
  );

  if (focusCards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 100);

            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    focusCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.transitionDelay = `${index * 0.1}s`;
      cardObserver.observe(card);
    });
  }

  // Update page title based on active section
  function updatePageTitle() {
    const activeSection = document.querySelector(".focus-area-section.active");
    if (activeSection) {
      const sectionName =
        activeSection.id.charAt(0).toUpperCase() + activeSection.id.slice(1);
      document.title = `AI for ${sectionName} - AI For Lives`;
    }
  }

  // Update title when section changes
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (mutation.target.classList.contains("active")) {
          updatePageTitle();
        }
      }
    });
  });

  focusSections.forEach((section) => {
    observer.observe(section, { attributes: true });
  });
});
