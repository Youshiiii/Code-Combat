// Pour attraper le plus d'or rapidement, cours après les pièces d'or.

while(true) {
    var coins = hero.findItems();
    var coinIndex = 0;

    // Enveloppe ça dans une boucle qui itère sur toutes les pièces.
    while (coinIndex < coins.length) {
    var coin = coins[coinIndex];
    // Les pièces d'or valent 3.
        if (coin.value == 3) {
        // Ramasse seulement les pièces d'or.
        hero.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex += 1;
    }
}