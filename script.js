const nav = document.getElementById("scroller");

if (window.screen.width >= 1280 && window.screen.height >= 768) {
    window.onmousemove = (e) => {
        const percent = e.clientX / window.innerWidth;

        nav.animate({
            transform: `translate(${percent * nav.offsetWidth * -1}px, -0%)`,
        }, {
            fill: "both",
            duration: 20000,
        });
    };
};

if (window.screen.width <= 1280 && window.screen.height >= 768) {

    const carousel = document.querySelector(".scroller"),
        firstImg = carousel.querySelectorAll(".scroll-section")[0],
        arrowIcons = document.querySelectorAll(".scroller-container span");

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth;
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 10);
        });
    });

    const autoSlide = () => {
        if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth + .1;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);
};


const tl = gsap.timeline({ paused: true });

const animateOpenNav = () => {

    tl.to(".nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
    });

    tl.to(".city-text, .logo-text", 0.2, {
        color: "#fff",
    },
        "-+0.1");

    tl.from(".social-links > div", 0.4, {
        opacity: 0,
        y: 10,
        stagger: {
            amount: 0.4,
        },
    });

    tl.to(".contact-link > a", 0.8, {
        top: 0,
        ease: "power2.inOut",
        stagger: {
            amount: 0.4,
        },
    },
        "-=0.4");

    tl.from(".nav-footer", 0.3, {
        opacity: 0
    }, "-=0.5").reverse();
};


const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById("menu-toggle-btn");
    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
};

openNav();

