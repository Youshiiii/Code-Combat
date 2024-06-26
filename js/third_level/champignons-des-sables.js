// Ramasse 9 champignons.

// Cette fonction fait chercher des potions par l'animal de compagnie pour vous.
function onSpawn(event) {
    while(true) {
        // Les familiers peuvent trouver l'objet le plus proche par son type.
        var potion = pet.findNearestByType("potion");
        // Fais ramener la potion par l’animal de compagnie si elle existe :
        pet.fetch(potion);
    }
    
}
pet.on("spawn", onSpawn);

// Les champignons sont toxiques, ne les ramasse pas trop vite.
while(true) {
    var someItem = hero.findNearestItem();
    if (someItem && hero.health > hero.maxHealth / 3) {
        // Récupère le someItem:  
        hero.moveXY(someItem.pos.x, someItem.pos.y);
    }
}