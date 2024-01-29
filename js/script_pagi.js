const pagis = document.querySelectorAll(".pagi");

pagis.forEach( pagi =>{
    const block = pagi.querySelector(".block");
    const cards = block.querySelectorAll(".card");
    const dash = block.clientWidth / 2.85;
    const arrow = pagi.querySelectorAll(".arrow");
    const arrow_left = arrow[0];
    const arrow_right = arrow[1];


    arrow_left.addEventListener("click", ()=>{
        console.log("left");
        cards.forEach( card => {
            const current_position = parseFloat(window.getComputedStyle(card).getPropertyValue('transform').split(',')[4]) || 0;
            const new_position = current_position + dash;

            card.style.transform = "translateX(" + new_position + "px)";
        });

    });

    arrow_right.addEventListener("click", ()=>{
        console.log("right");
        cards.forEach( card => {
            const current_position = parseFloat(window.getComputedStyle(card).getPropertyValue('transform').split(',')[4]) || 0;
            const new_position = current_position - dash;

            card.style.transform = "translateX(" + new_position + "px)";
        });

        setTimeout(() => {
            console.log("test");
            
            cards.forEach( card => {
                card.style.transition = 'none';
                card.style.transform = "translateX(0px)";
            });
            cards[0].parentNode.removeChild(cards[0]);
        }, 500) 
    });
});



