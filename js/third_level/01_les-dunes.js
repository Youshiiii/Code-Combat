// Ramassez les pièces. Ignorez les yaks des sables et 
while(true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    if (enemy) {
        if (enemy.type == "sand-yak" || enemy.type == "burl") {
            // Ne combattez pas les yaks des sables ni les <burls>! Ne ramassez que les pièces.
            hero.say("je te laisse tranquille !");
        } else {
            // Mais si l'ennemi est de type "thrower" ou "ogre", attaquez le 
                if (enemy.type == "thrower" || enemy.type == "ogre") {
                    hero.attack(enemy);
                }
        }
    } 
    if (item) {
        // Ramassez les pièces.
        if (item.type == "coin") {
        hero.moveXY(item.pos.x, item.pos.y);
        }
    } 
}
