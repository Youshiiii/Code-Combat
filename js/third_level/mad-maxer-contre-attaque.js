// Les plus petits ogres ici font plus de dégâts!
// Attaquez d’abord les ogres avec le moins de santé possible.
while(true) {
    var weakest = null;
    var leastHealth = 99999;
    var enemyIndex = 0;
    var enemies = hero.findEnemies();

    // Bouclez à travers tous les ennemis.
    while (enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        // Si enemy.health est inférieure à leastHealth,
        if (enemy.health < leastHealth) {
            // make it the weakest and set leastHealth to its health.
            weakest = enemy;
            leastHealth = enemy.health;
        // N’oubliez pas d’augmenter enemyIndex de 1.
        }
        enemyIndex += 1;
    
        if (weakest) {
        // Attaquez l’ogre le plus faible.
            hero.attack(weakest);
        }
    }
}