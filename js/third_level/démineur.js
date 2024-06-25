// Conduis les paysans et le soigneur à travers ce champ de mines.

while(true) {
    var coin = hero.findNearestItem();
    var healingThreshold = hero.maxHealth / 2;
    // Vérifie si tu es gravement blessé.
    if(hero.health < healingThreshold) {
        // Va 10m à gauche.
        hero.moveXY(hero.pos.x -10, hero.pos.y);
        // Demande une guérison.
        hero.say("Can I get a heal?");
    // Sinon, déplace-toi vers la prochaine pièce.
    } else if (coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
}