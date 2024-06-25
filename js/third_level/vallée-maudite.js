// Il fait trop chaud dehors! A chaque seconde tu perds de la vie.

while (true) {
    var enemy = hero.findNearestEnemy();
    // Attaque si l'ennemi existe ET que son équipe est "ogres".
    // ET enemy.type est "skeleton"
    if (enemy && enemy.team === "ogres" && enemy.type === "skeleton") {
        hero.attack(enemy);
    }
    
    var item = hero.findNearestItem();
    // Récupère si l'objet existe ET que item.type est "potion".  
    // ET hero.health est inférieur à hero.maxHealth / 4
    if (item && item.type == "potion" && hero.health < hero.maxHealth / 4) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}