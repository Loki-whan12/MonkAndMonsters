interface Movable {
  setVelocity(x: number, y: number): void;
}

export class Monk implements Movable {
  public monk!: Phaser.Physics.Arcade.Sprite;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    platform: Phaser.Physics.Arcade.StaticGroup
  ) {
    this.monk = scene.physics.add.sprite(x, y, "monk").setScale(1.5);
    this.monk.setBounce(0.2);
    this.monk.setCollideWorldBounds(true);
    scene.physics.add.collider(this.monk, platform);
  }
  
  setVelocity(x: number, y: number): void {
    this.monk.setVelocity(x, y);
  }
}
