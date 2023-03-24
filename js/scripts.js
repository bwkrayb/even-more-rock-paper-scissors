let playBtn = document.querySelector(".play");

playBtn.addEventListener("click", () => {
	gameLogic()
});

compPickLogic()

function compPickLogic() {
	let c = Math.floor(Math.random()*3)+1;
	if (c === 1) {
		compPick = 'rock'
	} else 	if (c === 2) {
		compPick = 'paper'
	} else 	if (c === 3) {
		compPick = 'scissors'
	}
};

function reset() {
	userScore = 0;
	computerScore = 0;
}

function playRound(u,c,i) {
	if ((u === "scissors" && c === "paper") || (u === "rock" && c === "scissors") || (u === "paper" && c === "rock")) {
		console.log("You win! " + u.substr(0,1).toUpperCase() + u.slice(1) + " beats " + c +"!")
		userScore = userScore + 1
	} 
	else if ((c === "scissors" && u === "paper") || (c === "rock" && u === "scissors") || (c === "paper" && u === "rock"))  {
		console.log("Computer wins! " + c.substr(0,1).toUpperCase() + c.slice(1) + " beats " + u +"!")
		computerScore = computerScore + 1
	} else {
		console.log("Tie! The Computer also chose " + c + "!")
		return false;
	}
}

function gameLogic() {
	userScore = 0;
	computerScore = 0;
	for (let i = 1; i <= 5; i++) {
		console.log("Round: " + i)
		compPickLogic()
		userPick = prompt().toLowerCase()
		if (playRound(userPick,compPick) ==false) {
			console.log("Replay round: " + i)
			i--
		}
	}
	compPickLogic()
	if (userScore > computerScore) {
		console.log("VICTORY! The score was " + userScore + " to " + computerScore + ".")
		// reset()
		return;
	} else {
		console.log("GAME OVER! The score was " + computerScore + " to " + userScore + ".")
		// reset()
		return;
	}
}


