const anim_elements = document.querySelectorAll(".animate");

function checkVisibility() {
    anim_elements.forEach(ele => {
        if (isElementInViewport(ele)) {
            ele.classList.remove("animate");
            ele.classList.add("animated");
        }
    });
}

function isElementInViewport(ele) {
    const rect = ele.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate the area of the element
    const elementArea = rect.width * rect.height;

    // Calculate the area of intersection between the element and the viewport
    const intersectionArea =
        Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0)) *
        Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));

    // Check if at least 30% of the element is visible
    return intersectionArea >= 0.3 * elementArea;
}



checkVisibility();
document.addEventListener("scroll", checkVisibility);

