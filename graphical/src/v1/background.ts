import Phaser from "phaser";

export function createBackgrounds(scene: Phaser.Scene) {
  const platforms = scene.physics.add.staticGroup();
  scene.add.image(800, 300, "sky").setScale(2.5, 1);
  platforms.create(800, 480, "river");
  platforms.create(200, 400, "platform").setScale(1.1, 1);
  platforms.create(1399.5, 400, "platform").setScale(1.05, 1);
  scene.add.image(60, 230, "forest").setScale(1, 1.4);
  scene.add.image(1550, 230, "forest").setScale(1, 1.4);
  return platforms;
}
