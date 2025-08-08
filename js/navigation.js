/**
 * Clean Navigation System
 */

// ==========================================================================
// Navigation Variables
// ==========================================================================

let navToggle = null;
let navMenu = null;
let navItems = null;
let isNavOpen = false;

// ==========================================================================
// Navigation Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});

function initializeNavigation() {
    navToggle = document.getElementById('navToggle');
    navMenu = document.getElementById('navMenu');
    navItems = document.querySelectorAll('.nav-item');
    
    if (navToggle && navMenu) {
        setupNavigationEvents();
        console.log('Navigation initialized');
    }
}

// ==========================================================================
// Navigation Event Setup
// ==========================================================================

function setupNavigationEvents() {
    // Toggle button click
    navToggle.addEventListener('click', toggleNavigation);
    
    // Close nav when clicking on links
    navItems.forEach(item => {
        item.addEventListener('click', closeNavigation);
    });
    
    // Close nav when clicking outside menu items
    navMenu.addEventListener('click', function(e) {
        if (e.target === navMenu) {
            closeNavigation();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isNavOpen) {
            closeNavigation();
        }
// ==========================================================================
// Navigation Toggle Functions
// ==========================================================================

function toggleNavigation() {
    if (isNavOpen) {
        closeNavigation();
    } else {
        openNavigation();
    }
}

function openNavigation() {
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    isNavOpen = true;
}

function closeNavigation() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    isNavOpen = false;
}

// ==========================================================================
// Smooth Scrolling for Navigation Links
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            closeNavigation();
        });
    });
});
    }, { passive: true });
}

// ==========================================================================
// Active Link Management
// ==========================================================================

function setActiveNavLink(sectionId) {
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================================================
// Navigation State Management
// ==========================================================================

function getNavigationState() {
    return {
        isOpen: isNavOpen,
        activeSection: getCurrentActiveSection()
    };
}

function getCurrentActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let activeSection = 'hero';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Consider section active if it takes up more than 50% of viewport
        if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
            activeSection = section.id;
        }
    });
    
    return activeSection;
}

// ==========================================================================
// Scroll-based Navigation Updates
// ==========================================================================

function updateNavigationOnScroll() {
    if (isNavOpen) return; // Don't update while nav is open
    
    const activeSection = getCurrentActiveSection();
    setActiveNavLink(activeSection);
    
    // Update navigation visibility based on scroll
    const scrollY = window.pageYOffset;
    const navElement = document.querySelector('.main-nav');
    
    if (scrollY > 100) {
        navElement.classList.add('scrolled');
    } else {
        navElement.classList.remove('scrolled');
    }
}

// ==========================================================================
// Navigation Accessibility
// ==========================================================================

function enhanceAccessibility() {
    // Add ARIA attributes
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-controls', 'navOverlay');
    
    navOverlay.setAttribute('aria-hidden', 'true');
    navOverlay.setAttribute('role', 'dialog');
    navOverlay.setAttribute('aria-labelledby', 'navToggle');
    
    // Update ARIA states
    function updateAriaStates() {
        navToggle.setAttribute('aria-expanded', isNavOpen ? 'true' : 'false');
        navOverlay.setAttribute('aria-hidden', isNavOpen ? 'false' : 'true');
    }
    
    // Listen for navigation state changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                updateAriaStates();
            }
        });
    });
    
    observer.observe(navOverlay, { attributes: true });
}

// ==========================================================================
// Navigation Performance Optimization
// ==========================================================================

function optimizeNavigation() {
    // Use passive event listeners where possible
    navOverlay.addEventListener('scroll', function() {
        // Prevent body scroll when nav is open
        if (isNavOpen) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }, { passive: false });
    
    // Preload navigation animations
    navLinks.forEach(link => {
        link.style.willChange = 'transform, opacity';
    });
}

// ==========================================================================
// Initialize scroll listener
// ==========================================================================

window.addEventListener('scroll', function() {
    updateNavigationOnScroll();
}, { passive: true });

// ==========================================================================
// Enhanced initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    enhanceAccessibility();
    optimizeNavigation();
});

// ==========================================================================
// Export navigation functions
// ==========================================================================

window.NavigationController = {
    open: openNavigation,
    close: closeNavigation,
    toggle: toggleNavigation,
    setActiveLink: setActiveNavLink,
    getState: getNavigationState,
    isOpen: () => isNavOpen
};
