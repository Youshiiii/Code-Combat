// Détruis les mechs et collecte l'or qu'ils laissent.

while (true) {
    var coin = hero.findNearestItem();
    // Tant qu'une pièce existe :
    while (coin) {
        // Va à la pièce.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Réattribue la variable coin à l'objet le plus proche.
        var coin = hero.findNearestItem();
    }
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Tant que la santé de l'ennemi est supérieure à 0.
        while (enemy.health > 0) {
            // Attaque l'ennemi.
            hero.attack(enemy);
        }
    }
}
