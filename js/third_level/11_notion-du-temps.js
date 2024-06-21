// Utilise ton nouveau pouvoir pour choisir ce que tu dois faire :  hero.time

while(true) {
    // Durant les 10 premières secondes : se battre.
    var enemy = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    if (hero.time < 10) {
        hero.attack(enemy);
    }
    // Sinon, si on est toujours dans les 35 premières secondes, ramasser des Pièces.
    else if (hero.time < 35) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
    // Après 35 secondes, rejoindre le raid !
    else {
        hero.moveXY(18, 49); 
    }
}