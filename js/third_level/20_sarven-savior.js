// Un ARRAY est une liste d'éléments.

// Ce tableau est une liste des noms de tes amis.
var friendNames = ["Joan", "Ronan", "Nikita", "Augustus"];

// Les indices de tableau commencent à 0, pas à 1 !
var friendIndex = 0;

// Parcours chaque nom dans le tableau.
// La propriété .length obtient la longueur du tableau.
while (friendIndex < friendNames.length) {
    // Utilise des crochets pour obtenir un nom de l'array.
    var friendName = friendNames[friendIndex];
    
    // Dis à ton ami de rentrer à la maison.
    // Utilise + pour connecter deux chaînes de caractères./*
    hero.say(friendName + ", go home!");
    
    // Incrémente `friendIndex` pour obtenir le nom suivant.
    friendIndex += 1;
}

// Retraite à l'oasis et construis une "clôture" sur le X.
hero.moveXY(25, 30);
hero.buildXY("fence", 29, 30);