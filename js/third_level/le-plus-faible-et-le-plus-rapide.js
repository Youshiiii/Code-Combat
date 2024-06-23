// Bats les shamans pour survivre.

// Cette fonction trouve l'ennemi le plus faible.
function findWeakestEnemy() {
    var enemies = hero.findEnemies();
    var weakest = null;
    var leastHealth = 99999;
    var enemyIndex = 0;
    // Parcours les ennemis :
    while (enemyIndex < enemies.length) {
        // Si la santé d'un ennemi est inférieure à leastHealth :
        var enemy = enemies[enemyIndex];
        if (enemy.health < leastHealth) {
            // Fais-en le plus faible
            weakest = enemy;
            // et définissez leastHealth à sa santé.
            leastHealth = enemy.health;
        }
        enemyIndex += 1;
    }
    return weakest;
}

while(true) {
    // Trouve l'ennemi le plus faible avec la fonction :
    var weakestShaman = findWeakestEnemy();
    // Si l'ennemi le plus faible existe :
    if (weakestShaman) {
        // Attaque-le !
        hero.attack(weakestShaman);
    }
}