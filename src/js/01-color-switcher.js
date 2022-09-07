const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]")
const body = document.querySelector("body");

let changeColorTimerId;

btnStart.addEventListener("click", onStart)
btnStop.addEventListener("click", onStop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart(event){
    changeColorTimerId = setInterval(changeColor,2000)
    event.target.disabled =true
    btnStop.disabled = false;
}

function onStop(event){
    clearInterval(changeColorTimerId);
    event.target.disabled =true
    btnStart.disabled = false;
}

function changeColor(event){
    const style = body.style;
    style.backgroundColor = getRandomHexColor();
    style.transition ="background-color 2s cubic-bezier(.50, 0, .50, 1)"
}