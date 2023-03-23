let rockBtn = document.querySelector(".rock");
let papeBtn = document.querySelector(".paper");
let scisBtn = document.querySelector(".scissors");
let userScore = 0;
let computerScore = 0;

// console.log(compPickNum);

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

compPickLogic()

console.log(compPick)


// rockBtn.addEventListener("click", () => {
// 	let userPick = rockBtn.getAttribute('id')
// 	console.log(userPick)
// 	gameLogic(userPick,compPick)
// });

// papeBtn.addEventListener("click", () => {
// 	let userPick = papeBtn.getAttribute('id')
// 	console.log(userPick)
// 	gameLogic(userPick,compPick)
// });

// scisBtn.addEventListener("click", () => {
// 	let userPick = scisBtn.getAttribute('id')
// 	console.log(userPick)
// 	gameLogic(userPick,compPick)
// });


function playRound(u,c,i) {
	if ((u === "scissors" && c === "paper") || (u === "rock" && c === "scissors") || (u === "paper" && c === "rock")) {
		console.log("You win! " + u + " beats " + c +"!")
		userScore = userScore + 1
	} 
	else if ((c === "scissors" && u === "paper") || (c === "rock" && u === "scissors") || (c === "paper" && u === "rock"))  {
		console.log("Computer wins! " + c + " beats " + u +" !")
		computerScore = computerScore + 1
	} else {
		console.log("tie?")
		console.log("computer chose " + c)
		return false;
	}
}


// function gameLogic() {
// 	playRound(userPick,compPick)
// 	compPickLogic()
// 	if (userScore === 5) {
// 		console.log("You won 5 rounds!")
// 		reset()
// 		return;
// 	} else if (computerScore === 5) {
// 		console.log("The computer won 5 rounds!")
// 		reset()
// 		return;
// 	}
// }


let playBtn = document.querySelector(".play");

playBtn.addEventListener("click", () => {
	gameLogic()
});

function gameLogic() {
	for (let i = 1; i <= 5; i++) {
		console.log("Round: " + i)
		compPickLogic()
		userPick = prompt().toLowerCase()
		if (playRound(userPick,compPick) ==false) {
			i--
			console.log("Replay round: " + i)
		}

	}
	compPickLogic()
	if (userScore > computerScore) {
		console.log("You won! The score was " + userScore + " to " + computerScore + ".")
		reset()
		return;
	} else {
		console.log("The computer beat you " + computerScore + " to " + userScore + ".")
		reset()
		return;
	}
}


