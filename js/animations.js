/**
 * Palmwine Papi - Advanced Animations JavaScript
 * Nigerian Alte Aesthetic Portfolio
 */

// ==========================================================================
// Animation Variables
// ==========================================================================

let rafId = null;
let isAnimating = false;
let scrollDirection = 'down';
let lastScrollPosition = 0;
let animationQueue = [];

// Animation performance tracking
const animationPerformance = {
    startTime: 0,
    frameCount: 0,
    fps: 0,
    isOptimized: true
};

// ==========================================================================
// Animation System Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimationSystem();
});

function initializeAnimationSystem() {
    setupScrollAnimations();
    setupHoverAnimations();
    setupImageMaskAnimations();
    setupTextRevealAnimations();
    setupProjectCardAnimations();
    setupTimelineAnimations();
    setupBackgroundAnimations();
    startAnimationLoop();
    
    console.log('Advanced animation system initialized');
}

// ==========================================================================
// Scroll-Based Animations
// ==========================================================================

function setupScrollAnimations() {
    const scrollTriggers = document.querySelectorAll('[data-scroll]');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const animationType = element.dataset.scroll;
            
            if (entry.isIntersecting) {
                triggerScrollAnimation(element, animationType);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    });
    
    scrollTriggers.forEach(element => {
        scrollObserver.observe(element);
    });
    
    // Add scroll direction detection
    window.addEventListener('scroll', updateScrollDirection, { passive: true });
}

function updateScrollDirection() {
    const currentScrollPosition = window.pageYOffset;
    scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = currentScrollPosition;
}

function triggerScrollAnimation(element, animationType) {
    switch (animationType) {
        case 'fade-in':
            animateFadeIn(element);
            break;
        case 'slide-up':
            animateSlideUp(element);
            break;
        case 'slide-left':
            animateSlideLeft(element);
            break;
        case 'slide-right':
            animateSlideRight(element);
            break;
        case 'scale-in':
            animateScaleIn(element);
            break;
        case 'rotate-in':
            animateRotateIn(element);
            break;
        case 'stagger':
            animateStagger(element);
            break;
        default:
            animateFadeIn(element);
    }
}

// ==========================================================================
// Individual Animation Functions
// ==========================================================================

function animateFadeIn(element) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.opacity = '1';
    });
}

function animateSlideUp(element) {
    element.style.transform = 'translateY(50px)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
    });
}

function animateSlideLeft(element) {
    element.style.transform = 'translateX(-50px)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
        element.style.opacity = '1';
    });
}

function animateSlideRight(element) {
    element.style.transform = 'translateX(50px)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
        element.style.opacity = '1';
    });
}

function animateScaleIn(element) {
    element.style.transform = 'scale(0.8)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.transform = 'scale(1)';
        element.style.opacity = '1';
    });
}

function animateRotateIn(element) {
    element.style.transform = 'rotate(-10deg) scale(0.8)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease';
    
    requestAnimationFrame(() => {
        element.style.transform = 'rotate(0deg) scale(1)';
        element.style.opacity = '1';
    });
}

function animateStagger(container) {
    const children = container.children;
    
    Array.from(children).forEach((child, index) => {
        child.style.transform = 'translateY(30px)';
        child.style.opacity = '0';
        child.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        
        setTimeout(() => {
            child.style.transform = 'translateY(0)';
            child.style.opacity = '1';
        }, index * 100);
    });
}

// ==========================================================================
// Hover Animations
// ==========================================================================

function setupHoverAnimations() {
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        setupProjectCardHover(card);
    });
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        setupTimelineItemHover(item);
    });
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        setupNavLinkHover(link);
    });
    
    // Buttons
    const buttons = document.querySelectorAll('.hero-cta, .submit-btn');
    buttons.forEach(button => {
        setupButtonHover(button);
    });
}

function setupProjectCardHover(card) {
    const image = card.querySelector('img');
    const overlay = card.querySelector('.project-overlay');
    
    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.filter = 'contrast(1.3) saturate(1.3)';
        }
        
        if (overlay) {
            overlay.style.opacity = '1';
        }
        
        card.style.transform = 'translateY(-10px) rotate(0deg)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
            image.style.filter = '';
        }
        
        if (overlay) {
            overlay.style.opacity = '0';
        }
        
        // Reset to original transform
        const originalTransform = card.dataset.originalTransform || 'none';
        card.style.transform = originalTransform;
        card.style.boxShadow = '';
    });
    
    // Store original transform
    const computedStyle = window.getComputedStyle(card);
    card.dataset.originalTransform = computedStyle.transform;
}

function setupTimelineItemHover(item) {
    const image = item.querySelector('.timeline-image');
    
    item.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'rotate(0deg) scale(1.05)';
        }
        
        item.style.filter = 'brightness(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        if (image) {
            const originalTransform = image.dataset.originalTransform || 'rotate(3deg)';
            image.style.transform = originalTransform;
        }
        
        item.style.filter = '';
    });
}

function setupNavLinkHover(link) {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateX(20px)';
        link.style.color = 'var(--accent)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateX(0)';
        link.style.color = '';
    });
}

function setupButtonHover(button) {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 10px 20px rgba(232, 84, 57, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '';
    });
}

// ==========================================================================
// Image Mask Animations
// ==========================================================================

function setupImageMaskAnimations() {
    const imageMasks = document.querySelectorAll('.image-mask-reveal');
    
    const maskObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.3
    });
    
    imageMasks.forEach(mask => {
        maskObserver.observe(mask);
    });
}

// ==========================================================================
// Text Reveal Animations
// ==========================================================================

function setupTextRevealAnimations() {
    const textReveals = document.querySelectorAll('.text-reveal');
    
    textReveals.forEach(element => {
        const text = element.textContent;
        element.innerHTML = `<span class="text-reveal-inner">${text}</span>`;
        
        const inner = element.querySelector('.text-reveal-inner');
        inner.style.transform = 'translateY(100%)';
        inner.style.display = 'inline-block';
        inner.style.transition = 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)';
    });
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const inner = entry.target.querySelector('.text-reveal-inner');
                if (inner) {
                    inner.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    textReveals.forEach(element => {
        textObserver.observe(element);
    });
}

// ==========================================================================
// Project Card Advanced Animations
// ==========================================================================

function setupProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Add initial animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add magnetic effect on desktop
        if (window.innerWidth > 1024) {
            addMagneticEffect(card);
        }
        
        // Add tilt effect
        addTiltEffect(card);
    });
}

function addMagneticEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.max(rect.width, rect.height) / 2;
        
        if (distance < maxDistance) {
            const strength = (maxDistance - distance) / maxDistance;
            const moveX = (x / maxDistance) * 20 * strength;
            const moveY = (y / maxDistance) * 20 * strength;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = '';
    });
}

function addTiltEffect(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = '';
    });
}

// ==========================================================================
// Timeline Animations
// ==========================================================================

function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// ==========================================================================
// Background Animations
// ==========================================================================

function setupBackgroundAnimations() {
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-elements .alte-texture');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const amplitude = 20 + (index * 10);
        
        element.style.animation = `float ${3 + index}s ease-in-out infinite`;
        element.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Animated patterns
    const patterns = document.querySelectorAll('.animated-pattern');
    patterns.forEach(pattern => {
        pattern.style.animation = 'patternMove 4s linear infinite';
    });
}

// ==========================================================================
// Animation Performance Monitoring
// ==========================================================================

function startAnimationLoop() {
    animationPerformance.startTime = performance.now();
    
    function animate() {
        animationPerformance.frameCount++;
        const currentTime = performance.now();
        const elapsed = currentTime - animationPerformance.startTime;
        
        // Calculate FPS every second
        if (elapsed >= 1000) {
            animationPerformance.fps = animationPerformance.frameCount;
            animationPerformance.frameCount = 0;
            animationPerformance.startTime = currentTime;
            
            // Optimize animations if FPS is low
            if (animationPerformance.fps < 30 && animationPerformance.isOptimized) {
                optimizeAnimations();
                animationPerformance.isOptimized = false;
            }
        }
        
        // Process animation queue
        processAnimationQueue();
        
        rafId = requestAnimationFrame(animate);
    }
    
    animate();
}

function optimizeAnimations() {
    console.log('Optimizing animations for better performance');
    
    // Reduce complex animations
    const complexAnimations = document.querySelectorAll('[data-complex-animation]');
    complexAnimations.forEach(element => {
        element.style.animation = 'none';
    });
    
    // Simplify hover effects
    const hoverElements = document.querySelectorAll('.project-card, .timeline-item');
    hoverElements.forEach(element => {
        element.style.transition = 'transform 0.2s ease';
    });
}

function processAnimationQueue() {
    if (animationQueue.length === 0) return;
    
    const maxProcessPerFrame = 3;
    const toProcess = animationQueue.splice(0, maxProcessPerFrame);
    
    toProcess.forEach(animation => {
        animation.execute();
    });
}

// ==========================================================================
// Animation Queue Management
// ==========================================================================

function queueAnimation(animationFunction, priority = 1) {
    animationQueue.push({
        execute: animationFunction,
        priority: priority,
        timestamp: performance.now()
    });
    
    // Sort by priority (higher priority first)
    animationQueue.sort((a, b) => b.priority - a.priority);
}

// ==========================================================================
// Cleanup and Performance
// ==========================================================================

function cleanupAnimations() {
    if (rafId) {
        cancelAnimationFrame(rafId);
    }
    
    // Clear animation queue
    animationQueue.length = 0;
    
    // Reset styles
    const animatedElements = document.querySelectorAll('[style*="transform"], [style*="opacity"]');
    animatedElements.forEach(element => {
        element.style.transform = '';
        element.style.opacity = '';
        element.style.transition = '';
    });
}

// ==========================================================================
// Resize and Orientation Handling
// ==========================================================================

window.addEventListener('resize', function() {
    // Recalculate animations on resize
    setTimeout(() => {
        setupProjectCardAnimations();
        setupTimelineAnimations();
    }, 100);
});

// ==========================================================================
// Page Visibility API for Performance
// ==========================================================================

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is hidden
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
    } else {
        // Resume animations when page is visible
        startAnimationLoop();
    }
});

// ==========================================================================
// Export Animation System
// ==========================================================================

window.AnimationSystem = {
    queue: queueAnimation,
    cleanup: cleanupAnimations,
    optimize: optimizeAnimations,
    performance: animationPerformance,
    triggerScrollAnimation: triggerScrollAnimation
};
