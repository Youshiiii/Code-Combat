// Tu as une flèche. Ne la rate pas !

// Ça devrait retourner l'ennemi avec le plus de santé.
function findStrongestEnemy(enemies) {
    var strongest = null;
    var strongestHealth = 0;
    var enemyIndex = 0;
    // Tant que enemyIndex est inférieur à la longueur des ennemis :
    while (enemyIndex < enemies.length) {
        // Définit une variable ennemi à enemies[enemyIndex]
        var enemy = enemies[enemyIndex];
        // Si la santé de l'ennemi est supérieure à strongestHealth
        if (enemy.health > strongestHealth) {
            // Définit `strongest` à ennemi
            // Mets strongestHealth à `enemy.health`
            strongest = enemy;
            strongestHealth = enemy.health;
        // Incrémente enemyIndex.
        }
        enemyIndex += 1;
    }
        
    return strongest;
}

var enemies = hero.findEnemies();
var leader = findStrongestEnemy(enemies);
if (leader) {
    hero.say(leader);
}