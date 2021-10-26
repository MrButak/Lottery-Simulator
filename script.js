function lotteryNumberGenerator() {
//let ranNum;
    buttonDisplayWrapper = document.querySelector(".buttonDisplayWrapper");
    regBall = [];
    regBallCheck = [];
    for(x = 0; x < 5; x++) {
        ranNum = Math.floor(Math.random() * (36 - 1) + 1);
        regBallCheck[x] = ranNum;//create array with winning numbers
        regBall[x] = "regBall"; //create unique class ids for the created divs
        regBall = document.createElement("div");
        regBall.textContent = (ranNum);
        regBall.classList.add("regBall");
        regBall.classList.add("regBall" + x);//create unique class ids for the created divs
        
        buttonDisplayWrapper.appendChild(regBall);
        //console.log(ranNum)
    }
    for(y = 0; y < 1; y++) {
        ranPBallNum = Math.floor(Math.random() * (6 - 1) + 1);
        pBall = document.createElement("div");
        pBall.textContent = (ranPBallNum);   
        pBall.classList.add("pBall");
        buttonDisplayWrapper.appendChild(pBall);
    }
    

}

function userChoice () {
   
   userNumbers = document.querySelectorAll(".userNumbers");
    for(x = 0; x < 10; x++) {
        userNumbers[x].classList.add("btn" + (x + 1)) //add unique class name to each individual buttons
        userNumbers[x].addEventListener('click', () => {
            console.log(x)
        })
    }
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


    
