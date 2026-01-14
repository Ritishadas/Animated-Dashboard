gsap.registerPlugin(ScrollTrigger);

// ================= NAVBAR =================
const tl = gsap.timeline();

tl.from("#n1", {
    y: -40,
    opacity: 0,
    scale: 1.3,
    duration: 0.8,
    ease: "power3.out"
})
.to("#n1", {
    scale: 1,
    duration: 0.2,
    ease: "power2.out"
});

tl.from("#n2 h4", {
    y: -30,
    opacity: 0,
    duration: 0.25,
    stagger: 0.15,
    ease: "power3.out"
});

tl.from("#btn1", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out"
});

// ================= SECTION 2 =================
tl.from("#left h1", {
    x: -60,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
});

tl.from("#left h5", {
    x: -60,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
});

tl.from("#btn2", {
    x: -60,
    opacity: 0,
    duration: 0.25,
    ease: "power2.out"
});

tl.from("#right", {
    x: 80,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
});

// ================= SECTION 3 (CONTINUOUS MARQUEE) =================
let marqueeTween;

window.addEventListener("wheel", function (dets) {

    if (marqueeTween) marqueeTween.kill();

    if (dets.deltaY > 0) {
        marqueeTween = gsap.fromTo(
            ".logo-track",
            { xPercent: 0 },
            {
                xPercent: -100,
                duration: 15,
                repeat: -1,
                ease: "none",
                modifiers: {
                    xPercent: gsap.utils.wrap(-100, 0)
                }
            }
        );
    } else {
        marqueeTween = gsap.fromTo(
            ".logo-track",
            { xPercent: -100 },
            {
                xPercent: 0,
                duration: 15,
                repeat: -1,
                ease: "none",
                modifiers: {
                    xPercent: gsap.utils.wrap(-100, 0)
                }
            }
        );
    }
});

// ================= SECTION 4 =================
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section4",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: 2
    }
});

tl2.from("#section4", {
    y: 30,
    opacity: 0
});

// ================= MAIN CARDS =================
tl2.from(".elem.left1", {
    x: -100,
    opacity: 0,
    duration: 3,
    delay:2
}, "lf");

tl2.from(".elem.right1", {
    x: 100,
    opacity: 0,
    duration:3,
    delay:2
}, "lf");

tl2.from(".elem.left2", {
    x: -100,
    opacity: 0,
    duration: 3,
    delay:2
}, "rg");

tl2.from(".elem.right2", {
    x: 100,
    opacity: 0,
    duration:3,
    delay:2,
}, "rg");

// -----------------------masti-----------------------------
// ── STRING / MOUSE FOLLOW PATH ───────────────────────────
const string = document.querySelector("#string");
const path = document.querySelector("#string svg path");

let initialPath = `M 10 150 Q 500 150 990 150`;
let finalPath = initialPath;

string.addEventListener("mousemove", (e) => {
    // Get relative Y position inside the string container
    const rect = string.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;

    let newPath = `M 10 150 Q 500 ${relativeY} 990 150`;

    gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", () => {
    gsap.to(path, {
        attr: { d: finalPath },
        duration: 1.1,
        ease: "elastic.out(1.2, 0.3)"
    });
});
// CUSTOM CURSOR MOVE
var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.15,
        ease: "power3.out"
    })
})
// ================= SIDEBAR (GSAP) =================
var menuBtn  = document.querySelector("#menu-btn");
var closeBtn = document.querySelector("#close-btn");

var sidebarTl = gsap.timeline({ paused: true });

sidebarTl
.to("#sidebar", {
    right: 0,
    duration: 0.6,
    ease: "power3.out"
})
.from("#sidebar li", {
    x: 120,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})
.from("#close-btn", {
    opacity: 0,
    duration: 0.3
});

// OPEN sidebar (ONLY on small screens)
menuBtn.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
        sidebarTl.play();
    }
});

// CLOSE sidebar
closeBtn.addEventListener("click", function () {
    sidebarTl.reverse();
});

// AUTO RESET sidebar when resizing to desktop
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        sidebarTl.pause(0);
    }
});
