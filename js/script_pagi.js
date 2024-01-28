const pagi = document.querySelectorAll(".pagi");

function make_dots() {
    pagi.forEach(item => {
        const cards_count = item.querySelectorAll(".card").length;

        if (cards_count <= 3) {
            return;
        }

        const dots_div = item.querySelector(".dots");
        const dots = [];

        const first_dot = document.createElement("div");
        first_dot.classList.add("dot");
        dots.push(first_dot);
        first_dot.setAttribute('id', 'selected');
        first_dot.setAttribute('order', '0');
        first_dot.addEventListener("click", (e) => {
            console.log(first_dot.getAttribute("order"));
            selection(dots, first_dot);
        });
        dots_div.appendChild(first_dot);
        for (let i = 1; i < cards_count; i++) {
            const dot = document.createElement("div");
            dots.push(dot)
            dot.classList.add("dot");
            dot.setAttribute('order', i);
            dots_div.appendChild(dot);
            dot.addEventListener("click", (e) => {
                selection(dots, dot);
            });
        }
    });
}

function selection(dots, selected){
    dots.forEach(dot => {
        dot.removeAttribute("id");
    });
    selected.setAttribute('id', 'selected');
}

make_dots(pagi);




