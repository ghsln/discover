// Javascript for slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const home = document.querySelector('.home');
let currentSlide = 0;
let slideInterval;

// Function to navigate to a specific slide
function sliderNav(manual) {
    // Clear the current interval
    clearInterval(slideInterval);
    
    // Remove active class from all slides and buttons
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Add active class to the selected slide and button
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    
    // Update current slide index
    currentSlide = manual;
    
    // Restart the auto-slide interval
    startAutoSlide();
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
}

// Function to start the auto-slide interval
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Add click event listeners to navigation buttons
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Start the auto-slide when the page loads
startAutoSlide();

// Pause auto-slide when hovering over the slider
home.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-slide when mouse leaves the slider
home.addEventListener('mouseleave', () => {
    startAutoSlide();
});

new Swiper('.card-wrapper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    
    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 1
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 1
        }
    },

    // Pagination bullet
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const activitiesLink = document.querySelector(".activities-link");
    const actBox = document.querySelector(".act-box");
    const contactLink = document.querySelector(".contact-link");
    const conBox = document.querySelector(".con-box");
    const whereLink = document.querySelector(".where-link");
    const whereBox = document.querySelector(".where-box");
    const travelLink = document.querySelector(".travel-link");
    const travelBox = document.querySelector(".travel-box");
    const content1 = document.querySelector(".travel-content-1");
    const content2 = document.querySelector(".travel-content-2");
    const content3 = document.querySelector(".travel-content-3");
    const pill1 = document.querySelector(".pill-1");
    const pill2 = document.querySelector(".pill-2");
    const pill3 = document.querySelector(".pill-3");

    // Show dropdown when hovering over the link
    activitiesLink.addEventListener("mouseenter", () => {
        actBox.style.display = "block";
        conBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    // Hide when mouse leaves BOTH link & menu
    activitiesLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!actBox.matches(":hover")) {
                actBox.style.display = "none";
            }
        }, 100);
    });

    actBox.addEventListener("mouseleave", () => {
        actBox.style.display = "none";
    });

    // Keep menu visible as long as you're over it
    actBox.addEventListener("mouseenter", () => {
        actBox.style.display = "block";
        conBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    // Contact
    contactLink.addEventListener("mouseenter", () => {
        conBox.style.display = "block";
        actBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    // Hide when mouse leaves BOTH link & menu
    contactLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!conBox.matches(":hover")) {
                conBox.style.display = "none";
            }
        }, 100);
    });

    conBox.addEventListener("mouseleave", () => {
        conBox.style.display = "none";
    });

    // Keep menu visible as long as you're over it
    conBox.addEventListener("mouseenter", () => {
        conBox.style.display = "block";
        actBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });
    
    // Where
    whereLink.addEventListener("mouseenter", () => {
        whereBox.style.display = "block";
        actBox.style.display = "none";
        conBox.style.display = "none";
        travelBox.style.display = "none";
    });

    // Hide when mouse leaves BOTH link & menu
    whereLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!whereBox.matches(":hover")) {
                whereBox.style.display = "none";
            }
        }, 100);
    });

    whereBox.addEventListener("mouseleave", () => {
        whereBox.style.display = "none";
    });

    // Keep menu visible as long as you're over it
    whereBox.addEventListener("mouseenter", () => {
        whereBox.style.display = "block";
        actBox.style.display = "none";
        conBox.style.display = "none";
        travelBox.style.display = "none";
    });
       
    // Hide all other mega menus
    function hideOtherMenus() {
        actBox.style.display = "none";
        conBox.style.display = "none";
        whereBox.style.display = "none";
    }

function hideOtherMenus() {
        actBox.style.display = "none";
        conBox.style.display = "none";
        whereBox.style.display = "none";
    }

    function hideAllTravelContent() {
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "none";
    }

    // --- Show travel box when hovering menu link ---
    travelLink.addEventListener("mouseenter", () => {
        travelBox.style.display = "block";
        hideOtherMenus();

        // DEFAULT RESET → show travel-content-1
        hideAllTravelContent();     // <—
        content1.style.display = "flex";  // <—
    });

    // Hide only when mouse fully leaves link AND menu
    travelLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!travelBox.matches(":hover")) {
                travelBox.style.display = "none";
            }
        }, 100);
    });

    // Keep box open while hovering inside it
    travelBox.addEventListener("mouseenter", () => {
        travelBox.style.display = "block";
        hideOtherMenus();
    });

    // Hide when fully leaving the menu box
    travelBox.addEventListener("mouseleave", () => {
        travelBox.style.display = "none";
    });

    // --- PILL SWITCHING LOGIC ---
    pill1.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content1.style.display = "flex";
    });

    pill2.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content2.style.display = "flex";
    });

    pill3.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content3.style.display = "flex";
    });
});

