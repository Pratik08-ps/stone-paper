import { Game } from './game.js';
import { UI } from './ui.js';
import { Animation } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const ui = new UI();
    const animation = new Animation();

    // Event listeners for player choices
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            playRound(playerChoice);
        });
    });

    // Reset button event listener
    document.getElementById('reset-button').addEventListener('click', () => {
        game.resetGame();
        ui.resetUI();
        animation.playResetAnimation();
    });

    function playRound(playerChoice) {
        // Remove previous selection styling
        document.querySelectorAll('.choice').forEach(btn => btn.classList.remove('selected'));
        
        // Add selection styling to chosen button
        document.querySelector(`[data-choice="${playerChoice}"]`).classList.add('selected');

        const computerChoice = game.getComputerChoice();
        const result = game.playRound(playerChoice, computerChoice);

        // Update UI with choices and result
        ui.updateChoices(playerChoice, computerChoice);
        ui.updateScore(game.getScores());
        ui.updateResult(result);

        // Play animations based on the result
        animation.playRoundAnimation(result);
    }
});