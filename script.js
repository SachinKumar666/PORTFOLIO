// Nav Bar
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".siderbarClose");

// JS code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});

// Typing text animation
document.addEventListener('DOMContentLoaded', function () {
    // Typed.js animation with smooth animation
    var typed = new Typed('.typing', {
        strings: ['Frontend Developer', 'Web Designer', 'Programmer'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
        showCursor: false,
        cursorChar: '|',
        smartBackspace: true
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 200);
        });
    });
});