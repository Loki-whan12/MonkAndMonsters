import Phaser from "phaser";
import { Monk } from "./monk";
import { Monster } from "./monster";
import { Boat } from "./boat";

export interface MainSceneConfig {
  platforms: Phaser.Physics.Arcade.StaticGroup;
  monks: Monk[];
  monsters: Monster[];
  LeftRiverSideMonks: Monk[];
  LeftRiverSideMonsters: Monster[];
  RightRiverSideMonks: Monk[];
  RightRiverSideMonsters: Monster[];
  BoatOccupants: (Monk | Monster)[];
  monkOnBoat: number;
  monsterOnBoat: number;
  RIVER_SIDE: boolean;
  boat: Boat;
  addMonkLeftSideButton: Phaser.GameObjects.Text;
  addMonkRightSideButton: Phaser.GameObjects.Text;
  addMonsterLeftSideButton: Phaser.GameObjects.Text;
  addMonsterRightSideButton: Phaser.GameObjects.Text;
  removeMonkLeftSideButton: Phaser.GameObjects.Text;
  removeMonkRightSideButton: Phaser.GameObjects.Text;
  removeMonsterLeftSideButton: Phaser.GameObjects.Text;
  removeMonsterRightSideButton: Phaser.GameObjects.Text;
  moveBoatButton: Phaser.GameObjects.Text;
  monkSelected: Monk | null;
  monsterSelected: Monster | null;
  leftAddMonkhasBeenSelected: boolean;
  leftAddMonsterhasBeenSelected: boolean;
  rightAddMonkhasBeenSelected: boolean;
  rightAddMonsterhasBeenSelected: boolean;
  boatHasBeenSelected: boolean;
  leftRemoveMonkhasBeenSelected: boolean;
  leftRemoveMonsterhasBeenSelected: boolean;
  rightRemoveMonkhasBeenSelected: boolean;
  rightRemoveMonsterhasBeenSelected: boolean;
  isDead: boolean;
  hasFinished: boolean;
  totalNumMonksOnLeftSide: number;
  totalNumMonstersOnLeftSide: number;
  totalNumMonksOnRightSide: number;
  totalNumMonstersOnRightSide: number;
  totalNumberOfOccupantsOnBoat: number;
}

export const initialMainSceneConfig: Partial<MainSceneConfig> = {
  monks: [],
  monsters: [],
  LeftRiverSideMonks: [],
  LeftRiverSideMonsters: [],
  RightRiverSideMonks: [],
  RightRiverSideMonsters: [],
  BoatOccupants: [],
  monkOnBoat: 0,
  monsterOnBoat: 0,
  RIVER_SIDE: false,
  totalNumMonksOnLeftSide: 0,
  totalNumMonstersOnLeftSide: 0,
  totalNumMonksOnRightSide: 0,
  totalNumMonstersOnRightSide: 0,
  totalNumberOfOccupantsOnBoat: 0,
  leftAddMonkhasBeenSelected: false,
  leftAddMonsterhasBeenSelected: false,
  rightAddMonkhasBeenSelected: false,
  rightAddMonsterhasBeenSelected: false,
  boatHasBeenSelected: false,
  leftRemoveMonkhasBeenSelected: false,
  leftRemoveMonsterhasBeenSelected: false,
  rightRemoveMonkhasBeenSelected: false,
  rightRemoveMonsterhasBeenSelected: false,
  isDead: false,
  hasFinished: false,
};
