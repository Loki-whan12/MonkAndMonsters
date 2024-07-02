interface Movable {
  setVelocity(x: number, y: number): void;
}
export class Monster implements Movable {
  public monster!: Phaser.Physics.Arcade.Sprite;
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    platform: Phaser.Physics.Arcade.StaticGroup
  ) {
    this.monster = scene.physics.add.sprite(x, y, "monster").setScale(1.5);
    this.monster.setBounce(0.2);
    this.monster.setCollideWorldBounds(true);
    scene.physics.add.collider(this.monster, platform);
  }

  setVelocity(x: number, y: number): void {
    this.monster.setVelocity(x, y);
  }
}
