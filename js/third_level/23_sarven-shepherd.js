// Utilise des boucles while pour attaquer l'ogre.

while(true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;

    // Enveloppe cette logique dans une boucle while pour attaquer tous les ennemis.
    // Trouve la longueur du tableau avec : enemies.length
    while (enemyIndex < enemies.length) {
    var enemy = enemies[enemyIndex];
    // "!=" signifie "différent de".
        if (enemy.type != "sand-yak") {
        // Tant que la santé de l'ennemi est supérieure à 0, attaque-le !
            while (enemy.health > 0) {
                hero.attack(enemy);
            }
        } 
    enemyIndex += 1;
    }

    // Entre les vagues, reviens au centre.
    hero.moveXY(40, 33);
}