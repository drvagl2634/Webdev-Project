// document.addEventListener('DOMContentLoaded', () => {
//     const commentForm = document.getElementById('comment-form');
//     const commentList = document.getElementById('comment-list');
//     const feedbackForm = document.getElementById('feedback-form');

//     // Handle comment submission
//     commentForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const commentText = document.getElementById('comment-text').value;
//         if (commentText.trim() !== '') {
//             const commentElement = document.createElement('p');
//             commentElement.textContent = commentText;
//             commentList.appendChild(commentElement);
//             commentForm.reset();
//         }
//     });

//     // Handle feedback submission
//     feedbackForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const feedbackText = document.getElementById('feedback-text').value;
        
//         // Here you would typically send this data to a server
//         console.log('Feedback submitted:', { name, email, feedbackText });
//         alert('Thank you for your feedback!');
//         feedbackForm.reset();
//     });

//     // Handle home link click
//     const homeLink = document.querySelector('.home-link');
//     homeLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         // In a real application, you would redirect to the home page
//         alert('Redirecting to home page...');
//     });

//     // Handle "You May Also Like" tiles
//     const tiles = document.querySelectorAll('.tile');
//     tiles.forEach(tile => {
//         tile.addEventListener('click', (e) => {
//             e.preventDefault();
//             const category = tile.textContent;
//             // In a real application, you would redirect to the category page
//             alert(`Redirecting to ${category} page...`);
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const contentWrapper = document.querySelector('.content-wrapper');
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const feedbackForm = document.getElementById('feedback-form');

    // Toggle sidebar
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        contentWrapper.classList.toggle('sidebar-active');
    });

    // Handle comment submission
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const commentText = document.getElementById('comment-text').value;
        if (commentText.trim() !== '') {
            const commentElement = document.createElement('p');
            commentElement.textContent = commentText;
            commentList.appendChild(commentElement);
            commentForm.reset();
        }
    });

    // Handle feedback submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('feedback-name').value;
        const email = document.getElementById('feedback-email').value;
        const message = document.getElementById('feedback-message').value;
        
        // Here you would typically send this data to a server
        console.log('Feedback submitted:', { name, email, message });
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });

    // Handle "You May Also Like" tiles click
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.querySelector('h4').textContent;
            alert(`Navigating to ${category} category...`);
        });
    });

    // Handle "Return to Home" link
    const returnHomeLink = document.querySelector('.return-home');
    returnHomeLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Returning to home page...');
        // In a real application, you would redirect to the home page here
        // window.location.href = '/';
    });
});