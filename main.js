// letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get array from letters
let lettersArray = Array.from(letters);

// Select letters container
let letterContainer = document.querySelector(".letters");

// Generate letters
lettersArray.forEach(letter =>{

    // Creat span
    let span = document.createElement("span");

    // Creat letter text node
    let theLetter = document.createTextNode(letter);

    // Append letter into span
    span.appendChild(theLetter);

    // Add class to span
    span.className = 'letter-box';

    // Append span to letters container
    letterContainer.appendChild(span);
});

// Objects of words and categories
// const words = {
//     programming : ["php", "javascript", "java", "mysql", "python" ],
//     movies : ["Prestigo", "inception", "parasite", "interstellar", "whiplash", "memento"],
//     people : ["Albert Einstein", "Hitchcock", "Alexander", "cleopatra", "Mahatma Ghandi"],
//     countries : ["Syria", "Iraq", "Ymen", "Egypt", "Bahrain", "Qatar"]
// }

// Getting Data from JSON file
fetch('words.json?' + new Date().getTime())
            .then(response => response.json())
            .then(words => {
                // Use the JSON data

// Get random property
// 1- get all objects with key number from words object as in the below method
let allKeys = Object.keys(words);

// 2- choose random key number from all props in allKeys
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// 3- get random prop name from random prop number ubove
let randomPropName = allKeys[randomPropNumber];

// 3- get the array form random category name
let randomPropValue = words[randomPropName];

// 4- then get random number out of the random array
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// 5- get random word value out array cateogry uesing the random value number
let randomValueValue = randomPropValue[randomValueNumber];

// Display name of the random chosen category on game area
document.querySelector(".game-info .category span").innerHTML = randomPropName;  


/// Working on letter guess area
// Select letter guess container element from html
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert chosen word to array
let letterAndSpace = Array.from(randomValueValue);

// loop on each letter of the chosen word array and create the following
letterAndSpace.forEach(letter => {
    // 1- Creat span to put the letters
    let emptySpan = document.createElement("span");
    // 2- if the letter space is space
    if(letter === " "){
        emptySpan.className = "with-space";
    }
    // 3- Append span in the letters guess contianer
    lettersGuessContainer.appendChild(emptySpan);
});


// Select the guess span
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set wrong attampts
let wrongAttampts = 0;

// Select the draw element
let theDraw = document.querySelector(".hangman-draw");

/// Handle clicking on letters buttons
document.addEventListener("click", (e)=>{

// Set the chosen status 
let theStatus = false;

    // 1- Turn off the click event on cliced letters only
    if(e.target.className === "letter-box"){
        e.target.classList.add("clicked");
        // 2- Get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        // 3- get the chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());
        // 4- loop on each letter on word to match the clicked letter
        theChosenWord.forEach((wordLetter, wordIndex) =>{
            // if clicked letter = chosen word letter
            if(theClickedLetter == wordLetter){

                // set the status to correct
                theStatus = true;

                // loop on each guess span to check if the word index = span index then print on html page
                guessSpans.forEach((span, spanIndex) =>{
                    if(wordIndex === spanIndex){
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });
        // Outsid loop
    

        // If letter is wrong
        if(theStatus !== true){
            // Increase the wrong attampts
            wrongAttampts++;
            // Add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttampts}`);

            // Play fail sound
            document.getElementById("fail").play();

            // check if wrong attampt = 8
            if(wrongAttampts === 8){
                // Add method end game
                endGame();
                // Stop clicking event by adding class
                letterContainer.classList.add("finished");
            }
        }else{
            // Play success sound
            document.getElementById("success").play();
            
            // Check if all letters are correctly guessed
            let allCorrect = Array.from(guessSpans).every(span => span.innerHTML !== "");
            // if all letter correct
            if (allCorrect) {
                winGame();
                letterContainer.classList.add("finished");
            }

        }
    }
});

// endGame function 

function endGame(){
    // Creat popup div element
    let div = document.createElement("div");
    // Creat text to add into the div
    let divText = document.createTextNode(`Game Over, The word is ${randomValueValue}`);
    // Put the text in the div
    div.appendChild(divText);
    // Add class in on the text
    div.className = "popup";
    // Append div to the body
    document.body.appendChild(div);
}
function winGame(){
    // Creat popup div element
    let div = document.createElement("div");
    // Creat text to add into the div
    let divText = document.createTextNode(`You Win, wrong attampts ${wrongAttampts}`);
    // Put the text in the div
    div.appendChild(divText);
    // Add class in on the text
    div.className = "popup";
    // Append div to the body
    document.body.appendChild(div);
}
})
.catch(error => console.error('Error loading JSON:', error));