// initializeProps.ts
import { MainScene } from "./scene";

export function initializeProps(scene: MainScene) {
  scene.leftAddMonkhasBeenSelected = false;
  scene.leftAddMonsterhasBeenSelected = false;
  scene.rightAddMonkhasBeenSelected = false;
  scene.rightAddMonsterhasBeenSelected = false;
  scene.boatHasBeenSelected = false;
  scene.leftRemoveMonkhasBeenSelected = false;
  scene.leftRemoveMonsterhasBeenSelected = false;
  scene.rightRemoveMonkhasBeenSelected = false;
  scene.rightRemoveMonsterhasBeenSelected = false;
  scene.isDead = false;
  scene.hasFinished = true;
  scene.totalNumMonksOnLeftSide = scene.LeftRiverSideMonks.length + scene.monkOnBoat;
  scene.totalNumMonksOnRightSide = scene.RightRiverSideMonks.length;
  scene.totalNumMonstersOnLeftSide = scene.LeftRiverSideMonsters.length + scene.monsterOnBoat;
  scene.totalNumMonstersOnRightSide = scene.RightRiverSideMonsters.length;
  scene.RIVER_SIDE = false;
  scene.BoatOccupants = [];
}
