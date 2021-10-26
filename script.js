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
function checkWinner() {
    let userNumbers0 = prompt("num 1");
    if(userNumbers0 == regBallCheck[0] ||
        userNumbers0 == regBallCheck[1] ||
        userNumbers0 == regBallCheck[2] ||
        userNumbers0 == regBallCheck[3] ||
        userNumbers0 == regBallCheck[4]) {
            console.log(regBallCheck)
        } else {
            console.log("nope")
        }
    
    
}


    
