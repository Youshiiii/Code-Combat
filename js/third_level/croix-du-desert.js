// Regarde de quelle direction viennent les orgres.

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Gauche : enemy.pos.x est plus petit que hero.pos.x
        var isLeft = hero.pos.x  > enemy.pos.x;
        // Au-dessus : enemy.pos.y est plus grand que  hero.pos.y
        var isAbove = hero.pos.y < enemy.pos.y;
        // Droite :  enemy.pos.x est supérieur à hero.pos.x
        var isRight = enemy.pos.x > hero.pos.x;
        // Au-dessous : enemy.pos.y est inférieur à hero.pos.y
        var isBelow = enemy.pos.y < hero.pos.y;
        // Si l'ennemi isAbove et isLeft:
        // buildXY() l'objet "fire-trap" au repère X.
        if(isLeft && isAbove) {
            hero.buildXY("fire-trap", 20, 51);
        }
        // Si l'ennemi isAbove et isRight:
        // buildXY() l'objet "fire-trap" au repère X.
        if (isAbove && isRight) { 
            hero.buildXY("fire-trap", 60, 51);
        }    
        // Si l'ennemi isBelow et isLeft:
        // buildXY() l'objet "fire-trap" au repère X.
        if(isBelow && isLeft) {
            hero.buildXY("fire-trap", 20, 17);
        }
        // Si l'ennemi isBelow et isRight:
        // buildXY() l'objet "fire-trap" au repère X.
        if(isBelow && isRight) {
            hero.buildXY("fire-trap", 60, 17);
        }
        hero.moveXY(40, 34);
    } else {
        hero.moveXY(40, 34);
    }
}