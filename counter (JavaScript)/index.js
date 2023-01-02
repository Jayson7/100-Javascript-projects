var values = 0;

document.querySelector(".count").innerText = values;

function Increase() {
    values = values + 1;
    document.querySelector(".count").innerText = values;
}

function Decrease() {
    if (values === 0) {
        pass;
    } else {
        values = values - 1;
        document.querySelector(".count").innerText = values;
    }
}

function erase() {
    values = 0;
    document.querySelector(".count").innerText = values;
}