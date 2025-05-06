
//generate computer choice by using Math.random
function getComputerChoice(){
    let random=Math.random()
    // console.log(random)
    if(random < 0.33) return "Rock"
    else if (random >= 0.33 && random <0.67) return "Scissor"
    else return "Paper"
}

//ask player for an input using prompt
// function getHumanChoice(){
//     let alegere=prompt("Care este alegerea ta (Rock/Paper/Scissor")
//     return alegere
// }

//verify who won the match or if a tie happened and display the result
function score(computer,human){
  let humanScore=0,computerScore=0;

if(human=="rock" && computer !="rock"){
    computer == "paper" ? computerScore++ : humanScore++
}else if (human == "paper" && computer !="paper"){
    computer == "scissor"? computerScore++ : humanScore++
}else if(human == "scissor" && computer !="scissor"){
    computer=="rock"?computerScore++ : humanScore++
} else{ console.log("Egalitate!"); return "Egalitate"}

// console.log(computerScore)
// console.log(humanScore)

if(computerScore > humanScore){ console.log(`You lose! ${computer} beats ${human}!`); return "Computer" }
    else {console.log(`You won! ${human} beats ${computer}!`); return "Player" }

}
//putting the function together
function playRound(humanChoice){
let computerChoice=getComputerChoice().toLowerCase()
 console.log(humanChoice)
    return score(computerChoice,humanChoice)
     
}
let hScore=0
let cScore=0
let eScore=0
let k=0;

const container=document.querySelector("#container")
const div=document.createElement("div")
const humanScore=document.createElement("p")
const calculatorScore=document.createElement("p")
const tie=document.createElement("p")
const rezult=document.createElement("p")

tie.textContent="Tie:"+eScore
humanScore.textContent="Your score: "+hScore
calculatorScore.textContent="Computer score: "+cScore
container.appendChild(div)
div.appendChild(humanScore)
div.appendChild(calculatorScore)
div.appendChild(tie)
div.appendChild(rezult)

// repeating playRound 5 times and display if player won or lose


const butoane = document.querySelectorAll(".buton");

butoane.forEach((buton) => { //parcuirge fiecare obiect cu clasa buton
    buton.addEventListener("click", function() {
        let rezultat;
        if(k==0){
            humanScore.textContent="Your score: "+hScore
            calculatorScore.textContent="Computer score: "+cScore
            tie.textContent="Tie:"+eScore
        }
        if (buton.classList.contains("Rock")) {
            rezultat=playRound("rock");
        } else if (buton.classList.contains("Paper")) {
           rezultat= playRound("paper");
        } else if (buton.classList.contains("Scissor")) {
           rezultat= playRound("scissor");
        }

        if(rezultat=="Player"){
            hScore++;k++
            humanScore.textContent="Your score: "+hScore

        } 
        else if(rezultat == "Computer") {
            cScore++;k++
            calculatorScore.textContent="Computer score: "+cScore
        }
        else {
            eScore++;k++
            tie.textContent="Tie:"+eScore
        }
 
        if(k==5){
          if(hScore>cScore){
            rezult.textContent="You win!"

          }else if(hScore<cScore){
            rezult.textContent="You lost!"
          }else{
            rezult.textContent="Is a tie!"
          }
            k = 0;hScore = 0;cScore = 0;eScore = 0;


        }

    });
});

