// Tu testes sur le terrain une nouvelle unité de combat : le Leurre.
// Construis 4 leurres, puis fais ton rapport à Naria combien tu en as construit.

var decoysBuilt = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin && hero.gold < 25) {
        // Récupère la pièce !  
        hero.moveXY(coin.pos.x, coin.pos.y);
        
    }
    // Chaque leurre coûte 25 Or. Utilise la Pierre Sensorielle en Quartz
    // Pour savoir si tu as plus que 25 Or
    else if (hero.gold >= 25) {
        // buildXY une "leurre"
        hero.buildXY("decoy", hero.pos.x, hero.pos.y);
        // Garde le compte des leurres déjà construits au fur et à mesure que tu les construits.
        decoysBuilt += 1;
    }
    
    if(decoysBuilt == 4) {
        // Sors de la boucle lorsque tu en as construit 4. (mots clef : break signifie casser ; loop signifie boucle)
        break;
    }
}

hero.say("Fini de construire des leurres !");
hero.moveXY(14, 36);
// Va voir Naria et dis lui combien de leurres tu as construit.
hero.say(decoysBuilt);