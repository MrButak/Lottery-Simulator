//todo:
//1. make is so user can't enter more than 5 numbers and 1 pb number
//2. fix duplicates bug in determineWinner() function

let counter = 0;
function play() {

    let winningNumbers = document.querySelectorAll(".winningNumbers");
    let winningPBNumber = document.querySelector(".winningPBNumber");

    winningNumbersArray = [];
    winningPBNumbersArray = [];

    let ranNum;
    let ranPBNum;
    //produces 5 random numbers 1 - 35
    for(x = 0; x < 5; x++) {
        ranNum = Math.floor(Math.random() * (36 - 1) + 1);
        winningNumbers[x].textContent = (ranNum);
        winningNumbersArray.push(ranNum);  
    }
    //produces 1 random number 1 - 5
    for(x = 0; x < 1; x++) {
        ranPBNum = Math.floor(Math.random() * (6 - 1) + 1);
        winningPBNumber.textContent = (ranPBNum);
        winningPBNumbersArray.push(ranPBNum);
    }
    determineWinner();
}

function pickNumbers() {

    let numberButtons = document.querySelectorAll(".numberButton");
    let userNumbers = document.querySelector(".userNumbers");
    let pBButton = document.querySelectorAll(".pBButton");
    let userPBNumber = document.querySelector(".userPBNumber");

    userNumbersArray = [];
    userPBNumberArray = [];
    
    numberButtons.forEach((button) => {
        
        button.addEventListener('click', () => {
            userNumbersArray.push(button.innerHTML);
            userNumbers.textContent = userNumbersArray.join(" - ")
            //prevent user from entering more than 5 numbers
            
             
        })
        
    });
    

    pBButton.forEach((button) => {
        button.addEventListener('click', () => {
            userPBNumberArray.push(button.innerHTML);
            userPBNumber.textContent = userPBNumberArray.join("")
            //prevent user from entering more than 1 number
            
        })
    });
    
}

function determinePlay() {

    playButton = document.querySelector(".playButton");
 
    playButton.addEventListener('click', () => {
        if(userNumbersArray.length == 5 && userPBNumberArray.length == 1) {play()}
        
    })
}



function determineWinner() {
    // This is counting duplicates in the userNumberArray.
    // example :  userNumbersArray [3, 3, 3, 14, 7] and winningNumbersArray [3, 23, 22, 19, 7]
    // so that counts 3 matches.
        stats = document.querySelector(".stats");
        userNumbersArray = userNumbersArray.map(Number)
        matchingNumbers = userNumbersArray.filter(function(val) {
            return winningNumbersArray.indexOf(val) != -1;
        })

        if(matchingNumbers.length > 0) {stats.textContent = (`You've got a match! ${matchingNumbers}`)}
        if(userPBNumberArray[0] == winningPBNumbersArray[0]) {stats.textContent = (`You matched the PowerBall! ${winningPBNumbersArray[0]}`)}
     

}

function additionalButtons() {
    // clear button
    userNumbers = document.querySelector(".userNumbers");
    userPBNumber = document.querySelector(".userPBNumber");

    clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener('click', () => {
        userNumbers.textContent = "";
        userPBNumber.textContent = "";
        userNumbersArray = [];
        userPBNumberArray = [];
    });
    //reset button
    winningNumbers = document.querySelectorAll(".winningNumbers");
    winningPBNumber = document.querySelector(".winningPBNumber");
    resetButton = document.querySelector(".resetButton");


    resetButton.addEventListener('click', () => {
        if(winningNumbers[0].textContent != "?") {
            userNumbers.textContent = "";
            userPBNumber.textContent = "";
            winningNumbers.textContent
            userNumbersArray = [];
            userPBNumberArray = [];
            winningPBNumber.textContent = "?"
            for(x = 0; x < 5; x++) {
                winningNumbers[x].textContent = "?";
            }
            winningNumbersArray = [];
            winningPBNumbersArray = [];
        }
    })

}
