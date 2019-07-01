// Variables

const keyBoard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;


// event listener to start game

const resetBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

resetBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// phrases array

 const phrases = [
    "may the force be with you",
    "would you kindly",
    "that we do in life echoes in eternity",
    "a man chooses a slave obeys",
    "do or do not there is no try"
 ];

 // get random phrase 

function getRandomPhraseAsArray(phrases){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomChar = randomPhrase.split('');
    console.log(randomChar);
    return randomChar; 
};

 getRandomPhraseAsArray(phrases);




// set the game display 

function addPhraseToDisplay(phraseArray){
   let ul = document.querySelector('#phrase ul');
   for (let i = 0; i < phraseArray.length; i++) {
    let letter = document.createElement('li');
    letter.textContent = phraseArray[i];
    ul.appendChild(letter);
   }
};









