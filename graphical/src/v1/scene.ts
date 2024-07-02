import Phaser from "phaser";
import { Monk } from "./monk";
import { Monster } from "./monster";
import { Boat } from "./boat";
import { createBackgrounds } from "./background";
import { createButtons } from "./button";
import { initializeMonksAndMonsters } from "./initailizeGameEntities";
import * as Controls  from "./control";
import { MainSceneConfig, initialMainSceneConfig } from "./config";
import { initializeProps } from "./initializeProps";
import * as movementControl from "./movement_controls";

export class MainScene extends Phaser.Scene implements MainSceneConfig {
  public platforms!: Phaser.Physics.Arcade.StaticGroup;
  public monks: Monk[] = [];
  public monsters: Monster[] = [];
  public LeftRiverSideMonks: Monk[] = [];
  public LeftRiverSideMonsters: Monster[] = [];
  public RightRiverSideMonks: Monk[] = [];
  public RightRiverSideMonsters: Monster[] = [];
  public BoatOccupants: (Monk | Monster)[] = [];
  public monkOnBoat: number = 0;
  public monsterOnBoat: number = 0;
  public RIVER_SIDE: boolean = false;
  public boat!: Boat;
  public addMonkLeftSideButton!: Phaser.GameObjects.Text;
  public addMonkRightSideButton!: Phaser.GameObjects.Text;
  public addMonsterLeftSideButton!: Phaser.GameObjects.Text;
  public addMonsterRightSideButton!: Phaser.GameObjects.Text;
  public removeMonkLeftSideButton!: Phaser.GameObjects.Text;
  public removeMonkRightSideButton!: Phaser.GameObjects.Text;
  public removeMonsterLeftSideButton!: Phaser.GameObjects.Text;
  public removeMonsterRightSideButton!: Phaser.GameObjects.Text;
  public moveBoatButton!: Phaser.GameObjects.Text;
  public monkSelected!: Monk | null;
  public monsterSelected!: Monster | null;
  public leftAddMonkhasBeenSelected: boolean = false;
  public leftAddMonsterhasBeenSelected: boolean = false;
  public rightAddMonkhasBeenSelected: boolean = false;
  public rightAddMonsterhasBeenSelected: boolean = false;
  public boatHasBeenSelected: boolean = false;
  public leftRemoveMonkhasBeenSelected: boolean = false;
  public leftRemoveMonsterhasBeenSelected: boolean = false;
  public rightRemoveMonkhasBeenSelected: boolean = false;
  public rightRemoveMonsterhasBeenSelected: boolean = false;
  public isDead: boolean = false;
  public hasFinished: boolean = false;
  public totalNumMonksOnLeftSide: number = 0;
  public totalNumMonstersOnLeftSide: number = 0;
  public totalNumMonksOnRightSide: number = 0;
  public totalNumMonstersOnRightSide: number = 0;
  public totalNumberOfOccupantsOnBoat: number = 0;



  constructor() {
    super({ key: "MainScene" });
    Object.assign(this, initialMainSceneConfig);
  }

  preload() {
    // Load images and sprites
    this.load.image("forest", "assets/forest.jpg");
    this.load.image("river", "assets/river.jpg");
    this.load.image("sky", "assets/sky.png");
    this.load.image("boat", "assets/boat.png");
    this.load.image("platform", "assets/platform.png");
    this.load.spritesheet("monk", "assets/monk.png", {
      frameWidth: 60,
      frameHeight: 60,
      spacing: 3,
    });
    this.load.spritesheet("monster", "assets/monster.png", {
      frameWidth: 60,
      frameHeight: 60,
      spacing: 3,
    });
  }

  create() {
    this.platforms = createBackgrounds(this);
    initializeMonksAndMonsters(this);
    createButtons(this);
    this.createBoat();
    initializeProps(this);
  }
  

  private createBoat() {
    // Create a new boat instance
    this.boat = new Boat(this, 500, 300, this.platforms);
  }

  
  public addMonkToLeftSide() {
    if (this.RIVER_SIDE) {
      alert(
        "Sorry cannot add Monk!\nThe boat is not at the left side of the river\nPlease move the boat to the left side of the river first."
      );
      return;
    }

    if (this.BoatOccupants.length >= 2) {
      alert(
        "Sorry cannot add Monk!\nThe boat is full\nOnly two occupants are allowed on the boat."
      );
      return;
    }
    if (this.LeftRiverSideMonks.length > 0) {
      Controls.disableAllControls(this);
      this.leftAddMonkhasBeenSelected = true;
      const monk = this.LeftRiverSideMonks.pop();
      this.monkSelected = monk!;
      this.BoatOccupants.push(monk!);
      monk?.monk.setVelocityX(160);
      this.monkOnBoat++;
      console.log(this.monkSelected.monk);
    } else {
      alert(
        "Sorry cannot add monk\nThere are no Monks on the left side of the river!"
      );
    }
  }

  public addMonsterToLeftSide() {
    if (this.RIVER_SIDE) {
      alert(
        "Sorry cannot add Monster!\nThe boat is not at the left side of the river\nPlease move the boat to the left side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length >= 2) {
      alert(
        "Sorry cannot add Monster!\nThe boat is full\nOnly two occupants are allowed on the boat."
      );
      return;
    }
    if (this.LeftRiverSideMonsters.length > 0) {
      Controls.disableAllControls(this);
      this.leftAddMonsterhasBeenSelected = true;
      const monster = this.LeftRiverSideMonsters.pop();
      this.monsterSelected = monster!;
      this.monsterSelected.monster.setVelocityX(160);
      this.BoatOccupants.push(monster!);
      this.monsterOnBoat++;
    } else {
      alert(
        "Sorry cannot add Monster\nThere are no Monsters on the left side of the river!"
      );
    }
  }

  public addMonkToRightSide() {
    if (!this.RIVER_SIDE) {
      alert(
        "Sorry cannot add Monk!\nThe boat is not at the right side of the river\nPlease move the boat to the right side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length >= 2) {
      alert(
        "Sorry cannot add Monk!\nThe boat is full\nOnly two occupants are allowed on the boat."
      );
      return;
    }
    if (this.RightRiverSideMonks.length > 0) {
      Controls.disableAllControls(this);
      this.rightAddMonkhasBeenSelected = true;
      const monk = this.RightRiverSideMonks.pop();
      this.monkSelected = monk!;
      this.monkSelected.monk.setVelocityX(-160);
      this.BoatOccupants.push(monk!);
      this.monkOnBoat++;
    } else {
      alert(
        "Sorry cannot add Monk\nThere are no Monks on the right side of the river!"
      );
    }
  }

  public addMonsterToRightSide() {
    if (!this.RIVER_SIDE) {
      alert(
        "Sorry cannot add Monster!\nThe boat is not at the right side of the river\nPlease move the boat to the right side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length >= 2) {
      alert(
        "Sorry cannot add Monster!\nThe boat is full\nOnly two occupants are allowed on the boat."
      );
      return;
    }
    if (this.RightRiverSideMonsters.length > 0) {
      Controls.disableAllControls(this);
      this.rightAddMonsterhasBeenSelected = true;
      const monster = this.RightRiverSideMonsters.pop();
      this.monsterSelected = monster!;
      this.monsterSelected.monster.setVelocityX(-160);
      this.BoatOccupants.push(monster!);
      this.monsterOnBoat++;
    } else {
      alert(
        "Sorry cannot add Monster\nThere are no Monster on the left of the river!"
      );
    }
  }

  public removeMonkFromLeftSide() {
    // Ensure the boat is on the left side and has occupants
    if (this.RIVER_SIDE) {
      alert(
        "Sorry cannot remove Monk!\nThe boat is not at the left side of the river\nPlease move the boat to the left side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length === 0) {
      alert("Sorry cannot remove Monk!\nThe boat is empty.");
      return;
    }
    // Find the index of the first Monk in the BoatOccupants array
    const monkIndex = this.BoatOccupants.findIndex(
      (occupant) => occupant instanceof Monk
    );

    if (monkIndex !== -1) {
      this.leftRemoveMonkhasBeenSelected = true;
      Controls.disableAllControls(this);
      // Remove the Monk from the BoatOccupants array
      const [occupant] = this.BoatOccupants.splice(monkIndex, 1);
      this.monkSelected = occupant as Monk;
      // Add the Monk back to the left river side
      this.LeftRiverSideMonks.push(occupant as Monk);
      this.monkOnBoat--;
      this.monkSelected.monk.setVelocity(-160, -500);
      console.log(this.monkSelected.monk);
    } else {
      alert("Sorry, No monks to remove on the boat!");
    }
  }

  checkIfGameOver() {
    if ((this.RightRiverSideMonsters.length === 3) && (this.RightRiverSideMonks.length === 3)) {
        this.hasFinished = true;
        this.scene.stop('MainScene');
        this.scene.launch('CongratsScene');
    }
}

  checkIfDeadOrAlive() {
    const checkDeathCondition = (monsters: number, monks: number, side: string) => {
      if (monsters > monks && monks !== 0) {
        this.isDead = true;
        alert(
          `You are dead!!!\nYou have more Monsters than Monks on the ${side} side of the river...\n monster [${monsters}] monk [${monks}]`
        );
        Controls.disableAllControls(this);
        this.restartGame()
        this.scene.stop('MainScene');
        this.scene.start('GameOverScene');
      }
    };
  
    checkDeathCondition(this.totalNumMonstersOnRightSide, this.totalNumMonksOnRightSide, 'right');
    checkDeathCondition(this.totalNumMonstersOnLeftSide, this.totalNumMonksOnLeftSide, 'left');
  }
  restartGame() {
    this.LeftRiverSideMonsters = [];
  this.LeftRiverSideMonks = [];
  this.RightRiverSideMonks = [];
  this.RightRiverSideMonsters = [];
  this.monkSelected = null;
  this.monsterSelected = null;
  this.BoatOccupants = [];
  this.monkOnBoat = 0;
  this.monkOnBoat = 0;
  this.totalNumberOfOccupantsOnBoat = 0;
  this.RIVER_SIDE = false;
  this.totalNumMonksOnLeftSide = this.LeftRiverSideMonks.length + this.monkOnBoat;
  this.totalNumMonksOnRightSide = this.RightRiverSideMonks.length;
  this.totalNumMonstersOnLeftSide = this.LeftRiverSideMonsters.length + this.monsterOnBoat;
  this.totalNumMonstersOnRightSide = this.RightRiverSideMonsters.length;
  }
  

  public removeMonsterFromLeftSide() {
    // Ensure the boat is on the left side and has occupants
    if (this.RIVER_SIDE) {
      alert(
        "Sorry cannot remove Monster!\nThe boat is not at the left side of the river\nPlease move the boat to the left side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length === 0) {
      alert("Sorry cannot remove Monster!\nThe boat is empty.");
      return;
    }
    // Find the index of the first Monster in the BoatOccupants array
    const monsterIndex = this.BoatOccupants.findIndex(
      (occupant) => occupant instanceof Monster
    );

    if (monsterIndex !== -1) {
      this.leftRemoveMonsterhasBeenSelected = true;
      Controls.disableAllControls(this);
      // Remove the Monster from the BoatOccupants array
      const [occupant] = this.BoatOccupants.splice(monsterIndex, 1);
      this.monsterSelected = occupant as Monster;
      // Add the Monster back to the left river side
      this.LeftRiverSideMonsters.push(occupant as Monster);
      this.monsterOnBoat--;
      this.monsterSelected.monster.setVelocity(-160, -500);
    } else {
      alert("Sorry, No monster to remove on the boat!");
    }
  }

  public removeMonkFromRightSide() {
    if (!this.RIVER_SIDE) {
      alert(
        "Sorry cannot remove Monk!\nThe boat is not at the right side of the river\nPlease move the boat to the right side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length === 0) {
      alert("Sorry cannot remove Monk!\nThe boat is empty.");
      return;
    }
    // Find the index of the first Monk in the BoatOccupants array
    const monkIndex = this.BoatOccupants.findIndex(
      (occupant) => occupant instanceof Monk
    );

    if (monkIndex !== -1) {
      this.rightRemoveMonkhasBeenSelected = true;
      Controls.disableAllControls(this);
      // Remove the Monk from the BoatOccupants array
      const [occupant] = this.BoatOccupants.splice(monkIndex, 1);
      this.monkSelected = occupant as Monk;
      // Add the Monk back to the right river side
      this.RightRiverSideMonks.push(occupant as Monk);
      this.monkOnBoat--; // Debug statement
      this.monkSelected.monk.setVelocity(160, -500);
    } else {
      alert("Sorry, No monk to remove on the boat!");
    }
  }

  public removeMonsterFromRightSide() {
    if (!this.RIVER_SIDE) {
      alert(
        "Sorry cannot remove Monster!\nThe boat is not at the right side of the river\nPlease move the boat to the right side of the river first."
      );
      return;
    }
    if (this.BoatOccupants.length === 0) {
      alert("Sorry cannot remove Monster!\nThe boat is empty.");
      return;
    }

    // Find the index of the first Monster in the BoatOccupants array
    const monsterIndex = this.BoatOccupants.findIndex(
      (occupant) => occupant instanceof Monster
    );

    if (monsterIndex !== -1) {
      this.rightRemoveMonsterhasBeenSelected = true;
      Controls.disableAllControls(this);
      // Remove the Monster from the BoatOccupants array
      const [occupant] = this.BoatOccupants.splice(monsterIndex, 1);
      this.monsterSelected = occupant as Monster;
      // Add the Monster back to the left river side
      this.RightRiverSideMonsters.push(occupant as Monster);
      this.monsterOnBoat--;
      this.monsterSelected.monster.setVelocity(160, -500);
    } else {
      alert("Sorry, No monster to remove on the boat!");
    }
  }

  public moveBoatOnWater() {
    if (this.BoatOccupants.length === 0) {
      alert("Cannot move boat...\nThe boat is empty!");
      return;
    }
    Controls.disableAllControls(this);
    this.boatHasBeenSelected = true;
    console.log("moving boat....");
    const velocityX = this.RIVER_SIDE ? -160 : 160;
    this.boat.boat.setVelocityX(velocityX);
    this.BoatOccupants.forEach((occupant) => {
      occupant.setVelocity(velocityX, 0);
    });
  }

  update() {
    if (this.leftAddMonkhasBeenSelected && movementControl.confirmMonkFromLeftRiverHasReachedEdge(this)) {
        Controls.handleAddMonkFromLeftRiver(this);
    } else if (this.leftAddMonsterhasBeenSelected && movementControl.confirmMonsterFromLeftRiverHasReachedEdge(this)) {
        Controls.handleAddMonsterFromLeftRiver(this);
    } else if (this.rightAddMonkhasBeenSelected && movementControl.confirmMonkFromRightRiverHasReachedEdge(this)) {
        Controls.handleAddMonkFromRightRiver(this);
    } else if (this.rightAddMonsterhasBeenSelected && movementControl.confirmMonsterFromRightRiverHasReachedEdge(this)) {
        Controls.handleAddMonsterFromRightRiver(this);
    } else if (this.boatHasBeenSelected && movementControl.confirmBoatHasMovedToOtherSide(this)) {
        Controls.handleBoatMoveToOtherSide(this);
    } else if (this.leftRemoveMonkhasBeenSelected && movementControl.confirmRemovedMonkIsAtAccuratePositionOnLandLeft(this)) {
        Controls.handleRemoveMonkFromLeft(this);
    } else if (this.leftRemoveMonsterhasBeenSelected && movementControl.confirmRemovedMonsterIsAtAccuratePositionOnLandLeft(this)) {
        Controls.handleRemoveMonsterFromLeft(this);
    } else if (this.rightRemoveMonkhasBeenSelected && movementControl.confirmRemovedMonkIsAtAccuratePositionOnLandRight(this)) {
        Controls.handleRemoveMonkFromRight(this);
    } else if (this.rightRemoveMonsterhasBeenSelected && movementControl.confirmRemovedMonsterIsAtAccuratePositionOnLandRight(this)) {
        Controls.handleRemoveMonsterFromRight(this);
    }
}
}