// Amenez le héros et le paysan au sud.

// La fonction déplace votre héros le long de la ligne centrale.
function moveDownCenter() {
    var x = 40;
    var y = hero.pos.y - 12;
    hero.moveXY(x, y);
}

// La fonction construire une clôture sur la droite de quelque chose :something.
function buildRightOf(something) {
    // buildXY une "fence" 20 mètres à quelque chose(something) est à droite.
    hero.buildXY("fence", something.pos.x + 20, hero.pos.y);
}

// La fonction construire une clôture sur la gauche de quelque chose :something.
function buildLeftOf(something) {
    // buildXY une "fence" 20 mètres à quelque chose(something) est à gauche.
    hero.buildXY("fence", something.pos.x - 20, hero.pos.y);
}

while(true) {
    var ogre = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    if (ogre) {
        buildLeftOf(ogre);
    }
    if (coin) {
        buildRightOf(coin);
    }
    moveDownCenter();
}