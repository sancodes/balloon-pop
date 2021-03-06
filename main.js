
//saving the players into the local storage
const savePlayersInLocalStorage = () => {
    /**
        we need a key and value for localStorage.setItem(key, value)
        the value --> has to be a string type, but 
        since the value of the playersArray is an object--> {name: "name", topScore: #}
        we need to convert the playersArray to string, so the way to do is, 
        using JSON.stringify(array) --> converts the object to be a string
        {name: "name", topScore: #} goes to --> "{name: "name", topScore: #}"
    **/
    window.localStorage.setItem("players", JSON.stringify(playersArray));

}

//accessing the values from the local storage
const loadPlayersFromLocalStorage = () => {
    /** 
        now we need to go and take out the values from local storage
        we know that since the value stored is in string
        for my part, since, i'll be trying to access the 'object' which is stored as a string
        i will have to convert the string to object, 
        to do so, JSON.parse(...) 
    **/
    let playerDataFromStorage = JSON.parse(window.localStorage.getItem("players"));

    /** 
        after pulling the data the playersArray will be filled with playerDataFromStorage
        code for when user initially tries to pull the data, when the local storage is empty
        if there's a data then the array will just be the data that's there in local storage
        if the local storage is empty, the players array will still be empty.
    **/
    if (playerDataFromStorage) {
        playersArray = playerDataFromStorage;
    }
}

//#region game logic and data
let inflateCount = 0;
let balloonHeight = 120;
let balloonWidth = 100;
let eachIncrement = 40;
let maxSizeToBurst = 250;
let currentPopCount = 0;
let clockId = 0;
let gameLength = 10000; //milisecond 
let timeRemaining = 0;
let currentPlayer = {};
let currentColor = "red";
let possibleColors = ["yellow", "blue", "green"];

//start game
//also contains stop game function--> basically setTimeout(), 1st param
const startgame = () => {

    //'hidden-functionality' is a class in my index.html file
    //that is set to display = none in my css file
    document.getElementById("main-game-controls").classList.add("hidden-functionality");
    document.getElementById("game-controls").classList.remove("hidden-functionality");
    document.getElementById("score-board").setAttribute("hidden", "true");
    startClock();

    //stop game if game length reached
    setTimeout(() => {

        document.getElementById("game-controls").classList.add("hidden-functionality");
        document.getElementById("main-game-controls").classList.remove("hidden-functionality");
        document.getElementById("score-board").removeAttribute("hidden");

        balloonHeight = 120;
        balloonWidth = 100;
        inflateCount = 0;

        //score update for players and saving it to local storage
        if (currentPopCount > currentPlayer.topScore) {
            currentPlayer.topScore = currentPopCount;
            savePlayersInLocalStorage();
        }
        currentPopCount = 0;
        stopClock();
        draw();  //to update the original state of the balloon
        drawScoreboard();
    }, gameLength)
}

//clock start function
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
    balloonHeight += eachIncrement; //height increment
    balloonWidth += eachIncrement; //width increment
    inflateCount++; //changing inflation count
    checkBalloonPop();
    draw();
}

const checkBalloonPop = () => {
    //balloon burst -- if maxed reached
    if (balloonHeight >= maxSizeToBurst) {
        let ballonElement = document.getElementById("balloon");
        getRandomColor();
        ballonElement.style.backgroundColor = currentColor;
        // @ts-ignore
        document.getElementById("pop-sound").play();
        balloonHeight = 0;
        balloonWidth = 0;
        currentPopCount++;
    }
}

const getRandomColor = () => {
    let i = Math.floor(Math.random() * possibleColors.length);
    currentColor = possibleColors[i];
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
    popCountElem.innerText = currentPopCount.toString();

    //high-pop-count update number
    let highPopCountElem = document.getElementById("high-pop-count");
    highPopCountElem.innerText = currentPlayer.topScore.toString();

    //show current player in screen
    let playerNameElem = document.getElementById("player-name");
    playerNameElem.innerText = currentPlayer.name;
}
//#endregion


let playersArray = [];
loadPlayersFromLocalStorage(); //this helps to keep the player data in storage even tho we reload the screen

//form
const setPlayer = event => {
    event.preventDefault(); //without this code the function output wont show in console and stop auto page reload

    //formTarget grabs on to the event property target, to later on
    //access the value 
    let formTarget = event.target;
    let playerName = formTarget["player-name"].value; //we grab on the 'player-name' from our index.html 

    // #region 
    //way to loop through and assign a object property to a form - name
    // if the players[] is not empty
    // if (playersArray.length > 0) {
    //     //loop to check if the name already exists or not
    //     //if it exists, dont do anything
    //     for (let i = 0; i < playersArray.length; i++) {
    //         if (playersArray[i].name == playerName) {
    //             currentPlayer = playersArray[i];
    //             break;
    //         }
    //         else if (playersArray[i].name != playerName && i >= (playersArray.length - 1)) {
    //             //playersArray.push({ name: playerName, topScore: 0 })
    //             currentPlayer = { name: playerName, topScore: 0 }; //changes to current player
    //             playersArray.push(currentPlayer);
    //             savePlayersInLocalStorage();
    //         }
    //         //if the name doesnt exists insert the new name in the back
    //         else {
    //             continue;
    //         }
    //     }
    // }
    // //if players[] is empty
    // else {
    //     // playersArray.push({ name: playerName, topScore: 0 });
    //     // currentPlayer = playerName;//changes to current player
    //     currentPlayer = { name: playerName, topScore: 0 }; //changes to current player
    //     playersArray.push(currentPlayer);
    //     savePlayersInLocalStorage();
    // }
    // console.log(playersArray);
    // console.log(`Current player ${ currentPlayer } `);
    //#endregion

    // another way to loop without using loop is find()
    currentPlayer = playersArray.find((parameterPlayer) => parameterPlayer.name == playerName);
    if (!currentPlayer) {
        currentPlayer = { name: playerName, topScore: 0 };
        playersArray.push(currentPlayer);
        savePlayersInLocalStorage();
    }
    formTarget.reset();
    document.getElementById("game").removeAttribute("hidden"); //removes hidden attribute and brings back the game
    formTarget.setAttribute("hidden", "true"); //formTarget = document.getElementById("player-form")

    //hiding balloons and popcounts and time remaining
    document.getElementById("game-controls").classList.add("hidden-functionality");
    draw();
    drawScoreboard();
}

//change player 
const changePlayer = () => {
    document.getElementById("player-form").removeAttribute("hidden"); //bringing up the hidden form back
    document.getElementById("game").setAttribute("hidden", "true");
}

//scoreboard template
const drawScoreboard = () => {
    let template = " "
    playersArray.sort((player1, player2) => player2.topScore - player1.topScore)
    playersArray.forEach((playerArrayElem) => {
        template += `
                    <div class="flex-elem space-between">
                        <span> 
                            <i class="fa fa-user"></i>
                            ${playerArrayElem.name}
                        </span>
                        <span> 
                            Score: ${playerArrayElem.topScore}
                        </span>
                    </div>`
    })
    document.getElementById("score-data").innerHTML = template;
}
drawScoreboard();