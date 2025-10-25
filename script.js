// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const header = document.getElementById('header');

    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

   // Contact Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default first
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const company = document.getElementById('company').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        // Validate company
        if (company === '') {
            showError('company', 'Company is required');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone
        if (phone === '') {
            showError('phone', 'Phone is required');
            isValid = false;
        }
        
        // If form IS valid, submit it
        if (isValid) {
            contactForm.submit(); // Actually submit to Formspree
        }
    });
}
    // Helper function to show error
    function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        input.classList.add('error');
        if (errorDiv) {
            errorDiv.textContent = message;
        }
    }
    
    // Helper function to clear all errors
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });
        
        const errorInputs = document.querySelectorAll('.form-input.error');
        errorInputs.forEach(function(input) {
            input.classList.remove('error');
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Smooth scroll to top
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});

// Carousel Functionality
const carouselTrack = document.querySelector('.carousel-track');
if (carouselTrack) {
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');
    const dotsContainer = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsContainer.children);
    
    let currentIndex = 0;
    
    const updateCarousel = (index) => {
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentIndex = index;
    };
    
    nextButton.addEventListener('click', () => {
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        updateCarousel(nextIndex);
    });
    
    prevButton.addEventListener('click', () => {
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        updateCarousel(prevIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        updateCarousel(nextIndex);
    }, 5000);

}

