let overlay = document.querySelector(".overlay")
let menu_window = document.querySelector(".menu-window")
let menu_wrapper = document.querySelector(".menu-wrapper")

let action = false
let menu_windowX = 0
let overlayWidth = 0


document.querySelectorAll("[data-js]").forEach(function (element) {
    element.addEventListener("click", function () {
        menu_window.classList.toggle("show")
        overlay.classList.toggle("show")
    });
});


menu_wrapper.addEventListener("mousedown", function () {
    action = true;
});


overlay.addEventListener("mouseup", function () {
    action = false;
});


menu_wrapper.addEventListener("mousemove", function (e) {
    if (action) {
        menu_windowX = e.clientX
        menu_window.style.cssText = "transform: translate(" + menu_windowX + "px)"
    }
});




