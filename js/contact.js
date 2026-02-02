// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Close other open FAQ items
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== this) {
                        otherQuestion.classList.remove('active');
                        const otherAnswer = otherQuestion.nextElementSibling;
                        otherAnswer.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                this.classList.toggle('active');
                const answer = this.nextElementSibling;
                
                if (this.classList.contains('active')) {
                    answer.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.classList.remove('active');
                    answer.style.maxHeight = null;
                }
            });
        });
        
        // Open first FAQ by default
        if (faqQuestions.length > 0) {
            faqQuestions[0].click();
        }
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            
            // Basic validation
            if (!validateContactForm(formObject)) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // In a real implementation, you would send this to a server
            // For demo purposes, we'll simulate an API call
            setTimeout(() => {
                // Show success message
                successMessage.style.display = 'block';
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to success message
                successMessage.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 10000);
                
                // Log form data (in real app, this would be sent to server)
                console.log('Form submitted:', formObject);
                
                // You would typically send this data to your server:
                // Example using fetch:
                /*
                fetch('your-server-endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formObject)
                })
                .then(response => response.json())
                .then(data => {
                    // Handle success
                    successMessage.style.display = 'block';
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                })
                .catch(error => {
                    // Handle error
                    alert('There was an error sending your message. Please try again.');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
                */
                
            }, 1500); // Simulate network delay
        });
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                showError(emailInput, 'Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            // Simulate subscription
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Log subscription (in real app, send to server)
                console.log('Newsletter subscription:', email);
            }, 1000);
        });
    }
    
    // Smooth scroll to contact form from engagement cards
    const engagementLinks = document.querySelectorAll('.engagement-card .btn');
    
    engagementLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#contact-form') {
                e.preventDefault();
                
                const contactFormSection = document.getElementById('contact-form');
                if (contactFormSection) {
                    // Get the engagement type from button text
                    const engagementType = this.textContent.toLowerCase();
                    const interestSelect = document.getElementById('interest');
                    
                    // Set appropriate option in dropdown
                    if (engagementType.includes('youth')) {
                        interestSelect.value = 'youth';
                    } else if (engagementType.includes('partner')) {
                        interestSelect.value = 'partner';
                    } else if (engagementType.includes('support')) {
                        interestSelect.value = 'volunteer';
                    }
                    
                    // Scroll to form
                    contactFormSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Form validation functions
    function validateContactForm(formData) {
        let isValid = true;
        
        // Clear previous errors
        clearAllErrors();
        
        // Validate name
        if (!formData.name || formData.name.trim().length < 2) {
            showError(document.getElementById('name'), 'Please enter your full name');
            isValid = false;
        }
        
        // Validate email
        if (!formData.email || !validateEmail(formData.email)) {
            showError(document.getElementById('email'), 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate interest
        if (!formData.interest) {
            showError(document.getElementById('interest'), 'Please select an option');
            isValid = false;
        }
        
        // Validate message
        if (!formData.message || formData.message.trim().length < 10) {
            showError(document.getElementById('message'), 'Please enter a message (at least 10 characters)');
            isValid = false;
        }
        
        // Validate privacy policy
        if (!formData.privacy) {
            const privacyCheckbox = document.getElementById('privacy');
            showError(privacyCheckbox.parentElement, 'You must accept the privacy policy');
            isValid = false;
        }
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        
        if (field.hasAttribute('required') && !value) {
            showError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && value && !validateEmail(value)) {
            showError(field, 'Please enter a valid email address');
            return false;
        }
        
        if (field.id === 'name' && value.length < 2) {
            showError(field, 'Name must be at least 2 characters');
            return false;
        }
        
        if (field.id === 'message' && value.length < 10) {
            showError(field, 'Message must be at least 10 characters');
            return false;
        }
        
        clearError(field);
        return true;
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showError(field, message) {
        // Remove existing error
        clearError(field);
        
        // Add error class to field
        field.classList.add('error');
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--coral)';
        errorElement.style.fontSize = '0.9rem';
        errorElement.style.marginTop = '5px';
        
        // Insert error message after field
        field.parentNode.insertBefore(errorElement, field.nextSibling);
        
        // Scroll to error
        field.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    function clearError(field) {
        field.classList.remove('error');
        
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
    }
    
    function clearAllErrors() {
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
            
            const errorElement = field.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.remove();
            }
        });
    }
    
    // Add CSS for error states
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: var(--coral) !important;
            background-color: rgba(255, 107, 107, 0.05) !important;
        }
        
        .error:focus {
            box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1) !important;
        }
        
        .checkbox-group.error label {
            color: var(--coral) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Animate engagement cards on scroll
    const engagementCards = document.querySelectorAll('.engagement-card');
    
    if (engagementCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        engagementCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(card);
        });
    }
    
    // Set current year in footer if not already set
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan && !yearSpan.textContent) {
        yearSpan.textContent = new Date().getFullYear();
    }
});