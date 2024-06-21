// D'abord, bats 6 ogres.
// Ensuite, collecte des pièces jusqu'à avoir 30 pièces d'or.

// Cette variable est utilisée pour compter les ogres.
var defeatedOgres = 0;

// Cette boucle est exécutée tant que `defeatedOgres` est inférieur à 6.
while (defeatedOgres < 6) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
        defeatedOgres += 1;
    } else {
        hero.say("Orques!");
    }
}

// Va au côté droit de la carte.
hero.moveXY(49, 36);

// Cette boucle est exécutée tant que tu as moins de 30 pièces d'or.
while (hero.gold < 30) {
    // Trouve et collecte des pièces.
   var item = hero.findNearestItem();
    hero.moveXY(item.pos.x, item.pos.y);
}

// Va à la sortie.
hero.moveXY(76, 32);