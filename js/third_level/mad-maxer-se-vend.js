// Les pièces ici disparaissent après quelques secondes!
// Obtenez toutes les pièces d’or avant qu’elles ne disparaissent.

while(true) {
    var closestGold = null;
    var minGoldDist = 9999;
    var coinIndex = 0;
    var coins = hero.findItems();
    //hero.say(coins);
    // Trouvez la pièce d’or la plus proche.
    // Rappelez-vous que les pièces d’or ont une valeur de 3.
    if (!coins) {
            continue;
    } 

    while (coinIndex < coins.length) {
          var coin = coins[coinIndex];
          if (coin.value == 3 && hero.distanceTo(coin) < minGoldDist) {
              closestGold = coin;
              minGoldDist = hero.distanceTo(coin);
          }
          coinIndex += 1;
    }
    
    
    if(closestGold) {
        // Maintenant, allez à la pièce d’or la plus proche et obtenez-la!
        //hero.say("closestGold");
        hero.moveXY(closestGold.pos.x, closestGold.pos.y);
    }
}