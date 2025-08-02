angular.module('portfolioApp')
    .service('NavigationService', ['$window', function($window) {
        var self = this;
        
        // Configurar ScrollReveal
        this.initScrollReveal = function() {
            if (typeof ScrollReveal !== 'undefined') {
                ScrollReveal({
                    distance: '80px',
                    duration: 2000,
                    delay: 200,
                });

                ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
                ScrollReveal().reveal('.home-img, .projects-container, .certificates-container', { origin: 'bottom' });
                ScrollReveal().reveal('.about-img', { origin: 'left' });
                ScrollReveal().reveal('.about-content', { origin: 'right' });
            }
        };

        // Animar habilidades sequencialmente
        this.animateSkills = function() {
            var skillsSection = document.querySelector('#skills');
            var skillBoxes = document.querySelectorAll('.skills-box');
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        skillBoxes.forEach(function(box, index) {
                            setTimeout(function() {
                                box.classList.add('animate');
                            }, index * 150); // 150ms de delay entre cada item
                        });
                        observer.unobserve(skillsSection); // Para de observar após animar
                    }
                });
            }, {
                threshold: 0.5
            });

            if (skillsSection) {
                observer.observe(skillsSection);
            }
        };

        // Animar certificados sequencialmente
        this.animateCertificates = function() {
            var certificatesSection = document.querySelector('#certificates');
            var certificateBoxes = document.querySelectorAll('.certificates-box');
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        certificateBoxes.forEach(function(box, index) {
                            setTimeout(function() {
                                box.classList.add('animate');
                            }, index * 150); // 150ms de delay entre cada item
                        });
                        observer.unobserve(certificatesSection); // Para de observar após animar
                    }
                });
            }, {
                threshold: 0.5
            });

            if (certificatesSection) {
                observer.observe(certificatesSection);
            }
        };

        // Gerenciar scroll ativo
        this.initScrollHandler = function() {
            angular.element($window).on('scroll', function() {
                var sections = document.querySelectorAll('section');
                var navLinks = document.querySelectorAll('header nav a');
                
                sections.forEach(function(sec) {
                    var top = $window.scrollY;
                    var offset = sec.offsetTop - 150;
                    var height = sec.offsetHeight;
                    var id = sec.getAttribute('id');

                    if (top >= offset && top < offset + height) {
                        navLinks.forEach(function(link) {
                            link.classList.remove('active');
                        });
                        var activeLink = document.querySelector('header nav a[href*=' + id + ']');
                        if (activeLink) {
                            activeLink.classList.add('active');
                        }
                    }
                });

                // Sticky navbar
                var header = document.querySelector('header');
                if (header) {
                    header.classList.toggle('sticky', $window.scrollY > 100);
                }

                // Remove toggle icon and navbar
                var menuIcon = document.querySelector('#menu-icon');
                var navbar = document.querySelector('.navbar');
                if (menuIcon && navbar) {
                    menuIcon.classList.remove('fa-xmark');
                    navbar.classList.remove('active');
                }
            });
        };

        // Inicializar tudo
        this.init = function() {
            self.initScrollReveal();
            self.initScrollHandler();
            // Aguarda um pouco para garantir que o DOM esteja carregado
            setTimeout(function() {
                self.animateSkills();
                self.animateCertificates();
            }, 500);
        };
    }]); 