// Esquive les canons et collecte 8 gemmes.
// Fais gaffe, les canons sont prêts à tirer!
// Bouge lentement avec un déplacement spécial pour les embrouiller.

// Cette fonction renvoie une valeur de 0 à 30 (0 <= n < 30).
function mod30(n) {
    if (n >= 30) {
        return n - 30;
    } else {
        return n;
    }
}

// Cette fonction devrait renvoyer une valeur de 0 à 40 (0 <= n < 40)
function mod40(n) {
    // Utilise une if-statement pour renvoyer la valeur correcte.
        if (n >= 40) {
        return n - 40;
        } 
    else {
    return n;
    }
}

// Tu n'as pas besoin de changer le code suivant :
while (true) {
    var time = hero.time;
    var x = mod30(time) + 25;
    var y = mod40(time) + 10;
    hero.moveXY(x, y);
}