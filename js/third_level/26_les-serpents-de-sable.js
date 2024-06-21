// Le terrain est couvert de pièges. Heureusement nous avons envoyé un éclaireur pour repérer un chemin. Il a laissé des pièces le long du chemin de telle sorte que si nous restons proche de la pièce la plus proche, nous éviterons les pièges.

// Ce canyon semble interférer avec tes lunettes findNearest !
// Tu devras trouver les pièces les plus proches tout seul.
while(true) {
    var coins = hero.findItems();
    var coinIndex = 0;
    var nearest = null;
    var nearestDistance = 9999;
    
    // Cherche parmi toutes les pièces celle qui est le plus proche.
    while(coinIndex < coins.length) {
        var coin = coins[coinIndex];
        coinIndex++;
        var distance = hero.distanceTo(coin);
        // Si la distance de la pièce est moins que la nearestDistance
        if (distance < nearestDistance) {
            // Assigne nearest à coin
            nearest = coin;
            // Assigne nearestDistance à distance
            nearestDistance = distance;
        }
    }
    // 
    hero.moveXY(nearest.pos.x, nearest.pos.y);
    
}