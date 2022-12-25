const toggle_bar = document.querySelector(".fa");
const menu = document.querySelector(".navbar div");
toggle_bar.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu.classList.toggle("in-active");
});