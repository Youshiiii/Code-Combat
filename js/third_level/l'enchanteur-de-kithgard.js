// <%= define %>
// <%= right %>
// <%= distance %>
function moveRight() {
    var x = hero.pos.x + 12;
    var y = hero.pos.y;
    hero.moveXY(x,y);
}

// <%= down %>
function moveDown() {
    var x = hero.pos.x;
    var y = hero.pos.y - 12;
    hero.moveXY(x,y);
}
// <%= up %>
function moveUp() {
    var x = hero.pos.x;
    var y = hero.pos.y + 12;
    hero.moveXY(x,y);
}
// <%= call %>
moveRight();
moveDown();
moveUp();
moveUp();
moveRight();