// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Smooth scroll function
function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
        });
    }
}

// Navbar Sticky and Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        // Apply scrolled state
        navbar.classList.add('sticky');
        navbar.classList.add('scrolled');

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-100px'; // Hide navbar
        } else {
            // Scrolling up
            navbar.style.top = '0'; // Show navbar
        }
    } else {
        // Revert to original state at top
        navbar.classList.remove('sticky');
        navbar.classList.remove('scrolled');
        navbar.style.top = '0'; // Ensure it’s visible
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); /* Prevent default jump */
        navLinks.classList.remove('show');
        navbar.style.top = '-100px'; /* Hide navbar */
        setTimeout(() => {
            navbar.style.top = '-100px';
        }, 300);

        const targetId = link.getAttribute('href').substring(1); /* Get section ID */
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, /* Adjust for navbar height */
                behavior: 'smooth' /* Smooth scroll */
            });
        }
    });
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('show');
        navbar.style.top = '-100px';
        setTimeout(() => {
            navbar.style.top = '-100px';
        }, 300);
        const href = link.getAttribute('href');
        if (href === 'resume.html') {
            window.location.href = href; // Navigate to resume.html
        } else {
            const targetId = href.substring(1);
            smoothScroll(targetId);
        }
    });
});

// Typed.js for Hero Section
if (document.querySelector('.typed-text')) {
    const typed = new Typed('.typed-text', {
        strings: ['Software Engineer', 'Python developer', 'Full Stack Developer', 'Web Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
}

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Message sent successfully!';
        contactForm.appendChild(successMessage);
        contactForm.reset();

        setTimeout(() => {
            successMessage.style.display = 'block';
        }, 10);

        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 3000);
    });
}

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Footer link clicks
const footerLinks = document.querySelector('.footer-links');
footerLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});

// Existing menu toggle and other code...
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});