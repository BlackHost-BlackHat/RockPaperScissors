
//generate computer choice by using Math.random
function getComputerChoice(){
    let random=Math.random()
    // console.log(random)
    if(random < 0.33) return "Rock"
    else if (random >= 0.33 && random <0.67) return "Scissor"
    else return "Paper"
}

//ask player for an input using prompt
function getHumanChoice(){
    let alegere=prompt("Care este alegerea ta (Rock/Paper/Scissor")
    return alegere
}

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
function playRound(){
    let humanChoice=getHumanChoice().toLowerCase()
    let computerChoice=getComputerChoice().toLowerCase()

    return score(computerChoice,humanChoice)
     
}

//repeating playRound 5 times and display if player won or lose
function playGame(){
    let computerScore=0,humanScore=0,egalitate=0;
    for(let i=0;i<5;i++){
    let answer=playRound()
        if(answer=="Player"){
            humanScore++
            console.log(`My score: ${humanScore}      Computer score: ${computerScore}        Draw: ${egalitate}`)
            console.log("-----------------")
        } 
        else if(answer == "Computer") {
            computerScore++
            console.log(`My score: ${humanScore}      Computer score: ${computerScore}        Draw: ${egalitate}`)
            console.log("-----------------")
        }
        else {
            egalitate++
            console.log(`My score: ${humanScore}      Computer score: ${computerScore}        Draw: ${egalitate}`)
            console.log("-----------------")
        }
    }
    console.log("")
    if(computerScore >humanScore) console.log("You lost!")
    else if (computerScore <humanScore) console.log("You won!")
    else console.log("Draw!")

}

playGame()