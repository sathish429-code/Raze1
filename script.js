// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    
    // -------------------------
    // Custom Cursor Logic
    // -------------------------
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Animate dot instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animate outline with slight delay for smooth effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effects for interactive elements
    const linksAndButtons = document.querySelectorAll("a, .btn, .card, .module-card, .contact-btn");

    linksAndButtons.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.backgroundColor = "rgba(212, 175, 55, 0.1)"; // gold tint
            cursorDot.style.transform = "translate(-50%, -50%) scale(1.5)";
        });

        el.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.backgroundColor = "transparent";
            cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });

    // -------------------------
    // Scroll Reveal Animation 
    // using IntersectionObserver
    // -------------------------
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                // Stop observing once animated
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Clean Navbar background on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 5, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });
});
