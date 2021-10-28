function play() {

    let winningNumbers = document.querySelectorAll(".winningNumbers");
    let winningPBNumber = document.querySelector(".winningPBNumber");

    winningNumbersArray = [];
    winningPBNumbersArray = [];

    let ranNum;
    let ranPBNum;

    for(x = 0; x < 5; x++) {
        ranNum = Math.floor(Math.random() * (36 - 1) + 1);
        winningNumbers[x].textContent = (ranNum);
        winningNumbersArray.push(ranNum);  
    }

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
    let userPBNumber = document.querySelector(".userPBNumber")

    userNumbersArray = [];
    userPBNumberArray = [];

    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            userNumbersArray.push(button.innerHTML);
            userNumbers.textContent = userNumbersArray.join(" - ")
        })
    });

    pBButton.forEach((button) => {
        button.addEventListener('click', () => {
            userPBNumberArray.push(button.innerHTML);
            userPBNumber.textContent = userPBNumberArray.join("")
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
    for(x = 0; x < 5; x++) {
        if(userNumbersArray[x] == winningNumbersArray[x]) {console.log(`You matched ${winningNumbersArray[x]}`)}
    }
    if(userPBNumberArray[0] == winningPBNumbersArray[0]) {console.log(`You matched the PowerBall! ${winningPBNumbersArray[0]}`)}
    // console.table({userNumbersArray});
    // console.log({userPBNumberArray});
    // console.table({winningNumbersArray});
    // console.log({winningPBNumbersArray});

}
