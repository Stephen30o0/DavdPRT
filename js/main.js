/**
 * Palmwine Papi - Main JavaScript
 * Nigerian Alte Aesthetic Portfolio
 */

// ==========================================================================
// Global Variables and Initialization
// ==========================================================================

let currentSection = 'hero';
let isScrolling = false;
let lastScrollTime = 0;
const scrollThreshold = 100;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ==========================================================================
// App Initialization
// ==========================================================================

function initializeApp() {
    setupSmoothScrolling();
    setupScrollAnimations();
    setupParallaxEffects();
    setupFormHandling();
    setupCursorEffects();
    setupIntersectionObserver();
    setupTextAnimations();
    addLoadingStates();
    console.log('Palmwine Papi portfolio initialized');
}

// ==========================================================================
// Smooth Scrolling Implementation
// ==========================================================================

function setupSmoothScrolling() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile nav if open
                const navOverlay = document.getElementById('navOverlay');
                const navToggle = document.getElementById('navToggle');
                if (navOverlay.classList.contains('active')) {
                    navOverlay.classList.remove('active');
                    navToggle.classList.remove('active');
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update current section
                currentSection = targetId;
                updateActiveNavLink(targetId);
            }
        });
    });
}

function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================================================
// Scroll Animations
// ==========================================================================

function setupScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    window.addEventListener('scroll', throttle(function() {
        scrollElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        updateParallax();
        updateScrollProgress();
    }, 16)); // ~60fps
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.1; // Trigger when 10% visible
    
    return (
        rect.top <= windowHeight - threshold &&
        rect.bottom >= threshold
    );
}

// ==========================================================================
// Parallax Effects
// ==========================================================================

function setupParallaxEffects() {
    const parallaxElements = {
        slow: document.querySelectorAll('.parallax-slow'),
        medium: document.querySelectorAll('.parallax-medium'),
        fast: document.querySelectorAll('.parallax-fast')
    };
    
    window.parallaxElements = parallaxElements; // Store globally for updateParallax
}

function updateParallax() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Update parallax elements
    if (window.parallaxElements) {
        window.parallaxElements.slow.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        window.parallaxElements.medium.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = 0.3;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        window.parallaxElements.fast.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = 0.7;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Update hero image parallax
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const heroSection = document.querySelector('.hero-section');
        const heroRect = heroSection.getBoundingClientRect();
        
        if (heroRect.bottom > 0) {
            const parallaxValue = scrollTop * 0.5;
            heroImage.style.transform = `translateY(${parallaxValue}px)`;
        }
    }
}

// ==========================================================================
// Intersection Observer for Performance
// ==========================================================================

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                currentSection = sectionId;
                updateActiveNavLink(sectionId);
                
                // Trigger section-specific animations
                triggerSectionAnimations(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all main sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Image loading observer
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

function triggerSectionAnimations(section) {
    const animatedElements = section.querySelectorAll('.fade-in, .slide-in, .scale-in');
    
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('active');
        }, index * 100); // Stagger animations
    });
}

// ==========================================================================
// Form Handling
// ==========================================================================

function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearErrorStates);
        });
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    
    // Validate form
    if (!validateForm(form)) {
        showFormMessage('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        // Show success message
        showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
    }, 2000);
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    let isValid = true;
    
    // Remove existing error states
    field.classList.remove('error');
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }
    
    // Add error state if invalid
    if (!isValid) {
        field.classList.add('error');
    }
    
    return isValid;
}

function clearErrorStates(e) {
    e.target.classList.remove('error');
}

function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    
    // Insert after form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(messageEl, form.nextSibling);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 5000);
}

// ==========================================================================
// Cursor Effects
// ==========================================================================

function setupCursorEffects() {
    // Only on desktop devices
    if (window.innerWidth > 1024 && !('ontouchstart' in window)) {
        createCustomCursor();
        setupHoverEffects();
    }
}

function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

function setupHoverEffects() {
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .timeline-item');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.cursor-trail');
            if (cursor) {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'var(--accent)';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.cursor-trail');
            if (cursor) {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'var(--primary)';
            }
        });
    });
}

// ==========================================================================
// Text Animations
// ==========================================================================

function setupTextAnimations() {
    // Typewriter effect for hero tagline
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        typewriterEffect(heroTagline, heroTagline.textContent, 50);
    }
    
    // Scramble effect for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            scrambleText(title, title.textContent);
        });
    });
}

function typewriterEffect(element, text, speed = 100) {
    element.textContent = '';
    element.style.opacity = '1';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

function scrambleText(element, originalText) {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        iterations += 1;
        
        if (iterations > maxIterations) {
            clearInterval(interval);
            element.textContent = originalText;
        }
    }, 50);
}

// ==========================================================================
// Loading States and Performance
// ==========================================================================

function addLoadingStates() {
    // Add loading states to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            });
        }
    });
    
    // Page loaded
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const initialElements = document.querySelectorAll('.fade-in-initial');
            initialElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('active');
                }, index * 200);
            });
        }, 500);
    });
}

function updateScrollProgress() {
    const scrollProgress = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
}

// ==========================================================================
// Utility Functions
// ==========================================================================

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ==========================================================================
// Resize Handler
// ==========================================================================

window.addEventListener('resize', debounce(function() {
    // Recalculate parallax and animations on resize
    updateParallax();
    
    // Reinitialize cursor effects for devices that change orientation
    if (window.innerWidth <= 1024 || 'ontouchstart' in window) {
        const cursor = document.querySelector('.cursor-trail');
        if (cursor) {
            cursor.remove();
        }
    } else {
        if (!document.querySelector('.cursor-trail')) {
            setupCursorEffects();
        }
    }
}, 250));

// ==========================================================================
// Error Handling
// ==========================================================================

window.addEventListener('error', function(e) {
    console.error('Portfolio error:', e.error);
    // Graceful degradation - ensure basic functionality works
});

// ==========================================================================
// Export for other modules
// ==========================================================================

window.PortfolioApp = {
    currentSection,
    updateParallax,
    typewriterEffect,
    scrambleText,
    showFormMessage
};
