// <%= get_to_oasis %>
// <%= fence_off_paths %>

while(true) {
    var yak = hero.findNearestEnemy();
    var posX = hero.pos.x;
    
    if (yak) {
        // <%= compare_y %>
         if(yak.pos.y > hero.pos.y) {
            // <%= yak_above %>
            hero.buildXY("fence", yak.pos.x, yak.pos.y - 10);
         }
        // <%= els %>
            else if (yak.pos.y < hero.pos.y) {
        // <%= yak_below %>
                hero.buildXY("fence", yak.pos.x, yak.pos.y + 10);
         }
    }  
            
     else {
        // <%= move_right %>
        posX += 10;
        hero.moveXY(posX, 30);
    }
}