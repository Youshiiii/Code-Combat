// Utilisez "while" pour faire une boucle jusqu'à ce que vous ayez assez frappé pour tuer 10 munchkins.

var attacks = 0;
while (attacks < 10) {
    var enemy = hero.findNearestEnemy();

    if (enemy) {
        hero.attack(enemy);
    }
    // Incrémenter signifie augmenter de 1.
    // Incrémente la variable `attacks`.
    attacks += 1;
}
// Lorsque vous avez terminé, fuyez au point d'embuscade.
hero.say("I should retreat!"); //∆ Ne reste pas là à bavarder !
hero.moveXY(79, 33);
