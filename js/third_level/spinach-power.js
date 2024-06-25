// <%= collect_potions %>
// <%= strong %>

var potionCount = 0;

// <%= wrap_block %>
// <%= check_potions %>
while (potionCount < 7){
    var item = hero.findNearestItem();
    if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
        potionCount++;
    }
}
// <%= when_finished %>
// <%= go_fight %>
while (true) {
    var enemy = hero.findNearestEnemy();
    while (enemy.health > 0) {
        hero.attack(enemy);
    }
}