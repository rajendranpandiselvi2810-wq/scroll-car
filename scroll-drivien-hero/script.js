const car = document.getElementById("car");

let currentX = 0;
let targetX = 0;


/* =========================
   CALCULATE CAR POSITION
========================= */

function updateCarPosition() {

    const scrollTop = window.scrollY;

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (maxScroll <= 0) {
        targetX = 0;
        return;
    }


    /* Scroll progress: 0 → 1 */

    const progress =
        Math.min(
            Math.max(scrollTop / maxScroll, 0),
            1
        );


    /*
       Move car from
       left side → right side
    */

    const carWidth = car.offsetWidth;

    const maxMovement =
        window.innerWidth - carWidth;


    targetX = progress * maxMovement;

}


/* =========================
   SMOOTH CAR ANIMATION
========================= */

function animate() {

    currentX +=
        (targetX - currentX) * 0.08;


    car.style.transform =
        `translateX(${currentX}px)`;


    requestAnimationFrame(animate);

}


/* =========================
   SCROLL EVENT
========================= */

window.addEventListener(
    "scroll",
    updateCarPosition
);


/* =========================
   RESIZE EVENT
========================= */

window.addEventListener(
    "resize",
    updateCarPosition
);


/* Start */

updateCarPosition();

animate();