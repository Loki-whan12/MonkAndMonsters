import Phaser from "phaser";
import { MainScene } from "./scene";

export function createButtons(scene: MainScene) {
  const rightBound = 1350;
  const leftBound = 120;
  // Left side buttons for adding monks or monsters
  scene.addMonkLeftSideButton = scene.add.text(leftBound, 50, "Add Monk (Left)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.addMonkToLeftSide, scene);

  scene.addMonsterLeftSideButton = scene.add.text(leftBound, 100, "Add Monster (Left)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.addMonsterToLeftSide, scene);

  // Right side buttons for adding monks or monsters
  scene.addMonkRightSideButton = scene.add.text(rightBound, 50, "Add Monk (Right)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.addMonkToRightSide, scene);

  scene.addMonsterRightSideButton = scene.add.text(rightBound, 100, "Add Monster (Right)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.addMonsterToRightSide, scene);

  // Left side buttons for removing monks or monsters
  scene.removeMonkLeftSideButton = scene.add.text(leftBound, 150, "Remove Monk (Left)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.removeMonkFromLeftSide, scene);

  scene.removeMonsterLeftSideButton = scene.add.text(leftBound, 200, "Remove Monster (Left)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.removeMonsterFromLeftSide, scene);

  // Right side buttons for removing monks or monsters
  scene.removeMonkRightSideButton = scene.add.text(rightBound, 150, "Remove Monk (Right)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.removeMonkFromRightSide, scene);

  scene.removeMonsterRightSideButton = scene.add.text(rightBound, 200, "Remove Monster (Right)", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", scene.removeMonsterFromRightSide, scene);

  // Middle button to move the boat
  scene.moveBoatButton = scene.add.text(750, 50, "Move Boat", {
    font: "16px Arial",
    color: "#ffffff"
  }).setInteractive().on("pointerdown", () => scene.moveBoatOnWater(), scene);
}
