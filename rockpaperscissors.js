// create start button script
var startContainer = document.getElementById('startcontainer');
var btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
	startContainer.style.opacity = 0;
	startContainer.style.tranform = 'scale(0)';
	startContainer.style.display = 'none';
});

function hideEndContainerShowWinner(){
	var gameContainer = document.querySelector('.gamecontainer');
	var bottomContainer = document.getElementById('bottomcontainer');
	gameContainer.style.opacity = 0;
	gameContainer.style.transform = 'scale(0)';
	gameContainer.style.display = 'none';
	bottomContainer.style.display = 'block';
}


var playerScore = 0;
var computerScore = 0;
var gamesPlayed = 0;

document.addEventListener("click", gameSelectionLister);

function gameSelectionLister(event){
	var element = event.target;
	console.log(event.target);

	var rock = "rock";
	var paper = "paper";
	var scissors = "scissors";

	if (element.classList.contains("selection") && element.id === ('rockimg')){
		playRound(rock);
		console.log("rock submitted!");
	} else if (element.classList.contains("gameselection") && element.id === ('rockdiv')){
		playRound(rock);
		console.log("rock submitted!");
	} else if (element.classList.contains("gameselectiontext") && element.id === ('rockselection')){
		playRound(rock);
		console.log("rock submitted!");
	} else if (element.classList.contains("selection") && element.id === ('paperimg')){
		playRound(paper);
		console.log("paper submitted!");
	} else if (element.classList.contains("gameselection") && element.id === ('paperdiv')){
		playRound(paper);
		console.log("paper submitted!");
	} else if (element.classList.contains("gameselectiontext") && element.id === ('paperselection')){
		playRound(paper);
		console.log("paper submitted!");
	} else if (element.classList.contains("selection") && element.id === ('scissorimg')){
		playRound(scissors);
		console.log("scissors submitted!");
	} else if (element.classList.contains("gameselection") && element.id === ('scissorsdiv')){
		playRound(scissors);
		console.log("scissors submitted!");
	} else if (element.classList.contains("gameselectiontext") && element.id === ('scissorsselection')){
		playRound(scissors);
		console.log("scissors submitted!");
	}    
}

function computerSelect(){
	randomGameValue = Math.floor(Math.random() * 3);
	if (randomGameValue == "0"){
		return "rock";
	} else if (randomGameValue == "1"){
		return "paper";
	}else{
		return "scissors";
	}

}

function playRound(playerSelection){
	console.log("player selection  = " + playerSelection);

	var computerSelection = computerSelect();
	console.log("computer selection  = " + computerSelection);
	const rockSelected = document.querySelector("#rockdiv");
	const paperSelected = document.querySelector("#paperdiv");
	const scissorSelected = document.querySelector("#scissorsdiv");
	const computerRockSelected = document.querySelector("#computerrockdiv");
	const computerPaperSelected = document.querySelector("#computerpaperdiv");
	const compuyterScissorSelected = document.querySelector("#computerscissorsdiv");

	if (computerSelection === "rock"){
		console.log("style rock");
		computerRockSelected.style.backgroundColor = "#7987e9";
		computerPaperSelected.style.backgroundColor = "white";
		compuyterScissorSelected.style.backgroundColor = "white";
	} else if (computerSelection === "paper"){
		console.log("style paper");
		computerRockSelected.style.backgroundColor = "white";
		computerPaperSelected.style.backgroundColor = "#7987e9";
		compuyterScissorSelected.style.backgroundColor = "white";
	} else if (computerSelection === "scissors"){
		console.log("style scissors");
		computerRockSelected.style.backgroundColor = "white";
		computerPaperSelected.style.backgroundColor = "white";
		compuyterScissorSelected.style.backgroundColor = "#7987e9";
	}

	var playerSelectionString =  String(playerSelection);
	var playerSelectionLowerCase = playerSelectionString.toLowerCase();

	if (playerSelectionLowerCase === "rock"){
		rockSelected.style.backgroundColor = "#fc5868";
		paperSelected.style.backgroundColor = "white";
		scissorSelected.style.backgroundColor = "white";
		if (computerSelection === "rock"){
			console.log("It's a tie!");
		}else if (computerSelection === "paper"){
			console.log("Computer Wins :(");
			computerScore = computerScore + 1; //computerScore++;
			const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score : ${computerScore}`;
			game(playerScore,computerScore);
		}else if (computerSelection === "scissors"){
			console.log("Player Wins :)");
			playerScore = playerScore + 1; 
			const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score : ${playerScore}`;
			game(playerScore,computerScore);
		}
	} else if (playerSelectionLowerCase === "paper"){
		rockSelected.style.backgroundColor = "white";
		paperSelected.style.backgroundColor = "#fc5868";
		scissorSelected.style.backgroundColor = "white";
		if (computerSelection === "paper"){
			console.log("It's a tie!");
		}else if (computerSelection === "scissors"){
			console.log("Computer Wins :(");
			computerScore = computerScore + 1; 
			const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score : ${computerScore}`;
			game(playerScore,computerScore);
		}else if (computerSelection === "rock"){
			console.log("Player Wins :)");
			playerScore = playerScore + 1; 
			const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score : ${playerScore}`;
			game(playerScore,computerScore);
		}
	} else if (playerSelectionLowerCase === "scissors"){
		rockSelected.style.backgroundColor = "white";
		paperSelected.style.backgroundColor = "white";
		scissorSelected.style.backgroundColor = "#fc5868";
		if (computerSelection === "scissors"){
			console.log("It's a tie!");
		}else if (computerSelection === "rock"){
			console.log("Computer Wins :(");
			computerScore = computerScore + 1; 
			const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score : ${computerScore}`;
			game(playerScore,computerScore);
		}else if (computerSelection === "paper"){
			console.log("Player Wins :)");
			playerScore = playerScore + 1; 
			const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score : ${playerScore}`;
			game(playerScore,computerScore);
		}
	}
	else{
		console.log("invalid entry, try again");
		game(playerScore,computerScore);
	}
}

function game(playerScore,computerScore){
	const gameUpdates = document.querySelector(".gameupdates");
	var userWinLogo = document.querySelector("#userwinslogo");
	var computerWinsLogo = document.querySelector("#computerwinslogo");
	var maxScore = 5;
	if (playerScore == maxScore || computerScore == maxScore){
		if (playerScore > computerScore){
			var text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
			gameUpdates.appendChild(text);
			hideEndContainerShowWinner();
			userWinLogo.style.display ='block';
		}else if (playerScore < computerScore){
			var text = document.createTextNode(`COMPUTER WINS :( ${computerScore}:${playerScore}!`);
			gameUpdates.appendChild(text);
			hideEndContainerShowWinner();
			computerWinsLogo.style.display ='block';
		} else{
			var text = document.createTextNode(`It's a Tie!`);
			gameUpdates.appendChild(text);
			hideEndContainerShowWinner();
			userWinLogo.style.display ='block';
			computerWinsLogo.style.display ='block';
		}
	}
}












