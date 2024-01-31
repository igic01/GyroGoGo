const pagis = document.querySelectorAll(".pagi");

pagis.forEach(pagi => {
    const interface = pagi.querySelector(".interface");
    const block = interface.querySelector(".block");
    const card_width = block.querySelector(".card").offsetWidth;
    const arrows = pagi.querySelectorAll("i");
    const left_arrow = arrows[0];
    const right_arrow = arrows[1];

    left_arrow.addEventListener("click", () => {
        block.scrollLeft += -card_width;
    });

    right_arrow.addEventListener("click", () => {
        block.scrollLeft += card_width;
    });

});