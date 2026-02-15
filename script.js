document.addEventListener('DOMContentLoaded', () => {
    // Reveal Mechanism
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach((reveal) => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
             mobileMenu.classList.toggle('hidden');
             mobileMenu.classList.toggle('opacity-0');
             mobileMenu.classList.toggle('opacity-100');
             mobileMenu.classList.toggle('translate-y-[-20px]');
             mobileMenu.classList.toggle('translate-y-0');
        });
    }

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Validation (Basic)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for contacting Novara Natural. We will get back to you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
