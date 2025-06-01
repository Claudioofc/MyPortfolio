/*========================== toggle icon navbar==================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*========================== scroll section active link ======================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========================== stick navbar ========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================== remove toggle icon and navbar ========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========================== Sequential Animations (Mobile Optimized) ========================*/
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for sequential animations - optimized for mobile
    const observerOptions = {
        root: null,
        rootMargin: '-10px',
        threshold: window.innerWidth <= 768 ? 0.2 : 0.3 // Lower threshold for mobile
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const items = container.querySelectorAll('.skills-box, .certificates-box');
                
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * (window.innerWidth <= 450 ? 80 : 100)); // Faster on small mobile
                });
                
                observer.unobserve(container);
            }
        });
    }, observerOptions);

    // Observe skills and certificates containers
    const skillsContainer = document.querySelector('.skills-container');
    const certificatesContainer = document.querySelector('.certificates-container');
    
    if (skillsContainer) observer.observe(skillsContainer);
    if (certificatesContainer) observer.observe(certificatesContainer);
    
    // Mobile performance optimization
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile for better performance
        document.body.style.setProperty('--animation-duration', '0.6s');
        
        // Optimize cyber avatar for mobile
        const cyberAvatar = document.querySelector('.cyber-avatar');
        if (cyberAvatar) {
            cyberAvatar.style.setProperty('--particle-count', '8');
            cyberAvatar.style.setProperty('--animation-speed', '0.8');
        }
    }
    
    // Touch optimization for mobile hover effects
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.skills-box, .certificates-box, .projects-box, .btn, .social-media a');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 300);
            });
        });
    }
});

/*========================== scroll reveal ========================*/
ScrollReveal({
    distance: '80px',
    duration: window.innerWidth <= 768 ? 1500 : 2000, // Faster on mobile
    delay: window.innerWidth <= 768 ? 100 : 200, // Shorter delay on mobile
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-box', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .cyber-avatar', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

/*========================== typing effect ========================*/
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        typingElement.style.animationPlayState = 'running';
    }
});

/*========================== Mobile Menu Smooth Close ========================*/
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('#menu-icon');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-xmark');
            }
        });
    });
});

/*========================== Performance Optimization for Mobile ========================*/
if (window.innerWidth <= 768) {
    // Throttle scroll events on mobile
    let ticking = false;
    
    function updateScrollPosition() {
        // Your scroll handling code here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            location.reload();
        }, 300);
    });
}