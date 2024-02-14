const nav = document.querySelector("nav");
const more = nav.querySelector(".more");

more.addEventListener("click", () => {
    if (!nav.classList.contains("activee")) {
        nav.classList.add("activee");
        document.addEventListener('wheel', preventDefaultScroll, { passive: false });
        document.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        document.addEventListener('keydown', preventDefaultScroll, { passive: false });

    } else {
        nav.classList.remove("activee");
        document.removeEventListener('wheel', preventDefaultScroll);
        document.removeEventListener('touchmove', preventDefaultScroll);
        document.removeEventListener('keydown', preventDefaultScroll);
    }
});


function handleScroll() {
    var scroll_position = window.scrollY || window.pageYOffset;
    var trigger_point = window.innerHeight * 0.4;

    if (scroll_position > trigger_point) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');

    }
}

function preventDefaultScroll(event) {
    event.preventDefault();
}

window.addEventListener('scroll', handleScroll);