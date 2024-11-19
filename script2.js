document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const addBlogBtn = document.querySelector('.add-blog-btn');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    // Toggle sidebar
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        contentWrapper.classList.toggle('sidebar-active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            contentWrapper.classList.remove('sidebar-active');
        }
    });

    // Add Blog button functionality
    addBlogBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Add Blog functionality coming soon!');
    });

    // Login button functionality
    loginBtn.addEventListener('click', function() {
        alert('Login functionality coming soon!');
    });

    // Signup button functionality
    signupBtn.addEventListener('click', function() {
        alert('Signup functionality coming soon!');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to genre tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', () => {
            tile.style.transform = 'translateY(-5px)';
        });
        tile.addEventListener('mouseleave', () => {
            tile.style.transform = 'translateY(0)';
        });
    });

    // Responsive navigation
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.querySelector('.main-nav').style.display = 'block';
            document.querySelector('.header-right').style.display = 'flex';
        } else {
            document.querySelector('.main-nav').style.display = 'none';
            document.querySelector('.header-right').style.display = 'none';
        }
    });
});