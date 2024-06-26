// Les ogres attaquent un avant-poste proche !
// Ordonne au héros de défendre la petite colonie.
// Chronomètre ta patrouille avec une montre pour qu'aucun ogre ne puisse passer.

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
    var polarPos = hero.time / 4;
    // Un nombre entre 20 et 60.
    var xPos = 40 + Math.cos(polarPos) * 20;
    // Un nombre entre 14 et 54.
    var yPos = 34 + Math.sin(polarPos) * 20;
    hero.moveXY(xPos, yPos);
    // Vérifie la présence d'ogres et bats-les !
    // Assure-toi d'attaquer tant que leur santé est au-dessus de 0.
}