import Phaser from "phaser";

export class Boat {
  public boat: Phaser.Physics.Arcade.Image;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    platform: Phaser.Physics.Arcade.StaticGroup
  ) {
    this.boat = scene.physics.add.image(x, y, "boat");
    scene.physics.add.collider(this.boat, platform);
  }
}
