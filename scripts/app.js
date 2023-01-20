let score = document.getElementById("score");
let header = document.getElementById("header");
let selectionsBtn = document.getElementById("selectionsBtn");
let quitBtn = document.getElementById("quitBtn");

let playerAmount = "";
let gameMode = "";
let playerOneInput = "";
let playerTwoInput = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let scoreOneImageSrc;
let scoreOneImageAlt;
let scoreTwoImageSrc;
let scoreTwoImageAlt;

let h2;
let playersRow;

ChangeHeader("How many players?");
Players();

function ChangeHeader(headerStr) {
    header.innerHTML = "";

    h2 = document.createElement("h2");

    h2.textContent = headerStr;

    header.appendChild(h2);
}

function Players() {
    selectionsBtn.innerHTML = "";

    playersRow = document.createElement("div");
    playersRow.id = "playersRow";
    playersRow.className = "modes";

    let modeBtn1 = document.createElement("img");
    modeBtn1.className = "modeBtn";
    modeBtn1.src = "./assets/1-Number-PNG-Transparent.png";
    modeBtn1.alt = "1 Player";
    modeBtn1.addEventListener("click", function () {
        ModeBtnClick("singleplayer");
    });


    let modeBtn2 = document.createElement("img");
    modeBtn2.className = "modeBtn";
    modeBtn2.src = "./assets/two-removebg-preview.png";
    modeBtn2.alt = "2 Player";
    modeBtn2.addEventListener("click", function () {
        ModeBtnClick("twoplayer");
    });

    playersRow.appendChild(modeBtn1);
    playersRow.appendChild(modeBtn2);
    selectionsBtn.appendChild(playersRow);
}

function ModeBtnClick(playersValue) {
    playerAmount = playersValue;
    selectionsBtn.removeChild(playersRow);
    ChangeHeader("How many rounds?");
    GameModes();
}

function GameModes() {
    selectionsBtn.innerHTML = "";

    playersRow = document.createElement("div");
    playersRow.id = "playersRow";
    playersRow.className = "modes";

    let modeBtn1 = document.createElement("img");
    modeBtn1.className = "modeBtn";
    modeBtn1.src = "./assets/1-Number-PNG-Transparent.png";
    modeBtn1.alt = "mode 1";
    modeBtn1.addEventListener("click", function () {
        GameModeBtnClick("1");
    });


    let modeBtn2 = document.createElement("img");
    modeBtn2.className = "modeBtn";
    modeBtn2.src = "./assets/three-removebg-preview.png";
    modeBtn2.alt = "mode 2";
    modeBtn2.addEventListener("click", function () {
        GameModeBtnClick("3");
    });

    let modeBtn3 = document.createElement("img");
    modeBtn3.className = "modeBtn";
    modeBtn3.src = "./assets/seven-removebg-preview.png";
    modeBtn3.alt = "mode 3";
    modeBtn3.addEventListener("click", function () {
        GameModeBtnClick("4");
    });

    playersRow.appendChild(modeBtn1);
    playersRow.appendChild(modeBtn2);
    playersRow.appendChild(modeBtn3)
    selectionsBtn.appendChild(playersRow);
}

function GameModeBtnClick(gameModeStr) {
    gameMode = gameModeStr;
    selectionsBtn.removeChild(playersRow);
    ChangeHeader("Player One Choose:");
    rpsls();
}


function rpsls() {
    selectionsBtn.innerHTML = "";

    playersRow = document.createElement("div");
    playersRow.id = "playersRow";
    playersRow.className = "modes";

    let modeBtn1 = document.createElement("img");
    modeBtn1.className = "modeBtn";
    modeBtn1.src = "./assets/theRock.webp";
    modeBtn1.alt = "rock";
    modeBtn1.addEventListener("click", function () {
        RPSLSGameClick("Rock");
    });


    let modeBtn2 = document.createElement("img");
    modeBtn2.className = "modeBtn";
    modeBtn2.src = "./assets/spongebob.jpg";
    modeBtn2.alt = "paper";
    modeBtn2.addEventListener("click", function () {
        RPSLSGameClick("Paper");
    });

    let modeBtn3 = document.createElement("img");
    modeBtn3.className = "modeBtn";
    modeBtn3.src = "./assets/scissorhands.webp";
    modeBtn3.alt = "scissors";
    modeBtn3.addEventListener("click", function () {
        RPSLSGameClick("Scissors");
    });

    let modeBtn4 = document.createElement("img");
    modeBtn4.className = "modeBtn";
    modeBtn4.src = "./assets/gieco.jpg";
    modeBtn4.alt = "lizard";
    modeBtn4.addEventListener("click", function () {
        RPSLSGameClick("Lizard");
    });

    let modeBtn5 = document.createElement("img");
    modeBtn5.className = "modeBtn";
    modeBtn5.src = "./assets/download.jpeg";
    modeBtn5.alt = "spock";
    modeBtn5.addEventListener("click", function () {
        RPSLSGameClick("Spock");
    });


    playersRow.appendChild(modeBtn1);
    playersRow.appendChild(modeBtn2);
    playersRow.appendChild(modeBtn3);
    playersRow.appendChild(modeBtn4);
    playersRow.appendChild(modeBtn5);
    selectionsBtn.appendChild(playersRow);
}

function RPSLSGameClick(rpslsStr) {
    if (playerOneInput == "") {
        playerOneInput = rpslsStr;
        PlayerOneClick();
    } else {
        playerTwoInput = rpslsStr;
        CheckWinner();
    }
}

function PlayerOneClick() {
    if (playerAmount == "singleplayer") {
        urlCall();
    } else {
        header.removeChild(h2);
        ChangeHeader("Player 2 Choose");
    }
}

function urlCall() {
    fetch(
        "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
    )
        .then((response) => response.text())
        .then((data) => {
            playerTwoInput = data;
            CheckWinner();
        });
}

function CheckWinner(){
    console.log(playerOneInput);
    console.log(playerTwoInput);

    if((
        (playerOneInput == "Rock" && playerTwoInput == "Scissors") ||
        (playerOneInput == "Rock" && playerTwoInput == "Lizard") ||
        (playerOneInput == "Paper" && playerTwoInput == "Rock") ||
        (playerOneInput == "Paper" && playerTwoInput == "Spock") ||
        (playerOneInput == "Scissors" && playerTwoInput == "Paper") ||
        (playerOneInput == "Scissors" && playerTwoInput == "Lizard") ||
        (playerOneInput == "Lizard" && playerTwoInput == "Paper") ||
        (playerOneInput == "Lizard" && playerTwoInput == "Spock") ||
        (playerOneInput == "Spock" && playerTwoInput == "Scissors") ||
        (playerOneInput == "Spock" && playerTwoInput == "Rock")
      )){
        playerOneScore++;
      }
      else if(playerOneInput == playerTwoInput){

      }
      else{
        playerTwoScore++;
      }
     
      console.log(playerOneScore+"\n"+playerTwoScore);
      UpdateScore();
      CreateScore();
      playerOneInput = "";
      playerTwoInput = "";
      CheckGameWinner();
}

function UpdateScore(){
    switch (playerOneScore) {
        case 0:
          scoreOneImageSrc = "./assets/zero-removebg-preview.png";
          scoreOneImageAlt = "Zero";
          break;
        case 1:
          scoreOneImageSrc = "./assets/1-Number-PNG-Transparent.png";
          scoreOneImageAlt = "One";
          break;
        case 2:
          scoreOneImageSrc = "./assets/two-removebg-preview.png";
          scoreOneImageAlt = "Two";
          break;
        case 3:
          scoreOneImageSrc = "./assets/three-removebg-preview.png";
          scoreOneImageAlt = "Three";
          break;
        case 4:
          scoreOneImageSrc = "./assets/4-removebg-preview.png";
          scoreOneImageAlt = "Four";
          break;
      }
    
      switch (playerTwoScore) {
        case 0:
          scoreTwoImageSrc = "./assets/zero-removebg-preview.png";
          scoreTwoImageAlt = "Zero";
          break;
        case 1:
          scoreTwoImageSrc = "./assets/1-Number-PNG-Transparent.png";
          scoreTwoImageAlt = "One";
          break;
        case 2:
          scoreTwoImageSrc = "./assets/two-removebg-preview.png";
          scoreTwoImageAlt = "Two";
          break;
        case 3:
          scoreTwoImageSrc = "./assets/three-removebg-preview.png";
          scoreTwoImageAlt = "Three";
          break;
        case 4:
          scoreTwoImageSrc = "./assets/4-removebg-preview.png";
          scoreTwoImageAlt = "Four";
          break;
      }
}

function CreateScore() {
    score.innerHTML = "";
  
    let scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.id = "scoreBox";
  
    let scoreOneDiv = document.createElement("div");
    scoreOneDiv.className = "player-score";
    let scoreOneTxt = document.createElement("h3");
    scoreOneTxt.textContent = "Player One";
    let scoreOne = document.createElement("img");
    scoreOne.className = "score-image";
    scoreOne.src = scoreOneImageSrc;
    scoreOne.alt = scoreOneImageAlt;
  
    let scoreTwoDiv = document.createElement("div");
    scoreTwoDiv.className = "player-score";
    let scoreTwoTxt = document.createElement("h3");
    scoreTwoTxt.textContent = "Player Two";
    let scoreTwo = document.createElement("img");
    scoreTwo.className = "score-image";
    scoreTwo.src = scoreTwoImageSrc;
    scoreTwo.alt = scoreTwoImageAlt;
  
    scoreOneDiv.appendChild(scoreOneTxt);
    scoreOneDiv.appendChild(scoreOne);
    scoreTwoDiv.appendChild(scoreTwoTxt);
    scoreTwoDiv.appendChild(scoreTwo);
    scoreBox.appendChild(scoreOneDiv);
    scoreBox.appendChild(scoreTwoDiv);
    score.appendChild(scoreBox);
  }

  function CheckGameWinner(){
    if(playerOneScore == gameMode){
        header.removeChild(h2);
        selectionsBtn.removeChild(playersRow);
        playerOneScore = 0;
        playerTwoScore = 0;
        ChangeHeader("Player One Wins!");
    }else if(playerTwoScore == gameMode){
        header.removeChild(h2);
        selectionsBtn.removeChild(playersRow);
        playerOneScore = 0;
        playerTwoScore = 0;
        ChangeHeader("Player Two Wins!");

    }else{
        header.removeChild(h2);
        ChangeHeader("Player One Choose:");
    }
  }