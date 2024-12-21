function getkey(event) {

    const playerpressed = event.key;
    if (playerpressed == 'Escape') {
        gameOver()
    }


    const currentAlphabet = getElementById('current-alphabet')
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerpressed, expectedAlphabet);
    if (playerpressed == expectedAlphabet) {
        console.log('you get a score');
        //update the score
        const currentScore = getElementTextValueById('current-score')

        const newScore = (currentScore + 1);
        setElementTextById('current-score', newScore);




        //update to new game
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you lost a life');
        removeBackgroundColor(expectedAlphabet);
        continueGame();
        const currentLife = getElementTextValueById('life-score')
        // update life
        const newLife = currentLife - 1;
        setElementTextById('life-score', newLife);
        if (newLife === 0) {
            gameOver();

        }



    }



}
document.addEventListener('keyup', getkey)



function continueGame() {
    const alphabet = getARandomAlphabet();
    const curretAlphabet = document.getElementById('current-alphabet');
    curretAlphabet.innerHTML = alphabet;
    setBackgroundColor(alphabet)


}

function play() {
    hideElementById('home-srcen')
    showElementById('game-phase')
    hideElementById('score-phase')
    setElementTextById('current-score', 0);
    setElementTextById('life-score', 5);
    const currentAlphabet = getElementById('current-alphabet');
    const currentText = currentAlphabet.toLocaleLowerCase();
    removeBackgroundColor(currentText);
    continueGame();

}

function gameOver() {
    hideElementById('game-phase');
    showElementById('score-phase');
    const lastScore = getElementTextValueById('current-score');
    console.log('last score', lastScore);
    setElementTextById('final-score', lastScore)
    const currentAlphabet = getElementById('current-alphabet');
    const currentText = currentAlphabet.toLocaleLowerCase();
    console.log(currentText);

    removeBackgroundColor(currentText);





}


