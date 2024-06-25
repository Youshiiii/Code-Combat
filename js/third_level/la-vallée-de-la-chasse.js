// Évadez-vous du côté droit de la vallée.

// La fonction déplace le héros vers le bas et vers la droite.
function moveDownRight(shift) {
    hero.moveXY(hero.pos.x + shift, hero.pos.y - shift);
}

//  La fonction déplace le héros vers le haut et vers la droite.
function moveUpRight(shift) {
    // Complétez cette fonction:
    hero.moveXY(hero.pos.x + shift, hero.pos.y + shift);
}


//  Le chasseur est gentil et montrera la route.
var hunter = hero.findFriends()[0];
var route = hunter.route;
var routeIndex = 0;

while (routeIndex < route.length) {
    var direction = route[routeIndex];
    if (direction > 0) {
        moveUpRight(8);
    } 
    else  {
        //  Utilisez une fonction moveDownRight avec le décalage 8:
        moveDownRight(8);
    }
    routeIndex += 1;
}
