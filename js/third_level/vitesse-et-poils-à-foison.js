// Both hero and pet move at the same time.
function petMove(event) {
    pet.moveXY(50, 21);
}

pet.on("spawn", petMove);
hero.moveXY(50, 12);
