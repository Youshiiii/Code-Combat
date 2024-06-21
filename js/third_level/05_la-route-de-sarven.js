// Atteignez l'oasis. Attention aux nouveaux ennemis : les ogres éclaireurs !
// Allez vers le haut et la droite en ajoutant votre position en x et en y.

while(true) {
    // Attaque tout les ennemis que tu croises.
    var enemy = hero.findNearestEnemy();
    var posX = hero.pos.x;
    var posY = hero.pos.y;
    
    if (enemy) {
        hero.attack(enemy);
    // Ou si il n'y à aucun ennemis en vue, continue d'avancer vers en haut à droite.
    }
    else {
        posX += 15;
        posY += 20;
        hero.moveXY(posX, posY);
    } 
}