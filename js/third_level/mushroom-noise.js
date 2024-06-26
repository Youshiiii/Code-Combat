// Vaincs le squelette et ouvre le coffre.

function onSpawn (event) {
    // Le familier doit trouver la potion de santé (type est "potion") :
        var potion = pet.findNearestByType("potion");   
        // et va le chercher :
            pet.fetch(potion);
            // Le familier doit trouver la clé en or (type est "gold-key") :
        var goldKey = pet.findNearestByType("gold-key");  
        // et va le chercher :
        pet.fetch(goldKey);
}

// Le familier peut trouver plus que des objets :
var skeleton = pet.findNearestByType("skeleton");
pet.on("spawn", onSpawn);

while(true) {
    if (skeleton.health > 0) {
        hero.attack(skeleton);
    }
    else {
        hero.moveXY(31, 38);
    }
}