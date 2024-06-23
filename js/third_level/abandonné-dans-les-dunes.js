// Va au bord droit du niveau pour découvrir de nouvelles zones.
// Consulte les indices pour plus de détails.

hero.moveXY(120, 41);

while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy && enemy.type != "sand-yak") {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy)
        }
        else {
            hero.attack(enemy);
        }
    }

    var flagGreen = hero.findFlag("green");
    if (flagGreen) {
        hero.pickUpFlag(flagGreen);
    }
}