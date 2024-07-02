// GameOverScene.ts

import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene'); // Unique scene key
    }

    create() {
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        // Display game over message
        this.add.text(centerX, centerY - 50, 'Game Over!', {
            fontSize: '32px',
            color: '#ffffff',
        }).setOrigin(0.5);

        // Add a button to retry the game
        const retryButton = this.add.text(centerX, centerY + 50, 'Retry', {
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#d32f2f',
            padding: {
                x: 10,
                y: 5,
            },
        }).setOrigin(0.5).setInteractive();

        retryButton.on('pointerdown', () => {
            // Restart the MainScene (Main game)
            this.scene.stop('MainScene'); // Stop the scene if it's running
            this.scene.start('MainScene'); // Start the scene fresh
        });

        // Add a button to return to main menu
        const mainMenuButton = this.add.text(centerX, centerY + 120, 'Main Menu', {
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#303f9f',
            padding: {
                x: 10,
                y: 5,
            },
        }).setOrigin(0.5).setInteractive();

        mainMenuButton.on('pointerdown', () => {
            // Go back to main menu scene or any other scene
            this.scene.stop('MainScene'); // Stop the main game scene if it's running
            this.scene.start('MainScene'); // Example: Start main menu scene
        });
    }
}
