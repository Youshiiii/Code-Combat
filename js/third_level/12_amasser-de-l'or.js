// Récolte 25 pièces d'or et indique à Naria le total.
// Utilise l'instruction break pour arreter de récolter les pièces quand totalGold >= 25

var totalGold = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        // Ramasse la pièce.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Ajoute la valeur de la pièce au totalGold.
        // Permet d'obtenir la valeur :  coin.value
        totalGold += coin.value
        
    }
    if (totalGold >= 25) {
        // Permet d'arrêter la loop pour exécuter le code en dessous
        // La boucle se termine, le code après la boucle s'exécutera.
        break;
    }
}

// Fin de la récolte d'or !
hero.moveXY(58, 33);
// Aller voir Naria et dis lui combien d'or tu as recolté
hero.say(totalGold);