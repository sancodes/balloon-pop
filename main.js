
let inflateCount = 0;
let balloonHeight = 120;
let balloonWidth = 100;
let eachIncrement = 40;
let maxSizeToBurst = 250;
let popCount = 0;
let startButton = document.getElementById("start-game");
let inflateButton = document.getElementById("inflate");
let clockId = 0;
let gameLength = 5000; //milisecond 
let timeRemaining = 0;

//start game
//also contains stop game function--> basically setTimeout(), 1st param
const startgame = () => {
    startButton.setAttribute("disabled", "true");
    inflateButton.removeAttribute("disabled");

    startClock();

    setTimeout(() => {
        console.log("TimeOut");
        startButton.removeAttribute("disabled");
        inflateButton.setAttribute("disabled", "true");
        balloonHeight = 120;
        balloonWidth = 100;
        inflateCount = 0;
        stopClock();
        draw();  //to update the original state of the balloon
    }, gameLength)
}

//clock start functioin
const startClock = () => {
    timeRemaining = gameLength;
    drawClock();
    clockId = setInterval(drawClock, 1000); //1000 msec--> 1 sec
}

//clock stop function 
const stopClock = () => {
    clearInterval(clockId);
}

const drawClock = () => {
    let countDownElem = document.getElementById("count-down");
    countDownElem.innerText = (timeRemaining / 1000).toString();
    timeRemaining -= 1000; //subtract by 1 sec, ,1000 means 1000 milisec
}
//inflate function
const inflate = () => {

    //balloon burst -- if maxed reached
    if (balloonHeight >= maxSizeToBurst) {
        balloonHeight = 0;
        balloonWidth = 0;
        popCount++;
    }

    balloonHeight += eachIncrement; //height increment
    balloonWidth += eachIncrement; //width increment
    inflateCount++; //changing inflation count

    draw();
}

//to show on the screen; resizing of the ballon
const draw = () => {

    //accessing the balloon id to update its height and width
    let ballonElement = document.getElementById("balloon");
    ballonElement.style.height = balloonHeight + "px";
    ballonElement.style.width = balloonWidth + "px";

    //accessing the click-count id to update number next to inflate box
    let clickCountElem = document.getElementById("click-count");
    clickCountElem.innerText = inflateCount.toString();

    //pop-count update number
    let popCountElem = document.getElementById("pop-count")
    popCountElem.innerText = popCount.toString();
}

