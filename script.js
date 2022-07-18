


function computerPlay(){
    
    let randomOptionNumber = Math.floor(Math.random() * 3)+1;

    if(randomOptionNumber === 1){
        return "rock"
    }else if(randomOptionNumber === 2){
        return "paper";
    }else{
        return "scissor"
    }

}


function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();
    let computerIA = computerSelection.toLowerCase();
    //let playerScore = 0;
    //let iaScore = 0;
  

    if(player === computerIA){

        return finalScore={
            final : "It is a Tie!!",
            pointsIA: false,
            pointsPlayer: false
        } 

    }
    else if(player == "rock"){
        if(computerIA == "paper"){
            
            return finalScore={
                final: "You Lose, IA(paper) beats Player(rock)",
                pointsIA: true,
                pointsPlayer: false
            } 
        }else{
           

            return finalScore={
                final: "You Win, Player(rock) beats IA(scissor)",
                pointsIA: false,
                pointsPlayer: true,
                
            }
        }

    }
    else if(player == "scissor"){
        if(computerIA == "rock"){
            
            return finalScore={
                final: "You Lose, IA(rock) beats Player(scissor)",
                pointsIA: true,
                pointsPlayer: false
            } 
        }else{
            
            return finalScore={
                final: "You Win, Player(scissor) beats IA(paper)",
                pointsIA: false,
                pointsPlayer: true
            }
        }
    }
    else if(player == "paper"){
        if(computerIA == "scissor"){
            
            return finalScore={
                final: "You Lose, IA(scissor) beats Player(paper)",
                pointsIA: true,
                pointsPlayer: false
            } 
        }else{
            
            return finalScore={
                final: "You Win, Player(paper) beats IA(rock)",
                pointsIA: false,
                pointsPlayer: true
            }
        }

    }
        
}

function game(){

    let playerPointsFinal = 0;
    let iaPointsFinal = 0;

    for(let i =0; i<5; i++){
        playRound();
        if(finalScore.pointsIA){
            iaPointsFinal++;
        }
        else if(finalScore.pointsPlayer){
            playerPointsFinal++;
        }
    }
    if(iaPointsFinal > playerPointsFinal){
          return `The Computer Win the match!!! with score ${iaPointsFinal} vs ${playerPointsFinal}`;
    }else return `You Win the match!!! with score ${playerPointsFinal} vs ${iaPointsFinal}`;
}


let playerSelection = prompt("Choose: rock, paper or scissor(use lower case!)"); 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection).final);

