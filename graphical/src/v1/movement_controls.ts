import { MainScene } from "./scene";

export function confirmMonkFromLeftRiverHasReachedEdge(scene: MainScene): boolean {
    return Math.floor(scene.monkSelected!.monk.x) >= 460;
  }

  export function confirmMonkFromRightRiverHasReachedEdge(scene: MainScene): boolean {
    return Math.floor(scene.monkSelected!.monk.x) <= 1100;
  }

  export function confirmMonsterFromLeftRiverHasReachedEdge(scene: MainScene): boolean {
    return Math.floor(scene.monsterSelected!.monster.x) >= 500;
  }

  export function confirmMonsterFromRightRiverHasReachedEdge(scene: MainScene): boolean {
    return Math.floor(scene.monsterSelected!.monster.x) <= 1100;
  }

  export function confirmBoatHasMovedToOtherSide(scene: MainScene): boolean {
    const initailPosition = scene.RIVER_SIDE;
    const leftSide = 500;
    const rightSide = 1090;
    const currentBoatPosition = Math.floor(scene.boat.boat.x);
    if (initailPosition) {
      return currentBoatPosition <= leftSide;
    } else {
      return currentBoatPosition >= rightSide;
    }
  }

  export function confirmRemovedMonkIsAtAccuratePositionOnLandLeft(scene: MainScene): boolean {
    const monkPosition = Math.floor(scene.monkSelected!.monk.x);
    switch (scene.LeftRiverSideMonks.length) {
      case 1:
        return monkPosition <= 50;
      case 2:
        return monkPosition <= 100;
      case 3:
        return monkPosition <= 150;
      default:
        return false;
    }
  }

  export function confirmRemovedMonsterIsAtAccuratePositionOnLandLeft(scene: MainScene): boolean {
    const monsterPosition = Math.floor(scene.monsterSelected!.monster.x);
    switch (scene.LeftRiverSideMonsters.length) {
      case 1:
        return monsterPosition <= 200;
      case 2:
        return monsterPosition <= 250;
      case 3:
        return monsterPosition <= 300;
      default:
        return false;
    }
  }

  export function confirmRemovedMonkIsAtAccuratePositionOnLandRight(scene: MainScene): boolean {
    const monkPosition = Math.floor(scene.monkSelected!.monk.x);
    switch (scene.RightRiverSideMonks.length) {
      case 1:
        return monkPosition >= 1250;
      case 2:
        return monkPosition >= 1300;
      case 3:
        return monkPosition >= 1350;
      default:
        return false;
    }
  }

  export function confirmRemovedMonsterIsAtAccuratePositionOnLandRight(scene: MainScene): boolean {
    const monsterPosition = Math.floor(scene.monsterSelected!.monster.x);
    switch (scene.RightRiverSideMonsters.length) {
      case 1:
        return monsterPosition >= 1400;
      case 2:
        return monsterPosition >= 1450;
      case 3:
        return monsterPosition >= 1500;
      default:
        return false;
    }
  }