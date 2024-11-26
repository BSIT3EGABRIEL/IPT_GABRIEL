window.onload = function () {
    // Select the preloader and main content
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.container');

    // Add a fade-out class to the preloader
    preloader.classList.add('fade-out');

    // Show the main content after the fade-out animation
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide the preloader
        content.style.display = 'block'; // Show the main content
    }, 5000); // Match the fade-out animation duration
};
