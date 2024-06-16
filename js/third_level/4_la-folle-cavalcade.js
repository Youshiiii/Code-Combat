// Continue à te déplacer à droite, mais ajuste vers le haut et le bas pendant que tu te déplaces.

while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    if(enemy) {
        // Ajuste y vers le haut ou le bas pour s'extirper des yaks.
        if(enemy.pos.y > hero.pos.y) {
            // Si le Yak est au dessus de toi, soustrais 3 à yPos.
            yPos -= 3; 
        } else if (enemy.pos.y < hero.pos.y) {
            // Si le Yak est en dessous de toi, ajoute 3 à yPos.
            yPos += 3;
        }
    }
    hero.moveXY(xPos, yPos);
}