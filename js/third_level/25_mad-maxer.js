// Tuez l'ennemi le plus éloigné en premier.

while(true) {
    var farthest = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    var enemies = hero.findEnemies();

    // Observez tous les ennemis pour déterminer lequel est le plus éloigné.
    while (enemyIndex < enemies.length) {
        var target = enemies[enemyIndex];
        enemyIndex += 1;

        // Est-ce que cet ennemi est le plus éloigné que l'on ai vu pour l'instant ?
        var distance = hero.distanceTo(target);
        if (distance > maxDistance) { // C'est plus loin que ce que nous avons vu jusqu'à présent.
            maxDistance = distance; // 
            farthest = target;  // `farthest` est celui qu'on prévoit d'attaquer

        }
    }

    if (farthest) {
        // Éliminez l'ennemi le plus éloigné !
        // Continuez à attaquer l'ennemi tant que sa vie est supérieure à 0.
        while (farthest.health > 0) {
            hero.attack(farthest);
        }
    }
}