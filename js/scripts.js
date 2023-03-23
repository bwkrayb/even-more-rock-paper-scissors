// let compPickNum = Math.floor(Math.random()*3)+1;
let rockBtn = document.querySelector(".rock");
let papeBtn = document.querySelector(".paper");
let scisBtn = document.querySelector(".scissors");

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

compPickLogic()

console.log(compPick)


rockBtn.addEventListener("click", () => {
	let userPick = rockBtn.getAttribute('id')
	console.log(userPick)
	gameLogic(userPick,compPick)
});

papeBtn.addEventListener("click", () => {
	let userPick = papeBtn.getAttribute('id')
	console.log(userPick)
	gameLogic(userPick,compPick)
});

scisBtn.addEventListener("click", () => {
	let userPick = scisBtn.getAttribute('id')
	console.log(userPick)
	gameLogic(userPick,compPick)
});




function gameLogic(u,c) {
	if ((u === "scissors" && c === "paper") || (u === "rock" && c === "scissors") || (u === "paper" && c === "rock")) {
		console.log("You win! " + u + " beats " + c +" !")
	} 
	else if ((c === "scissors" && u === "paper") || (c === "rock" && u === "scissors") || (c === "paper" && u === "rock"))  {
		console.log("You lose! " + c + " beats " + u +" !")
	} else {
		console.log("tie?")
		console.log("computer chose " + c)
	}
	compPickLogic()
}



