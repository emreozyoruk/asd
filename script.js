document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // milliseconds
        let startTimestamp = null;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    // Easing function
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".social-icons a");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", shakeIcon);
        icon.addEventListener("mouseout", stopShake);
    });

    function shakeIcon(event) {
        event.currentTarget.classList.add("shake");
    }

    function stopShake(event) {
        event.currentTarget.classList.remove("shake");
    }
});

function showAlertWhatsapp() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function showAlert() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTop = document.getElementById("scroll-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

function scrollPageToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // 500ms sürede yavaşça yukarı kayacak
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15); // her 15ms'de bir yeniden konumlandır
}
// Diğer JavaScript kodları burada yer alır



