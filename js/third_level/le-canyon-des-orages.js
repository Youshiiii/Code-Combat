// Un orage du désert arrive!
// Les yaks détectent quand un orage arrive.

// Cette variable sera utilisée comme condition.
var yak = hero.findNearestEnemy();

// Pendant qu'il reste au moins un yak des sables:
while (yak) {
    var item = hero.findNearestItem();
    if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    // Mettez à jour la valeur de la variable `yak`
    // avec findNearestEnemy()
    yak = hero.findNearestEnemy();
}
// Les yaks se sont cachés.
// Déplacer la croix rouge dans le refuge.
hero.moveXY(38, 58);