// Attend les ogres, bat-les et récupère l'or.

while(true) {
    var enemies = hero.findEnemies();
    // enemyIndex est utilisé pour itérer sur le tableau d'ennemis.
    var enemyIndex = 0;
    // tant que enemyIndex est inférieur à enemies.length (la longueur du tableau des ennemis)
    while (enemyIndex < enemies.length) {
        // Attaque l'ennemi à enemyIndex
        var enemy = enemies[enemyIndex];
        hero.attack(enemy);
        // Augmente enemyIndex de un.
        enemyIndex += 1;
    }
    var coins = hero.findItems();
    // coinIndex est utililsé pour itérer sur le tableau de pièces (coins).
    var coinIndex = 0;
    while (coinIndex < coins.length) {
        // récupère une pièce (coin) du tableau de pièces en utilisant coinIndex
        var coin = coins[coinIndex];
        // Récupère cette pièce.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Augmenter coinIndex de un.
        coinIndex += 1;
    }
}