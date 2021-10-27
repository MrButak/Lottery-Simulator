function lotteryNumberGenerator() {
    
    ballDisplayWrapper = document.querySelector(".ballDisplayWrapper");
    regBall = [];
    regBallCheck = [];
    //creates 5 random numbers (1 - 35) to represent the Lottery numbers
    for(x = 0; x < 5; x++) {
        ranNum = Math.floor(Math.random() * (36 - 1) + 1);
        regBallCheck[x] = ranNum;//create array with winning numbers
        regBall[x] = "regBall"; //create unique variable names for each ranNum
        regBall = document.createElement("div");
        regBall.textContent = (ranNum);
        regBall.classList.add("regBall");
        regBall.classList.add("regBall" + x);//create unique class ids for the created divs
        ballDisplayWrapper.appendChild(regBall);//adds the random number to the html  
    }

    //creates a random number (1 - 5) to represent the Power Ball number
    for(y = 0; y < 1; y++) {
        ranPBallNum = Math.floor(Math.random() * (6 - 1) + 1);
        pBall = document.createElement("div");
        pBall.textContent = (ranPBallNum);   
        pBall.classList.add("pBall");
        ballDisplayWrapper.appendChild(pBall);
    }
}

function userChoice () {

    userDisplayNumbersArray = [];
    userNumbersDisplayWrapper = document.querySelector(".userNumbersDisplayWrapper");
    userNumbers = document.querySelectorAll(".userNumbers");

    userNumbers.forEach((button) => {
        button.addEventListener('click', () => {
            userDisplayNumbersArray.push(button.innerHTML)
            userNumbersDisplayWrapper.textContent = userDisplayNumbersArray.join("  --  ")
            if(userDisplayNumbersArray.length >= 5) {
                userDisplayNumbersArray.pop();
                
            } 
        })
    })
    userDisplayPBNumbersArray = [];
    userNumbersPBDisplayWrapper = document.querySelector(".userNumbersPBDisplayWrapper");
    userPowerBallNumbers = document.querySelectorAll(".userPowerBallNumbers");

    userPowerBallNumbers.forEach((button) => {
        button.addEventListener('click', () => {
            userDisplayPBNumbersArray.push(button.innerHTML);
            userNumbersPBDisplayWrapper.textContent = userDisplayPBNumbersArray.join("");
            userNumbersPBDisplayWrapper.style.color = "red"

            if(userDisplayNumbersArray.length < 5) {
                userDisplayPBNumbersArray = [];
            }
        })
    })

    pBtn = document.querySelector(".pBtn");
    pBtn.addEventListener('click', () => {
        
        if(userDisplayNumbersArray.length == 4 && userDisplayPBNumbersArray == 0) {
            
            lotteryNumberGenerator()
        }
    })
}


function clearButton() {
    cBtn = document.querySelector(".cBtn");
    cBtn.addEventListener('click', () => {
        userDisplayPBNumbersArray = [];
        userDisplayNumbersArray = [];
        userNumbersDisplayWrapper.textContent = "";
        for(x = 0; x < 5; x++) {
            regBall[x].textContent = "";
        }
    })
}


function checkWinner() {
    
           
       
        // if(userNumbers[x] == regBallCheck[0] ||
        //     userNumbers[x] == regBallCheck[1] ||
        //     userNumbers[x] == regBallCheck[2] ||
        //     userNumbers[x] == regBallCheck[3] ||
        //     userNumbers[x] == regBallCheck[4]) {
        //         console.log("You Matched a Number!" + userNumbers[x])
                
        //     } else {
        //         console.log("nope")
        //     }
    
    
}


    
