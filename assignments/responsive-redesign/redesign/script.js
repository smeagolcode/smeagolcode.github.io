document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active') && !mainNav.contains(event.target) && event.target !== menuToggle) {
            mainNav.classList.remove('active');
        }
    });
    
    // Menu Category Tabs
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuCategoryItems = document.querySelectorAll('.menu-category-items');
    
    if (menuCategories.length > 0) {
        menuCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                menuCategories.forEach(cat => cat.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Hide all menu items
                menuCategoryItems.forEach(items => items.classList.remove('active'));
                
                // Show the selected category items
                const categoryId = this.getAttribute('data-category');
                document.getElementById(categoryId).classList.add('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add padding to body to account for fixed header
    const headerHeight = document.querySelector('.main-header').offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
    
    // Add active class to nav item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.main-nav li').forEach(item => {
                    item.classList.remove('active');
                    if (item.querySelector(`a[href="#${sectionId}"]`)) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Initialize first load
    highlightNavOnScroll();
}); 