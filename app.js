// Variables

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const resetBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');

let missed = 0;


// event listener to start game



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

 // Random Phrase function
const getRandomPhraseAsArray = (arr) => {
    const randomSelection = arr[Math.floor(Math.random() * arr.length)];
    const  randoPhase = randomSelection.split('');
    console.log(randoPhase);
    return randoPhase;
};

// set game display
const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const Item = document.createElement('li');
        Item.textContent = arr[i];
        const ul = phrase.firstElementChild;
        ul.appendChild(Item);
        if (arr[i] !== ' ') {
            Item.className = 'letter';
        } else {
            Item.style.width = '35px';
        }
    }
};



const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);





