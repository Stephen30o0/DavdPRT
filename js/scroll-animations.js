// Palmwine Papi - Scroll Triggered Animations
// Nigerian Alte Aesthetic Portfolio

(function() {
    'use strict';

    // Animation state tracking
    const animatedElements = new Set();
    
    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Trigger when 10% of element is visible
        threshold: 0.1
    };

    // Create the intersection observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const animationType = element.getAttribute('data-scroll');
            
            if (entry.isIntersecting && !animatedElements.has(element)) {
                // Element is entering viewport
                animateElement(element, animationType, true);
                animatedElements.add(element);
            } else if (!entry.isIntersecting && animatedElements.has(element)) {
                // Element is leaving viewport - reset for re-animation
                animateElement(element, animationType, false);
                animatedElements.delete(element);
            }
        });
    }, observerOptions);

    // Animation function
    function animateElement(element, type, entering) {
        if (entering) {
            // Add delay for staggered animations
            const delay = element.getAttribute('data-delay') || 0;
            
            setTimeout(() => {
                element.classList.add('animate-in');
            }, delay);
        } else {
            // Reset animation state
            element.classList.remove('animate-in');
        }
    }

    // Initialize scroll animations
    function initScrollAnimations() {
        // Find all elements with scroll animation attributes
        const animatedElements = document.querySelectorAll('[data-scroll]');
        
        animatedElements.forEach((element, index) => {
            // Add staggered delay for timeline items
            if (element.classList.contains('timeline-item')) {
                element.setAttribute('data-delay', index * 150);
            }
            
            // Observe the element
            scrollObserver.observe(element);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }

    // Re-initialize if new elements are added dynamically
    window.initScrollAnimations = initScrollAnimations;

})();
