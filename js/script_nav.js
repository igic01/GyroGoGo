const nav = document.querySelector("nav");
const more = nav.querySelector(".more");

more.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
        document.body.style.width = "100vw";
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
    } else {
        nav.classList.remove("active");
        document.body.style.width = "auto";
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
    }
});


function handleScroll() {
    var scroll_position = window.scrollY || window.pageYOffset;
    var trigger_point = window.innerHeight * 0.6;

    if (scroll_position > trigger_point) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
        
    }
}

window.addEventListener('scroll', handleScroll);