// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll(
    '.pain-card, .module-card, .result-card, .show-card, .about-text, .cta-text, .cta-form-wrapper, .leadmagnet-text, .leadmagnet-form-wrapper, .shift-card, .shift-callout, .pricing-card, .insight-card, .stat-item'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Lead magnet form handling
const leadMagnetForm = document.getElementById('leadMagnetForm');
if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(leadMagnetForm);
        const data = Object.fromEntries(formData);

        // Show success message (replace with real form handler later - e.g. ConvertKit, Mailchimp, etc.)
        leadMagnetForm.innerHTML = `
            <div class="form-success">
                <h3>Check Your Inbox!</h3>
                <p>The guide is on its way to <strong>${data.email}</strong>. If you don't see it in a few minutes, check your spam folder.</p>
            </div>
        `;

        console.log('Lead magnet form submitted:', data);
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message (replace with real form handler later)
        contactForm.innerHTML = `
            <div class="form-success">
                <h3>Got It!</h3>
                <p>I'll get back to you personally within 24 hours. Looking forward to talking strategy.</p>
                <p style="margin-top: 12px; font-size: 0.9rem;">&mdash; Fabio</p>
            </div>
        `;

        console.log('Contact form submitted:', data);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});
