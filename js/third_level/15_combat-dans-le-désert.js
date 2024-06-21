// Les while-loops se répètent jusqu'à ce que la condition soit fausse.

var ordersGiven = 0;
var friends = hero.findFriends();
while (ordersGiven < 5) {
    var friend = friends[ordersGiven]
    // Bougez et ordonnez à chacun de vos alliés de participer à la bataille. (Vous ne pouvez les entendre que si vous vous tenez directement devant eux.)
    hero.moveXY(friend.pos.x + 8, friend.pos.y);
    // Ordonne ton allié à "Attaquer!" avec hero.say.
    hero.say("Attack!");

    // Assure-toi d'incrémenter ordersGiven!
    ordersGiven += 1;
}

while(true) {
    var enemy = hero.findNearestEnemy();
    // Lorsque vous donnez des ordres, participez à l'attaque.
    hero.moveXY(58, 33);
    if (enemy) {
        hero.attack(enemy);
    }
}