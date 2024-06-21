// <%= c1 %>
// <%= c2 %>
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        // <%= c3 %>
        x -= 10;
        // <%= moveXY %>
        hero.moveXY(x, y);
    } else {
        // <%= c4 %>
        x += 10;
        // <%= moveXY %>
        hero.moveXY(x, y);
    }
}
