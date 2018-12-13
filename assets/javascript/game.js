var words = ["jon", "cersei", "tyrion", "sansa", "missandei", "lyanna"]

var randomWord = "";
var wordsLetters = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//GAME START

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordsLetters = randomWord.split("");
    blanks = wordsLetters.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
    console.log(randomWord);
    console.log(wordsLetters)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

var words = ["jon", "cersei", "tyrion", "sansa", "missandei", "lyanna"]

// swap of the images
function imgswap() {

    if (randomWord === words[0]) {
        document.getElementById("image").src = "./assets/images/jon.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names ').innerHTML += 'Jon Snow';
    } else if (randomWord === words[1]) {
        document.getElementById("image").src = "./assets/images/cersei.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names').innerHTML += 'Cersei Lannister';
    } else if (randomWord === words[2]) {
        document.getElementById("image").src = "./assets/images/tyrion.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names').innerHTML += 'Tyrion Lannister';
    } else if (randomWord === words[3]) {
        document.getElementById("image").src = "./assets/images/sansa.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names').innerHTML += 'Sansa Stark';
    } else if (randomWord === words[4]) {
        document.getElementById("image").src = "./assets/images/missandei.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names').innerHTML += 'Missandei';
    } else if (randomWord === words[5]) {
        document.getElementById("image").src = "./assets/images/lyanna.gif";
        document.getElementById("hiddenH5").style.visibility = "hidden";
        // document.getElementById('names').innerHTML += 'Lyanna Mormont';
    };
};

//RESET 

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    } else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//FINAL COMPLETE FUNCTION

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //WON
    if (wordsLetters.toString() == blanksAndCorrect.toString()) {
        wins++;
        imgswap()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //LOST
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/tryagain.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


//call start game function
Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}