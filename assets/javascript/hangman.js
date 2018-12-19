function incrementWinCounter() {

}

function guessLetter(letter) {

}

/**
 *
 * @param {string} guessedWord
 */
function drawGuessedWord(guessedWord) {
    document.getElementById('guessed-word').innerHTML = guessedWord;
}

/**
 * Makes underscores given a word.
 * @param {string} word
 * @returns {string}
 */
function generateUnderscores(word) {
    var underscores = "";

    for (var i = 0; i < word.length; i++) {
        underscores += '_';
    }
    return underscores;
}

/**
 * @returns {string}
 */
function getRandomWord() {
    var words = ['Ella Fitzgerald','Billie Holiday', 'Blah'];
    var randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}

/**
 * Initialize the app.
 */
function init() {
    // Get a random word
    // Generate and show underscores for it, using the number of letters.
    // Show number of guesses remaining.
    // Show letters already guessed (empty at first)

    var randomWord = getRandomWord();
    drawGuessedWord(generateUnderscores(randomWord));
}

// TODO: Run init when ready event fired.
document.addEventListener('DOMContentLoaded', function(event) {
    init();
});