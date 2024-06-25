// Place-toi entre le paysan et la tour.

while(true) {
    var enemy = hero.findNearestEnemy();
    var friend = hero.findNearestFriend();
    // Calcule x en ajoutant friend.pos.x à enemy.pos.x
    // Ensuite, divise par 2.
    // Consulte le guide si tu as besoin de plus d'aide !
    var x1 = (friend.pos.x + enemy.pos.x) / 2;
    // Maintenant fais de même pour `y`.
    var y1 = (friend.pos.y + enemy.pos.y) / 2;
    // Va aux coordonnées x et y que tu as calculées.
    hero.moveXY(x1, y1);
}