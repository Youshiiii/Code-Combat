// Sauve les paysans des griffes des bandits et ramène-les au village.
// Choisis le chemin que tu préfères, tu peux éviter les patrouilles ou les combattre.
// Les potions ajoutent un effet aléatoire, parfois bon, parfois mauvais.
// Courageux ? Tu gagnes un bonus si tu arrives à piller le coffre au trésor des ogres.
function attackEnemy(enemy) {
    while (enemy.health > 0) {
            hero.attack(enemy);
    }
}

while (true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        attackEnemy(enemy);
    }
    
    else {
        if (flag && flag.color == "green") {
        hero.moveXY(flag.pos.x, flag.pos.y);
        hero.pickUpFlag(flag);
        }
    }
}