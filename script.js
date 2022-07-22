function computerPlay() {
  let randomOptionNumber = Math.floor(Math.random() * 3) + 1;

  if (randomOptionNumber === 1) {
    return "rock";
  } else if (randomOptionNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function humanPlayerValidation(humanInput) {
  humanInput = humanInput.toLowerCase();
  switch (humanInput) {
    case 'rock':
    case 'paper':
    case 'scissor':
      return true;
      break;
    default:
      return false;
  };
}


function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computerIA = computerSelection.toLowerCase();
  //let playerScore = 0;
  //let iaScore = 0;

  if (player === computerIA) {
    return (finalScore = {
      final: "It is a Tie!!",
      pointsIA: false,
      pointsPlayer: false,
    });
  } else if (player == "rock") {
    if (computerIA == "paper") {
      return (finalScore = {
        final: "You Lose, IA(paper) beats Player(rock)",
        pointsIA: true,
        pointsPlayer: false,
      });
    } else {
      return (finalScore = {
        final: "You Win, Player(rock) beats IA(scissor)",
        pointsIA: false,
        pointsPlayer: true,
      });
    }
  } else if (player == "scissor") {
    if (computerIA == "rock") {
      return (finalScore = {
        final: "You Lose, IA(rock) beats Player(scissor)",
        pointsIA: true,
        pointsPlayer: false,
      });
    } else {
      return (finalScore = {
        final: "You Win, Player(scissor) beats IA(paper)",
        pointsIA: false,
        pointsPlayer: true,
      });
    }
  } else if (player == "paper") {
    if (computerIA == "scissor") {
      return (finalScore = {
        final: "You Lose, IA(scissor) beats Player(paper)",
        pointsIA: true,
        pointsPlayer: false,
      });
    } else {
      return (finalScore = {
        final: "You Win, Player(paper) beats IA(rock)",
        pointsIA: false,
        pointsPlayer: true,
      });
    }
  }
}

function game() {
  let playerPointsFinal = 0;
  let iaPointsFinal = 0;
  let computerSelection = computerPlay();

  for (let i = 0; i < 5; i++) {

    let humanEntranceInput = prompt("Select: Rock, Paper, Scissor (lower case!!)");

    while(humanPlayerValidation(humanEntranceInput) == false){
      humanEntranceInput = prompt("Not a valid pick up, Retry!!!");
     }

     console.log(humanPlayerValidation(humanEntranceInput));

    let finalScore = playRound(humanEntranceInput, computerSelection);
    
    if (finalScore.pointsIA) {
      iaPointsFinal++;
    } else if (finalScore.pointsPlayer) {
      playerPointsFinal++;
    }
    console.log(playRound(humanEntranceInput, computerSelection).final);
  }
  if (iaPointsFinal > playerPointsFinal) {
    console.log(
      `The Computer Win the match!!! with score ${iaPointsFinal} vs ${playerPointsFinal}`
    );
  } if(iaPointsFinal < playerPointsFinal)console.log(`You Win the match!!! with score ${playerPointsFinal} vs ${iaPointsFinal}`);
  else console.log("The match finished in a TIE!!")
}

game();
