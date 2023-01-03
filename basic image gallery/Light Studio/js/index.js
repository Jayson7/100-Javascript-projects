// alert("Light studio");
var toggle_bar = document.querySelector(".toggle");
var aside = document.querySelector("aside");
var times = document.querySelector(".times");
toggle_bar.addEventListener("click", () => {
    aside.classList.add("active");
    aside.classList.remove("non-active");
});
times.addEventListener("click", () => {
    aside.classList.remove("active");
    aside.classList.add("non-active");
});