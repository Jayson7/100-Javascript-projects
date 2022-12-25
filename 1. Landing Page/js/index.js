const toggle_bar = document.querySelector(".fa");
const menu = document.querySelector(".navbar div");
toggle_bar.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu.classList.toggle("in-active");
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}