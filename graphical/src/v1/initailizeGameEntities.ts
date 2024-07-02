import { Monk } from "./monk";
import { Monster } from "./monster";
import { MainScene } from "./scene";

export function initializeMonksAndMonsters(scene: MainScene) {
  let j = 50;
  for (let i = 0; i < 3; i++) {
    const monk = new Monk(scene, j, 300, scene.platforms);
    const monster = new Monster(scene, 150 + j, 300, scene.platforms);

    scene.monks.push(monk);
    scene.monsters.push(monster);
    j += 50;
  }
  scene.LeftRiverSideMonks = [...scene.monks];
  scene.LeftRiverSideMonsters = [...scene.monsters];
}
