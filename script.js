// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// MENU
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// DARK MODE
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.onload = () => {
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};

// ACCORDION
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.event-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    const width = cards[0].offsetWidth + 20; // card + margin
    track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = cards.length - 1;
    }
    updateCarousel();
});

/* AUTO SLIDE */
setInterval(() => {
    index = (index + 1) % cards.length;
    updateCarousel();
}, 4000);
document.querySelectorAll('.gallery-item').forEach(item => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });
    observer.observe(item);
});