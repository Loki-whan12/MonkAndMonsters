import { MainScene } from "./scene";

export function enableAllControls(scene: MainScene) {
  scene.addMonkLeftSideButton.setVisible(true);
  scene.addMonkRightSideButton.setVisible(true);
  scene.addMonsterLeftSideButton.setVisible(true);
  scene.addMonsterRightSideButton.setVisible(true);
  scene.removeMonkLeftSideButton.setVisible(true);
  scene.removeMonkRightSideButton.setVisible(true);
  scene.removeMonsterLeftSideButton.setVisible(true);
  scene.removeMonsterRightSideButton.setVisible(true);
  scene.moveBoatButton.setVisible(true);
  scene.leftAddMonkhasBeenSelected = false;
  scene.leftAddMonsterhasBeenSelected = false;
  scene.rightAddMonkhasBeenSelected = false;
  scene.rightAddMonsterhasBeenSelected = false;
  scene.boatHasBeenSelected = false;
  scene.leftRemoveMonkhasBeenSelected = false;
  scene.leftRemoveMonsterhasBeenSelected = false;
  scene.rightRemoveMonkhasBeenSelected = false;
  scene.rightRemoveMonsterhasBeenSelected = false;
}

export function disableAllControls(scene: MainScene) {
  scene.addMonkLeftSideButton.setVisible(false);
  scene.addMonkRightSideButton.setVisible(false);
  scene.addMonsterLeftSideButton.setVisible(false);
  scene.addMonsterRightSideButton.setVisible(false);
  scene.removeMonkLeftSideButton.setVisible(false);
  scene.removeMonkRightSideButton.setVisible(false);
  scene.removeMonsterLeftSideButton.setVisible(false);
  scene.removeMonsterRightSideButton.setVisible(false);
  scene.moveBoatButton.setVisible(false);
}

export function handleAddMonkFromLeftRiver(scene: MainScene) {
    scene.monkSelected!.monk.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
}

export function handleAddMonsterFromLeftRiver(scene: MainScene) {
    scene.monsterSelected!.monster.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
}

export function handleAddMonkFromRightRiver(scene: MainScene) {
    scene.monkSelected!.monk.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
}

export function handleAddMonsterFromRightRiver(scene: MainScene) {
    scene.monsterSelected!.monster.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
}

export function handleBoatMoveToOtherSide(scene: MainScene) {
    scene.RIVER_SIDE = !scene.RIVER_SIDE;
    scene.BoatOccupants.forEach((occupant) => {
        occupant.setVelocity(0, 0);
    });
    if (scene.RIVER_SIDE) {
        scene.totalNumMonksOnLeftSide -= scene.monkOnBoat;
        scene.totalNumMonstersOnLeftSide -= scene.monsterOnBoat;
        scene.totalNumMonksOnRightSide = scene.RightRiverSideMonks.length + scene.monkOnBoat;
        scene.totalNumMonstersOnRightSide = scene.RightRiverSideMonsters.length + scene.monsterOnBoat;
    } else {
        scene.totalNumMonksOnRightSide -= scene.monkOnBoat;
        scene.totalNumMonstersOnRightSide -= scene.monsterOnBoat;
        scene.totalNumMonksOnLeftSide = scene.LeftRiverSideMonks.length + scene.monkOnBoat;
        scene.totalNumMonstersOnLeftSide = scene.LeftRiverSideMonsters.length + scene.monsterOnBoat;
    }
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
}

export function handleRemoveMonkFromLeft(scene: MainScene) {
    scene.monkSelected!.monk.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
    scene.checkIfGameOver();
}

export function handleRemoveMonsterFromLeft(scene: MainScene) {
    scene.monsterSelected!.monster.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
    scene.checkIfGameOver();
}

export function handleRemoveMonkFromRight(scene: MainScene) {
    scene.monkSelected!.monk.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
    scene.checkIfGameOver();
}

export function handleRemoveMonsterFromRight(scene: MainScene) {
    scene.monsterSelected!.monster.setVelocityX(0);
    enableAllControls(scene);
    scene.checkIfDeadOrAlive();
    scene.checkIfGameOver();
}

