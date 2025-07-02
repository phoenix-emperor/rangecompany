// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Navbar scroll behavior
const navbarScroll = {
    lastScroll: 0,
    navbar: document.querySelector('.navbar'),
    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                this.navbar.style.transform = 'translateY(0)';
                return;
            }

            if (currentScroll > this.lastScroll && !this.navbar.classList.contains('scroll-down')) {
                // Scroll down
                this.navbar.style.transform = 'translateY(-100%)';
                this.navbar.classList.add('scroll-down');
            } else if (currentScroll < this.lastScroll && this.navbar.classList.contains('scroll-down')) {
                // Scroll up
                this.navbar.style.transform = 'translateY(0)';
                this.navbar.classList.remove('scroll-down');
            }
            this.lastScroll = currentScroll;
        });
    }
};

// Initialize navbar scroll behavior
navbarScroll.init();

// Dark Mode Toggle
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-card, .value-card, .service-card, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate-in');
        }
    });
};

// Initial animation check
animateOnScroll();

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Add scroll animation to navbar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.boxShadow = 'none';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});
