export class UI {
    constructor() {
        this.playerScoreElement = document.getElementById('player-score');
        this.computerScoreElement = document.getElementById('computer-score');
        this.playerChoiceDisplay = document.getElementById('player-choice-display');
        this.computerChoiceDisplay = document.getElementById('computer-choice-display');
        this.resultText = document.getElementById('result-text');
    }

    updateChoices(playerChoice, computerChoice) {
        const emojiMap = {
            rock: '✊',
            paper: '✋',
            scissors: '✌️'
        };

        this.playerChoiceDisplay.textContent = emojiMap[playerChoice];
        this.computerChoiceDisplay.textContent = emojiMap[computerChoice];
    }

    updateScore(scores) {
        this.playerScoreElement.textContent = scores.player;
        this.computerScoreElement.textContent = scores.computer;
    }

    updateResult(result) {
        const resultMessages = {
            win: 'You Win! 🎉',
            lose: 'You Lose! 😢',
            draw: "It's a Draw! 🤝"
        };

        this.resultText.textContent = resultMessages[result];
        this.resultText.className = result;
    }

    resetUI() {
        this.playerScoreElement.textContent = '0';
        this.computerScoreElement.textContent = '0';
        this.playerChoiceDisplay.textContent = '?';
        this.computerChoiceDisplay.textContent = '?';
        this.resultText.textContent = 'Choose your move!';
        this.resultText.className = '';
        document.querySelectorAll('.choice').forEach(btn => btn.classList.remove('selected'));
    }
}