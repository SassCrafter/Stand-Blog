// Select Element
const selectElement = function (element) {
    return document.querySelector(element);
}

// Open and Close mobile menu
const toggler = selectElement(".mobile-toggler");

toggler.addEventListener("click", function () {
    toggler.classList.toggle("open");
});


// Preloader
const preloader = selectElement(".preloader");
window.addEventListener("load", function () {
    preloader.parentElement.removeChild(preloader);
});
