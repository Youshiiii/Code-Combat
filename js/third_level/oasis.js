// Allez à l'oasis en vous déplaçant vers le bas, 10m à la fois
// Construisez des clôtures 20m à gauche de chaque ogre

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Construisez des clôtures 20 unités à gauche de l'ennemi
        hero.buildXY("fence", enemy.pos.x - 20, enemy.pos.y);
    } else {
        // Descendez vers le bas 10 unités à la fois
        hero.moveXY(hero.pos.x, hero.pos.y - 10);
    }
}