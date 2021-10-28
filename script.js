function play() {

    let winningNumbers = document.querySelectorAll(".winningNumbers");
    let winningPBNumber = document.querySelector(".winningPBNumber");
    let winningNumbersArray = [];
    let winningPBNumbersArray = [];
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
        console.log(winningPBNumbersArray)
    }

   
}