// Initialize particles.js with enhanced effects
particlesJS('particles-js', {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#6c63ff', '#8b85ff', '#1E3A8A']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 1,
                color: '#6c63ff'
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6c63ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: ['grab', 'bubble']
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                    color: '#8b85ff'
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Enhanced Typed.js initialization
let typed;
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ['Frontend Development', 'Web Development'],
        typeSpeed: 140,
        backSpeed: 80,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
        showCursor: true,
        smartBackspace: true,
        startDelay: 1000,
        autoInsertCss: false,
        onInit: (self) => {
            setTimeout(() => {
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
                    cursor.style.display = 'inline-block';
                    cursor.style.position = 'relative';
            cursor.style.color = '#DC1F26';
                    cursor.style.fontWeight = 'bold';
                    cursor.style.fontSize = '1.8rem';
                    cursor.style.animation = 'blink 1s infinite';
                }
            }, 100);
        },
        onStringTyped: (arrayPos, self) => {
            const cursor = document.querySelector('.typed-cursor');
            if (cursor) {
                cursor.style.display = 'inline-block';
                cursor.style.position = 'relative';
                cursor.style.color = '#DC1F26';
                cursor.style.fontWeight = 'bold';
                cursor.style.fontSize = '1.8rem';
            }
        }
    };
    
    // Remove any existing instances
    const element = document.querySelector('.typed-text');
    if (element && element._typed) {
        element._typed.destroy();
    }
    
    // Initialize new instance
    typed = new Typed('.typed-text', options);
    
    // Add CSS animation for cursor blink if not defined
    if (!document.querySelector('#typed-cursor-style')) {
        const style = document.createElement('style');
        style.id = 'typed-cursor-style';
        style.textContent = `
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .typed-cursor {
                animation: blink 1s infinite;
            }
        `;
        document.head.appendChild(style);
    }
});

// Smooth scroll with enhanced easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced scroll animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', scrollAnimations);
window.addEventListener('load', scrollAnimations);

// Initialize animations
function initializeAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        
        const elements = section.querySelectorAll('.animate-on-scroll');
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });
}

// Initialize Hero Section Animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to hero section elements with delays
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-text, .hero-text h1, .hero-text h2, .role, .hero-image, .hero-text .social-links, .cta-button');
        heroElements.forEach(element => {
            element.classList.add('animate');
        });
    }, 100);

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#6c63ff', '#8b85ff', '#1E3A8A']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 1,
                    color: '#6c63ff'
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c63ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: ['grab', 'bubble']
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                        color: '#8b85ff'
                    }
                },
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Initialize other animations
    initializeAnimations();
});

// Function to trigger section-specific animations
function triggerSectionAnimations(section) {
    const sectionId = section.id;
    
    switch(sectionId) {
        case 'about':
            // Add visible class to about section
            section.classList.add('visible');
            
            // Add visible class to about text elements
            const aboutText = section.querySelector('.about-text');
            if (aboutText) {
                aboutText.classList.add('visible');
                
                // Add visible class to text elements with delay
                const textElements = aboutText.querySelectorAll('h2, p, .social-links, .download-resume');
                textElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, index * 200); // 200ms delay between each element
                });
            }
            break;
            
        case 'education':
            const educationItems = section.querySelectorAll('.education-item');
            educationItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.classList.add('fade-in');
            });
            break;
            
        case 'skills':
            const skillCategories = section.querySelectorAll('.skill-category');
            skillCategories.forEach((category, index) => {
                category.style.animationDelay = `${index * 0.2}s`;
                category.classList.add('scale-in');
            });
            break;
            
        case 'projects':
            const projectCards = section.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('fade-in');
            });
            break;
            
        case 'contact':
            const contactForm = section.querySelector('.contact-form');
            const contactInfo = section.querySelector('.contact-info');
            if (contactForm) contactForm.classList.add('slide-in-left');
            if (contactInfo) contactInfo.classList.add('slide-in-right');
            break;
    }
}

// Section transition observer
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            
            // Trigger section-specific animations
            triggerSectionAnimations(section);
            
            // Unobserve after animation
            sectionObserver.unobserve(section);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '50px'
});

// Add data-text attribute to hero heading for shadow effect
document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('.hero-text h1');
    if (heroHeading) {
        heroHeading.setAttribute('data-text', heroHeading.textContent);
    }

    // Initialize animations
    initializeAnimations();
    
    // Initialize progress circles
    initProgressCircles();
    
    // Add gradient text effect to section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('gradient-text');
    });

    // Ensure all sections are visible initially
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
        section.style.visibility = 'visible';
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
});

// Enhanced text animation for hero section
function animateHeroText() {
    const heroText = document.querySelector('.hero-text h1');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Enhanced parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// About Section Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove any rotation animations from the image
                const imageContainer = entry.target.querySelector('.image-container');
                if (imageContainer) {
                    imageContainer.style.animation = 'none';
                    imageContainer.style.transform = 'none';
                }

                // Get all animated elements in the about section
                const elements = entry.target.querySelectorAll(
                    '.about-name, .about-role, .about-text p, .contact-details, .download-resume'
                );
                
                // Add animation classes with increasing delays
                elements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, index * 200); // 200ms delay between each element
                });

                // Animate the image with fade-in only
                const aboutImage = entry.target.querySelector('.about-image');
                if (aboutImage) {
                    setTimeout(() => {
                        aboutImage.classList.add('animate');
                    }, elements.length * 200); // Add image animation after text elements
                }

                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing the about section
    const aboutSection = document.querySelector('.about-content');
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Remove any existing rotation animations
    const allImageContainers = document.querySelectorAll('.image-container');
    allImageContainers.forEach(container => {
        container.style.animation = 'none';
        container.style.transform = 'none';
    });
});

// Education Section Animation - Fixed with first card animation
document.addEventListener('DOMContentLoaded', function() {
    // Create a new intersection observer for the education section
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Education section is visible");
                const educationItems = entry.target.querySelectorAll('.education-item');
                
                // Reset all items first to make sure they're hidden
                educationItems.forEach(item => {
                    item.style.opacity = '0';
                    item.style.visibility = 'hidden';
                    item.style.transform = 'scale(0.8) translateY(50px)';
                    item.classList.remove('animate');
                });
                
                // First ensure they're all visible but with opacity 0
                educationItems.forEach(item => {
                    item.style.visibility = 'visible';
                });
                
                // Animate each item with a delay, including the first card
                educationItems.forEach((item, index) => {
                    setTimeout(() => {
                        // Force reflow before adding the animate class
                        void item.offsetWidth;
                        item.classList.add('animate');
                    }, index * 400); // 400ms delay between each card
                });
                
                // Stop observing after animation is triggered
                educationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,  // Trigger when 20% of the section is visible
        rootMargin: '-50px 0px -100px 0px'  // Adjust trigger area for earlier animation
    });
    
    // Start observing the education section
    const educationSection = document.querySelector('.education-content');
    if (educationSection) {
        educationObserver.observe(educationSection);
    }
});

// Projects section animation with staggered reveal effect
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Projects section is visible");
            const projectCards = entry.target.querySelectorAll('.project-card');
            
            // Reset all cards first
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.visibility = 'hidden';
                card.style.transform = 'scale(0.8) translateY(50px)';
                // Remove existing animation classes
                card.classList.remove('animate', 'slide-in-up');
            });
            
            // Animate each card with a unique animation
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    // Add custom animation class based on position
                    card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    card.style.visibility = 'visible';
                    
                    // Different animation for each card position
                    if (index === 0) {
                        // First card - slide in from left with rotation
                        card.style.transform = 'translateX(-100px) rotate(-5deg)';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateX(0) rotate(0deg)';
                        }, 50);
                    } 
                    else if (index === 1) {
                        // Second card - slide up with scale
                        card.style.transform = 'translateY(100px) scale(0.9)';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    }
                    else {
                        // Third card - slide in from right with rotation
                        card.style.transform = 'translateX(100px) rotate(5deg)';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateX(0) rotate(0deg)';
                        }, 50);
                    }
                    
                    // Animate content inside the card
                    const projectImage = card.querySelector('.project-image');
                    const projectContent = card.querySelector('.project-content');
                    const projectTech = card.querySelector('.project-tech');
                    const projectLinks = card.querySelector('.project-links');
                    
                    if (projectImage) {
                        projectImage.style.opacity = '0';
                        projectImage.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            projectImage.style.transition = 'all 0.6s ease 0.2s';
                            projectImage.style.opacity = '1';
                            projectImage.style.transform = 'translateY(0)';
                        }, 300);
                    }
                    
                    if (projectContent) {
                        const title = projectContent.querySelector('h3');
                        const desc = projectContent.querySelector('p');
                        
                        if (title) {
                            title.style.opacity = '0';
                            title.style.transform = 'translateX(-20px)';
                            setTimeout(() => {
                                title.style.transition = 'all 0.5s ease 0.4s';
                                title.style.opacity = '1';
                                title.style.transform = 'translateX(0)';
                            }, 400);
                        }
                        
                        if (desc) {
                            desc.style.opacity = '0';
                            desc.style.transform = 'translateX(-20px)';
                            setTimeout(() => {
                                desc.style.transition = 'all 0.5s ease 0.6s';
                                desc.style.opacity = '1';
                                desc.style.transform = 'translateX(0)';
                            }, 600);
                        }
                    }
                    
                    if (projectTech) {
                        projectTech.style.opacity = '0';
                        projectTech.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            projectTech.style.transition = 'all 0.5s ease 0.8s';
                            projectTech.style.opacity = '1';
                            projectTech.style.transform = 'translateY(0)';
                        }, 800);
                        
                        // Animate each tech tag
                        const techSpans = projectTech.querySelectorAll('span');
                        techSpans.forEach((span, i) => {
                            span.style.opacity = '0';
                            span.style.transform = 'translateY(10px)';
                            setTimeout(() => {
                                span.style.transition = 'all 0.3s ease';
                                span.style.opacity = '1';
                                span.style.transform = 'translateY(0)';
                            }, 900 + (i * 100));
                        });
                    }
                    
                    if (projectLinks) {
                        projectLinks.style.opacity = '0';
                        projectLinks.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            projectLinks.style.transition = 'all 0.5s ease 1s';
                            projectLinks.style.opacity = '1';
                            projectLinks.style.transform = 'translateY(0)';
                        }, 1000);
                    }
                    
                }, index * 600); // 600ms delay between cards
            });
            
            // Unobserve after triggering animations
            projectsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px 0px -100px 0px'
});

// Start observing projects section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsObserver.observe(projectsGrid);
    }
});

// Contact Section Animation
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate all elements with contact animation classes
            const elements = entry.target.querySelectorAll('.contact-heading, .contact-text, .contact-detail-item, .contact-social, .contact-form-container');
            elements.forEach(element => {
                element.classList.add('animate');
            });
            
            // Add hover effects to form on mobile
            if (window.innerWidth <= 768) {
                const contactForm = entry.target.querySelector('.contact-form');
                if (contactForm) {
                    contactForm.classList.add('hover-effect');
                }
            }
            
            // Stop observing after animation is triggered
            contactObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

// Start observing when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe projects section
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsObserver.observe(projectsGrid);
    }
    
    // Observe contact section
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactObserver.observe(contactSection);
        setupFormInteractions();
        setupFormTilt();
    }
    
    // Setup the about image tilt effect
    setupAboutImageTilt();
    
    // Setup the hero image tilt effect
    setupHeroImageTilt();
});

// Skills section observer and animation with step-by-step cards
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get all skill categories 
            const skillCategories = document.querySelectorAll('.skill-category');
            
            // Hide all categories first to prepare for animation
            skillCategories.forEach(category => {
                category.style.opacity = '0';
                category.style.transform = 'translateY(30px)';
                category.style.visibility = 'hidden';
            });
            
            // Animate each skill category with a delay
            skillCategories.forEach((category, categoryIndex) => {
                setTimeout(() => {
                    // Make category visible with animation
                    category.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                    category.style.visibility = 'visible';
                    
                    // Get progress circles within this category
                    const progressCircles = category.querySelectorAll('.progress-circle');
                    
                    // Reset and prepare all circles first
                    progressCircles.forEach(circle => {
                        const progressValue = circle.querySelector('.progress-circle-value');
                        if (progressValue) {
                            progressValue.style.setProperty('--progress', '0deg');
                        }
                    });
                    
                    // Animate each progress circle with a staggered delay
                    progressCircles.forEach((circle, index) => {
                        // Get the target percentage
                        const progress = circle.getAttribute('data-progress');
                        const percentValue = parseInt(progress);
                        
                        // Only start circle animations after the category has appeared
                        setTimeout(() => {
                            // Calculate degrees for the progress
                            const maxDegrees = (percentValue / 100) * 360;
                            
                            // Use requestAnimationFrame for smoother animation
                            const duration = 1500; // 1.5 seconds
                            const startTime = performance.now();
                            
                            function animateProgress(currentTime) {
                                const elapsedTime = currentTime - startTime;
                                const progress = Math.min(elapsedTime / duration, 1);
                                
                                // Calculate current value based on progress
                                const currentValue = Math.round(percentValue * progress);
                                
                                // Update the icon's visibility
                                const icon = circle.querySelector('i');
                                if (icon) {
                                    icon.style.opacity = progress > 0.3 ? '1' : (progress * 3);
                                }
                                
                                // Update the percentage text
                                const percentageText = circle.parentElement.querySelector('.percentage');
                                if (percentageText) {
                                    percentageText.textContent = `${currentValue}%`;
                                }
                                
                                // Update the ring fill
                                const progressValue = circle.querySelector('.progress-circle-value');
                                if (progressValue) {
                                    const currentDegrees = (currentValue / 100) * 360;
                                    progressValue.style.setProperty('--progress', `${currentDegrees}deg`);
                                }
                                
                                // Continue animation if not complete
                                if (progress < 1) {
                                    requestAnimationFrame(animateProgress);
                                }
                            }
                            
                            // Start the animation
                            requestAnimationFrame(animateProgress);
                        }, index * 400); // 400ms delay between each circle
                    });
                }, categoryIndex * 600); // 600ms delay between each category
            });
            
            // Unobserve after triggering animations
            skillsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px 0px -100px 0px'
});

// Start observing skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Form input focus animation
function setupFormInteractions() {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            const icon = input.nextElementSibling;
            if (icon) {
                icon.classList.add('focused');
            }
        });
        
        input.addEventListener('blur', () => {
            const icon = input.nextElementSibling;
            if (icon) {
                icon.classList.remove('focused');
            }
        });
    });
}

// Add 3D tilt effect to contact form
function setupFormTilt() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('mousemove', (e) => {
        const rect = contactForm.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        contactForm.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    contactForm.addEventListener('mouseleave', () => {
        contactForm.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// Add 3D tilt effect to the About image
function setupAboutImageTilt() {
    const aboutImageContainer = document.querySelector('.about-image .image-container');
    
    if (!aboutImageContainer) return;
    
    // Only add tilt effect after initial animation is complete
    setTimeout(() => {
        // Initialize the shine effect
        const shineEffect = document.createElement('div');
        shineEffect.classList.add('shine-effect');
        aboutImageContainer.appendChild(shineEffect);
        
        // Add reflection effect
        const reflection = document.createElement('div');
        reflection.classList.add('reflection');
        aboutImageContainer.appendChild(reflection);
        
        aboutImageContainer.addEventListener('mousemove', (e) => {
            const rect = aboutImageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            aboutImageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            aboutImageContainer.style.transition = 'transform 0.1s linear';
            
            // Update shine effect
            if (shineEffect) {
                const percentage = (x / rect.width) * 100;
                shineEffect.style.backgroundPosition = `${percentage}% 0`;
                shineEffect.style.opacity = '1';
            }
            
            // Update reflection based on tilt
            if (reflection) {
                reflection.style.opacity = 0.3 + (Math.abs(rotateX) / 40);
            }
        });
        
        aboutImageContainer.addEventListener('mouseleave', () => {
            aboutImageContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            aboutImageContainer.style.transition = 'transform 0.5s ease';
            
            // Reset effects
            if (shineEffect) {
                shineEffect.style.opacity = '0';
            }
            
            // Reset reflection
            if (reflection) {
                reflection.style.opacity = '0';
            }
        });
    }, 1500); // Wait for initial animations to complete
}

// Add 3D tilt effect to Hero image
function setupHeroImageTilt() {
    const heroImageContainer = document.querySelector('.hero-image .image-container');
    
    if (!heroImageContainer) return;
    
    // Only add tilt effect after initial animation is complete
    setTimeout(() => {
        // Initialize the shine effect
        const shineEffect = document.createElement('div');
        shineEffect.classList.add('shine-effect');
        heroImageContainer.appendChild(shineEffect);
        
        // Add reflection effect
        const reflection = document.createElement('div');
        reflection.classList.add('reflection');
        heroImageContainer.appendChild(reflection);
        
        heroImageContainer.addEventListener('mousemove', (e) => {
            const rect = heroImageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center for circular image
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radius = rect.width / 2;
            
            // Only apply effect if cursor is within the circle
            if (distance <= radius) {
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                heroImageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                heroImageContainer.style.transition = 'transform 0.1s linear';
                
                // Update shine effect
                if (shineEffect) {
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                    shineEffect.style.transform = `rotate(${angle + 45}deg) translateX(-50%)`;
                    shineEffect.style.opacity = '1';
                }
                
                // Update reflection based on tilt
                if (reflection) {
                    reflection.style.opacity = 0.3 + (Math.abs(rotateX) / 40);
                }
            }
        });
        
        heroImageContainer.addEventListener('mouseleave', () => {
            heroImageContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            heroImageContainer.style.transition = 'transform 0.5s ease';
            
            // Reset effects
            if (shineEffect) {
                shineEffect.style.opacity = '0';
            }
            
            // Reset reflection
            if (reflection) {
                reflection.style.opacity = '0';
            }
        });
    }, 1500); // Wait for initial animations to complete
}

// Improved function for About Image animation
function fixAboutImageAnimation() {
    const aboutImage = document.querySelector('.about-image');
    const imageContainer = document.querySelector('.about-image .image-container');
    
    if (aboutImage) {
        // Clear any existing animations or styles
        aboutImage.style.animation = 'none';
        setTimeout(() => {
            // Force DOM reflow
            void aboutImage.offsetWidth;
            // Apply new animation
            aboutImage.style.animation = 'floatAnimation 6s ease-in-out infinite';
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateY(0)';
        }, 10);
    }
    
    if (imageContainer) {
        imageContainer.style.opacity = '1';
        
        // Add shine effect element if not already present
        if (!imageContainer.querySelector('.shine-effect')) {
            const shineEffect = document.createElement('div');
            shineEffect.className = 'shine-effect';
            imageContainer.appendChild(shineEffect);
        }
    }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', fixAboutImageAnimation);

// Also call it after page is fully loaded (for images and resources)
window.addEventListener('load', fixAboutImageAnimation);

// Initialize Particles.js for network background - highly visible version
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#6c63ff", "#8b85ff", "#4169E1"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "#6c63ff"
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.4,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 2,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c63ff",
                "opacity": 0.65,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 150,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const homeSection = document.getElementById('home');
    
    // Function to check scroll position and show/hide button
    function toggleScrollToTopButton() {
        // Get the bottom position of the home section
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        
        // Show button only after scrolling past the home section
        if (homeSectionBottom < 0) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    }
    
    // Add click event to scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Check scroll position on scroll
    window.addEventListener('scroll', toggleScrollToTopButton);
    
    // Initial check
    toggleScrollToTopButton();
});

// Enhanced Intersection Observer for all sections
document.addEventListener('DOMContentLoaded', function() {
    // Create observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const sectionId = section.id;
                
                // About section step-by-step animations
                if (sectionId === 'about') {
                    const aboutImage = section.querySelector('.about-image');
                    const aboutName = section.querySelector('.about-name');
                    const aboutRole = section.querySelector('.about-role');
                    const aboutParagraph = section.querySelector('.about-text p');
                    const contactDetails = section.querySelector('.contact-details');
                    const downloadResume = section.querySelector('.download-resume');
                    
                    // Set initial states
                    gsapFadeIn(aboutImage, 0);
                    gsapFadeIn(aboutName, 0.4);
                    gsapFadeIn(aboutRole, 0.8);
                    gsapFadeIn(aboutParagraph, 1.2);
                    gsapFadeIn(contactDetails, 1.6);
                    gsapFadeIn(downloadResume, 2.0);
                }
                
                // Education section step-by-step animations
                if (sectionId === 'education') {
                    const educationItems = section.querySelectorAll('.education-item');
                    
                    educationItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 300);
                    });
                }
                
                // Only disconnect observer for this section
                sectionObserver.unobserve(section);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // GSAP helper function for fade-in animations
    function gsapFadeIn(element, delay) {
        if (!element) return;
        
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'none';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay * 1000);
    }
});

// Make education items visible initially but with opacity 0
document.addEventListener('DOMContentLoaded', function() {
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach(item => {
        item.style.visibility = 'visible';
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8) translateY(50px)';
    });
}); 

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const successMessage = document.getElementById('success-message');
    const formMessage = document.getElementById('form-message');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    
    // Send form data to FormSubmit using fetch
    fetch('https://formsubmit.co/princekrnbt2004@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Show success message
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
        successMessage.style.display = 'block';
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        // Show error message
        formMessage.textContent = "Failed to send message. Please try again later.";
        formMessage.style.color = "#FF0000";
        formMessage.style.display = "block";
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const navItems = document.querySelectorAll('.nav-links a');

// Function to toggle mobile menu
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

// Function to close mobile menu
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking a link
navItems.forEach(link => {
    link.addEventListener('click', function() {
        closeMobileMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-menu-btn') && 
        !event.target.closest('.nav-links') && 
        navLinks.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Handle active link highlighting based on scroll position
function setActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Offset for better highlighting

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navItems.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to the current section's link
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Listen for scroll events to update active nav item
window.addEventListener('scroll', setActiveNavItem);
window.addEventListener('load', setActiveNavItem); 