let Cm100 = document.querySelector("#Cm100")
let points = 0
let scoreBoard = document.querySelector("h2")

Cm100.addEventListener("click", function () {
    points += 100;
    scoreBoard.innerHTML = points;
    console.log(123)
    
})
Wm100.addEventListener("click", function () {
    points -= 100;
    scoreBoard.innerHTML = points;
    console.log(123)
})
