export class Animation {
    playRoundAnimation(result) {
        const playerDisplay = document.getElementById('player-choice-display');
        const computerDisplay = document.getElementById('computer-choice-display');
        const resultText = document.getElementById('result-text');

        // Remove existing animation classes
        playerDisplay.classList.remove('bounce', 'shake', 'pulse');
        computerDisplay.classList.remove('bounce', 'shake', 'pulse');
        resultText.classList.remove('bounce', 'shake', 'pulse');

        // Add new animations based on result
        switch(result) {
            case 'win':
                playerDisplay.classList.add('bounce');
                computerDisplay.classList.add('shake');
                resultText.classList.add('pulse');
                break;
            case 'lose':
                playerDisplay.classList.add('shake');
                computerDisplay.classList.add('bounce');
                resultText.classList.add('pulse');
                break;
            case 'draw':
                playerDisplay.classList.add('pulse');
                computerDisplay.classList.add('pulse');
                resultText.classList.add('bounce');
                break;
        }
    }

    playResetAnimation() {
        const gameContainer = document.querySelector('.game-container');
        gameContainer.classList.remove('pulse');
        void gameContainer.offsetWidth; // Trigger reflow
        gameContainer.classList.add('pulse');
    }
}