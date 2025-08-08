/**
 * Simple Navigation System for Palmwine Papi Portfolio
 */

console.log('Navigation script loaded');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (!navToggle || !navMenu) {
        console.error('Navigation elements not found!');
        console.log('navToggle:', navToggle);
        console.log('navMenu:', navMenu);
        return;
    }
    
    let isNavOpen = false;
    
    // Toggle navigation
    navToggle.addEventListener('click', function() {
        console.log('Navigation toggle clicked');
        isNavOpen = !isNavOpen;
        
        if (isNavOpen) {
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Navigation opened');
        } else {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Navigation closed');
        }
    });
    
    // Close navigation when clicking menu items
    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Close navigation
            isNavOpen = false;
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Scroll to section
            const target = document.querySelector(href);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        });
    });
    
    // Close navigation when clicking outside
    navMenu.addEventListener('click', function(e) {
        if (e.target === navMenu) {
            isNavOpen = false;
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close navigation with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isNavOpen) {
            isNavOpen = false;
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    console.log('Navigation initialized successfully');
});
