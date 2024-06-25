// Cette fonction permet de combattre jusqu'à un certain temps.
// et signaler les ennemis vaincus.
function fightAndReport(untilTime) {
    var defeated = 0;
    while (true) {
        var enemy = hero.findNearestEnemy();
        if (enemy) {
            hero.attack(enemy);
            if (enemy.health <= 0) {
                defeated += 1;
            }
        }
        if (hero.time > untilTime) {
            break;
        }
    }
    hero.moveXY(59, 33);
    hero.say(defeated);
}

function collectGold(untilTime) {
    var gold = hero.findNearestItem();
    while (true) {
        if (gold) {
            hero.moveXY(gold.pos.x, gold.pos.y)
        }
        if (hero.time > untilTime) {
            break;
        }
    }
}
// Bats-toi pendant 15 secondes et dis à Naria combien d'ennemis tu as vaincus.
fightAndReport(15);

// Ramasse des pièces jusqu'à ce que le chrono atteigne 30 secondes.
collectGold(30);

// Dis à Naria combien d'or tu as récolté.
hero.say(hero.gold);

// Combats les ennemis jusqu'à ce que l'horloge atteigne 45 secondes.
fightAndReport(45);