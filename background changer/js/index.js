// grab the button using javascript
let button = document.querySelector("button");

// dictate the amount of colors we want
let colors = ["blue", "green", "yellow", "pink", "violet", "brown"];

// do the magic by listening to clicks on the button
button.addEventListener("click", () => {
    let index = parseInt(Math.random() * colors.length + 1);

    let container = document.querySelector(".container");

    container.style.background = `${colors[index]}`;
});