import Phaser from "phaser";
import { MainScene } from "./v1/scene";
import CongratsScene from "./v1/game-won";
import GameOverScene from "./v1/gameOver";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1600,
  height: 480,
  scene: [MainScene, CongratsScene, GameOverScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 300 }, // Adjusted gravity for realism
      debug: false,
    },
  },
  parent: "game-container", // Replace with your HTML element id
  backgroundColor: "#D3D3D3",
};

const game = new Phaser.Game(config);
