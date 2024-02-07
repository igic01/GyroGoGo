const pagis = document.querySelectorAll(".pagi");

pagis.forEach(pagi => {
    const interface = pagi.querySelector(".interface");
    const block = interface.querySelector(".block");
    const card_width = block.querySelector(".card").offsetWidth;
    const arrows = pagi.querySelectorAll(".arrow");
    const left_arrow = arrows[0];
    const right_arrow = arrows[1];

    var visible_cards = Math.round(block.clientWidth/card_width);
    var current_card = visible_cards;
    left_arrow.style.opacity = "0";

    console.log("visible_cards: " + visible_cards);
    console.log("current_card: " + current_card);
   
    left_arrow.addEventListener("click", () => {
        block.scrollLeft += -card_width;
        right_arrow.style.opacity = "1";
        current_card-=1;
        
        console.log("left:",current_card);
        
        if (current_card === visible_cards) {
            console.log("inside left:",current_card);
            left_arrow.style.opacity = "0";
        }else if (current_card < visible_cards) {
            current_card+=1;
        }
    });

    right_arrow.addEventListener("click", () => {
        block.scrollLeft += card_width;
        left_arrow.style.opacity = "1";
        current_card+=1;
        
        console.log("right:",current_card);
        
        if (current_card === 5) {
            console.log("inside right:",current_card);
            right_arrow.style.opacity = "0";
        }else if (current_card > 5) {
            current_card-=1;
        }
    });

    // window.addEventListener('resize', ()=>{
    //     visible_cards = Math.round(block.clientWidth/card_width);
    //     console.log("visible_cards:",visible_cards);
    // });

});