// Il vous faut exactement 104 pièces.

var less = "Nimis";
var more = "Non satis";
var requiredGold = 104;

// Cette fonction fait la somme des valeurs de chaque pièce.
function sumCoinValues(coins) {
    var coinIndex = 0;
    var totalValue = 0;
    // Enumérez toutes les pièces.
    while (coinIndex < coins.length) {
        totalValue += coins[coinIndex].value;
        coinIndex++;
    }
    return totalValue;
}

function collectAllCoins() {
    var item = hero.findNearest(hero.findItems());
    while (item) {
        hero.moveXY(item.pos.x, item.pos.y);
        item = hero.findNearest(hero.findItems());
    }
}

while (true) {
    var items = hero.findItems();
    // Obtenez la valeur totale des pièces.
    var goldAmount = sumCoinValues(items);
    // S'il y a des pièces, on peut dire que goldAmount n'est pas égal à zéro.
    if (goldAmount !== 0) {
        // Si goldAmount est plus petit que requiredGold
        if (goldAmount < requiredGold) {
            // Dans ce cas, dites "Non satis".
            hero.say("Non satis");
        }
        // Si goldAmount est plus grand que requiredGold
        if (goldAmount > requiredGold) {
            // Dans ce cas, dites "Nimis".
            hero.say("Nimis");
        }
        // Si goldAmount est parfaitement égal à requiredGold
        if (goldAmount === requiredGold) {
            // Ensuite, collectez toutes les pièces.
            collectAllCoins();
        }
    }
}