// Attaque seulement les ennemis dans le tableau enemyNames.
// Assure-toi d'attaquer dans l'ordre ! 0 -> 1 -> 2 -> 3
var enemyNames = ["Kog", "Godel", "Vorobun", "Rexxar"];

hero.attack(enemyNames[0]);
hero.attack(enemyNames[1]);
// Attaque enemyNames[2] :
hero.attack(enemyNames[2]);
// Attaque le dernier élément :
hero.attack(enemyNames[3]);