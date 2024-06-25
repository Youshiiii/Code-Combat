// Ce tableau comprend les amis et les ogres
// Les éléments impairs sont des ogres, les éléments pairs sont tes amis
var everybody = ['Yetu', 'Tabitha', 'Rasha', 'Max', 'Yazul',  'Todd'];
var enemyIndex = 0;

while (enemyIndex < everybody.length) {
    // Utilise les crochets [ ] pour récupérer le nom des ogres depuis le tableau
    var ogreNames = everybody[enemyIndex]
    // Attaque en utilisant la variable contenant le nom de l'ogre
    hero.attack(ogreNames);
    // Incrémente de 2 pour passer les amis
    enemyIndex += 2;
}

// Après avoir battu les ogres, déplace toi à l'oasis
hero.moveXY(36, 53);