// CongratsScene.ts

import Phaser from 'phaser';

export default class CongratsScene extends Phaser.Scene {
    constructor() {
        super('CongratsScene'); // Unique scene key
    }

    create() {
        // Display congratulatory message or screen elements
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.add.text(centerX, centerY - 50, 'Congratulations, You Won!', {
            fontSize: '32px',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Add a button to return to the main game
        const playAgainButton = this.add.text(centerX, centerY + 50, 'Play Again', {
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#347d39',
            padding: {
                x: 10,
                y: 5,
            },
        }).setOrigin(0.5).setInteractive();

        playAgainButton.on('pointerdown', () => {
            // Transition back to the main game scene
            this.scene.stop('MainScene');
            this.scene.start('MainScene');
        });
    }
}
