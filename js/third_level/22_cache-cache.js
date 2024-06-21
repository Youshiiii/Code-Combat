// findEnemies renvoie une liste de tous tes ennemis.
// Attaque seulement les chamans ! N'attaque pas les yaks !

var enemies = hero.findEnemies();
var enemyIndex = 0;

// Insére cette section dans une boucle while pour effectuer une itération sur tous les ennemis.
// Tant que l'enemyIndex est inférieur à la longueur des ennemis
while (enemyIndex < enemies.length) {
var enemy = enemies[enemyIndex];
    if (enemy.type == 'shaman') {
        while (enemy.health > 0) {
        hero.attack(enemy);
        }
    }
// N'oublie pas d'incrémenter `enemyIndex`.
enemyIndex += 1;
}