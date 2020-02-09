
let clickCount = 0;
let balloonHeight = 120;
let balloonWidth = 100;
let eachIncrement = 30;
let maxSizeToBurst = 250;
let popCount = 0;

//inflate function
const inflate = () => {

    //balloon burst -- if maxed reached
    if (balloonHeight >= maxSizeToBurst) {
        popCount++;
        balloonHeight = 0;
        balloonWidth = 0;
        document.getElementById("pop-count").innerText = popCount.toString(); //pop-count update number
    }

    let ballonElement = document.getElementById("balloon");

    //height increment
    balloonHeight += eachIncrement;
    ballonElement.style.height = balloonHeight + "px";

    //width increment
    balloonWidth += eachIncrement;
    ballonElement.style.width = balloonWidth + "px";


    //changing the inflation count from 0 to higher number
    clickCount++; //clickCount added to make ballon pop
    let clickCountElem = document.getElementById("click-count");
    clickCountElem.innerText = clickCount.toString();

}

//timeOut function

const startgame = () => {
    setTimeout(() => {
        console.log("ji");
    }, 3000)
}