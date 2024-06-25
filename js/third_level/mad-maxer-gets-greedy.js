// Ramassez plus de pièces que votre double.
// Vous n'avez que quelques secondes pour ramassez les pièces. Choisissez votre chemin avec soin !
while(true) {
    var closestGold = null;
    var minGoldDist = 9001;
    var coinIndex = 0;
    var coins = hero.findItems();
    // Essayez de calculer le rapport "valeur / distance" pour déterminer quelles pièces ramasser.
    if (coins.length === 0) {
        continue;
    } 
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
		var distance = hero.distanceTo(coin) / coin.value;
		if (minGoldDist > distance) {
            closestGold = coin;
            minGoldDist = distance;
        }
            coinIndex += 1;
    }
    if (closestGold) {
    hero.moveXY(closestGold.pos.x, closestGold.pos.y); 
    }
}