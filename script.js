/* ==========================================
   Katanguri Skill Hub
   script.js
========================================== */

/* -----------------------------
   AOS Animation
------------------------------ */

AOS.init({
    duration: 900,
    once: true,
    offset: 80
});

/* -----------------------------
   Typed.js
------------------------------ */

new Typed("#typing", {
    strings: [
        "Cyber Security Training",
        "Defensive Security",
        "Offensive Security",
        "Full Stack Development",
        "Learn in Telugu",
        "Career Guidance",
        "Mock Interviews",
        "Resume Preparation"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true
});

/* -----------------------------
   Animated Counter
------------------------------ */

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

                clearInterval(timer);

            } else {

                counter.innerText = count;

            }

        }, 20);

    });

};

const statsSection = document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && !counterStarted) {

        counterStarted = true;

        runCounter();

    }

});

/* -----------------------------
   Scroll Progress Bar
------------------------------ */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* -----------------------------
   Navbar Effect
------------------------------ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,10,18,.92)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,10,18,.70)";
        header.style.boxShadow = "none";

    }

});

/* -----------------------------
   Mobile Menu
------------------------------ */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-menu");

    });

}

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-menu");

    });

});

/* -----------------------------
   Smooth Scroll
------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* -----------------------------
   Active Navigation
------------------------------ */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* -----------------------------
   Floating Cards
------------------------------ */

const cards = document.querySelectorAll(
    ".feature-card,.course-card,.trainer-card,.contact-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/* -----------------------------
   Particles.js
------------------------------ */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 60,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#00d4ff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.4

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 140,

            color: "#1769ff",

            opacity: 0.25,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            grab: {

                distance: 150,

                line_linked: {

                    opacity: 0.8

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});

/* -----------------------------
   Console Message
------------------------------ */

console.log(
"%cWelcome to Katanguri Skill Hub 🚀",
"color:#00d4ff;font-size:20px;font-weight:bold;"
);

console.log(
"%cBuilt with ❤️ by Katanguri Skill Hub",
"color:#ffffff;font-size:14px;"
);
