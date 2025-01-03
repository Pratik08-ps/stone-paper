export class Game {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.choices = ['rock', 'paper', 'scissors'];
    }

    getComputerChoice() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }

    playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        }

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (winConditions[playerChoice] === computerChoice) {
            this.playerScore++;
            return 'win';
        } else {
            this.computerScore++;
            return 'lose';
        }
    }

    getScores() {
        return {
            player: this.playerScore,
            computer: this.computerScore
        };
    }

    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
    }
}