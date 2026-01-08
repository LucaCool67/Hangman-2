const attemptsDisplay = document.getElementById("attemptsDisplay");
const highscoreDisplay = document.querySelector(".h");
const wordDisplay = document.querySelector(".word-display");
const display = document.getElementById("win-lose");
const guessInput = document.querySelector(".guess-input");
const attemptedGuesses = document.querySelector(".attemptedGuesses");

let highscore = localStorage.getItem("highscore") || 0;
let guess;
let attempts = 0;
let word;
let randomArrayNumber;
let isPlaying = false;

let previousGuesses = [

]
let correctGuesses = [

]

const words = [
  "example",
  "network",
  "browser",
  "compute",
  "library",
  "storage",
  "promise",
  "iterate",
  "unicode",
  "asyncio",
  "package",
  "version",
  "compile",
  "execute",
  "cluster",
  "session",
  "timeout",
  "digital",
  "graphic",
  "display",
  "connect",
  "request",
  "service",
  "program",
  "privacy",
  "account",
  "console",
  "encrypt",
  "decrypt",
  "message",
  "channel",
  "command",
  "process",
  "runtime",
  "include",
  "pointer",
  "boolean",
  "integer",
  "string",
  "floating",
  "decimal",
  "output",
  "keycode",
  "caption",
  "element",
  "segment",
  "chapter",
  "section",
  "article",
  "context",
  "project",
  "license",
  "support",
  "content",
  "virtual",
  "machine",
  "package",
  "install",
  "upgrade",
  "feature",
  "setting",
  "options",
  "desktop",
  "windows",
  "profile",
  "history",
  "battery",
  "payment",
  "pricing",
  "preview",
  "testing",
  "quality",
  "monitor",
  "traffic",
  "popular",
  "loading",
  "sharing",
  "picture",
  "gallery",
  "comment",
  "explore",
  "product",
  "service",
  "payment",
  "invoice",
  "receipt",
  "balance",
  "contact",
  "address",
  "country",
  "zipcode",
  "landing",
  "gateway",
  "filters",
  "creator",
  "builder",
  "updated",
  "refresh",
  "recycle",
  "restore"
];

highscoreDisplay.textContent = `Highscore: ${highscore}`;

function setHighScore(highscore){
  localStorage.setItem('highscore', highscore);
}

function submitDone(){
  if(isPlaying){

    if(word == wordDisplay.textContent){
        console.log("You have completed the game please play again");

        isPlaying = false;

        attemptsDisplay.textContent = `Your Attempts: 0`;
        wordDisplay.textContent = "_ _ _ _ _ _ _";

        if(highscore === 0 || attempts < highscore){

          highscore = attempts;
          setHighScore(highscore);

          highscore = attempts;
          highscoreDisplay.textContent = `Attempts Highscore: ${highscore}`;
          attempts = 0;

        }
        else{

          attempts = 0;

        }
        
    }
    else{
      console.log("You have not completed it yet")
    }

  }
  else{
    console.log("You need to be playing first")
  }
}

function submitGuess(){

  if(isPlaying){

    guess = String(guessInput.value.charAt(0));
    guess.toLowerCase;

    guessInput.value = '';

    if(correctGuesses.includes(guess) || previousGuesses.includes(guess)){
      console.log("You already guessed that letter!");
      guessInput.value = '';
      return;
    }

    if(word.includes(guess)){
      

      console.log(`Yes ${guess} is in the word`);

      attempts++;
      attemptsDisplay.textContent = `Your Attempts: ${attempts}`;

      correctGuesses.push(guess);

      let display = '';

      for(let i = 0; i < word.length; i++){

        if(correctGuesses.includes(word[i])){
          
          display += word[i];

        }
        else{

          display += ' _ ';

        }
      }

      wordDisplay.textContent = display;

    }
    else{

      console.log("That letter isnt in the word");

      previousGuesses.push(guess);
      attemptedGuesses.textContent = previousGuesses.join(' ');
      attempts++;
      attemptsDisplay.textContent = `Your Attempts: ${attempts}`;
    }

  }

  else{
    console.log("Please Click Play to Play");
  }
    
}

function play(){

  if(!isPlaying){

    isPlaying = true;

    attemptsDisplay.textContent = `Your Attempts: ${attempts}`;
    wordDisplay.textContent = "_ _ _ _ _ _ _";

    randomArrayNumber = Math.floor(Math.random() * 100);
  
    word = words[randomArrayNumber];
    console.log(word);
  }
  else{
    console.log("You are already playing!");
  }

}
