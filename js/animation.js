// const anim_elements = document.querySelectorAll(".animate");

// function checkVisibility() {
//     anim_elements.forEach(ele => {
//         if (isElementInViewport(ele)) {
//             ele.classList.add("animated");
//         }
//     });
// }

// function isElementInViewport(ele) {
//     const rect = ele.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // checkVisibility();
// // document.addEventListener("scroll", checkVisibility);

// function test(){
//     console.log("test123");
//     // anim_elements[0].classList.add("animated");
// }

// const container = document.querySelector(".main_container");
// container.addEventListener("click", test);

const container = document.querySelector(".main_container");
container.addEventListener("click", test);

function test(){
    console.log("test123");
}