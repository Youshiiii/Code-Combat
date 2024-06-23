while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy && enemy.type != "sand-yak") {
        if (hero.canCast("chain-lightning", enemy)) {
            hero.cast("chain-lightning", enemy);
        }
        else if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        else {
            hero.attack(enemy);
        }
    }
    
    if (hero.health <= 300) {
        hero.moveXY(39, 65);
    }
}