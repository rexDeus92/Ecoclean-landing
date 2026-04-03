/**
 * ECOCLEAN HOME - Main JavaScript
 * Handles scroll animations, mobile menu, form validation, and smooth interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initMobileMenu();
    initScrollAnimations();
    initFormValidation();
    initSmoothScroll();
    initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 * Handles opening/closing of mobile navigation
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    if (!menuToggle || !nav) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Update ARIA attributes for accessibility
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking nav links
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Scroll Animations (Fade In Up)
 * Uses Intersection Observer for performance
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (!fadeElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));
}

/**
 * Form Validation & Submission
 * Handles client-side validation and form submission
 */
function initFormValidation() {
    const form = document.getElementById('bookingForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isValid = validateForm(form);
        
        if (isValid) {
            // Show success state
            const submitBtn = form.querySelector('.booking__submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '✓ Request Sent!';
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#2A9D8F';
            
            // Log form data (in production, send to server)
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                
                // Remove validation success states
                form.querySelectorAll('.form__input, .form__select').forEach(input => {
                    input.classList.remove('input--success');
                });
            }, 3000);
        }
    });
    
    // Real-time validation on blur
    const inputs = form.querySelectorAll('.form__input, .form__select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        // Remove error state on input
        input.addEventListener('input', () => {
            if (input.classList.contains('input--error')) {
                validateField(input);
            }
        });
    });
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form
 * @returns {boolean}
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('.form__input, .form__select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Validate individual field
 * @param {HTMLInputElement|HTMLSelectElement} field
 * @returns {boolean}
 */
function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const type = field.type;
    
    // Clear previous states
    field.classList.remove('input--error', 'input--success');
    
    // Check required
    if (isRequired && !value) {
        showError(field, 'This field is required');
        return false;
    }
    
    // Check email format
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field, 'Please enter a valid email');
            return false;
        }
    }
    
    // Check phone format (basic)
    if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
        if (!phoneRegex.test(value)) {
            showError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    // Field is valid
    field.classList.add('input--success');
    return true;
}

/**
 * Show error message for field
 * @param {HTMLElement} field
 * @param {string} message
 */
function showError(field, message) {
    field.classList.add('input--error');
    field.setAttribute('aria-invalid', 'true');
    
    // Remove existing error message if any
    const existingError = field.parentNode.querySelector('.form__error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message
    const errorEl = document.createElement('span');
    errorEl.className = 'form__error';
    errorEl.textContent = message;
    errorEl.style.cssText = `
        color: #d32f2f;
        font-size: 14px;
        margin-top: 4px;
        display: block;
    `;
    
    field.parentNode.appendChild(errorEl);
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header Scroll Effect
 * Adds shadow on scroll for visual feedback
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });
}

/**
 * Utility: Debounce function for performance
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function for performance
 * @param {Function} func
 * @param {number} limit
 * @returns {Function}
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add CSS for input validation states dynamically
const validationStyles = document.createElement('style');
validationStyles.textContent = `
    .input--error {
        border-color: #d32f2f !important;
        background-color: #ffebee !important;
    }
    
    .input--success {
        border-color: #2A9D8F !important;
    }
`;
document.head.appendChild(validationStyles);
