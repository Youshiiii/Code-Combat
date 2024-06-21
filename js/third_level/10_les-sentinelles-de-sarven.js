// <%= use_flags %>

while(true) {
    var flagGreen = hero.findFlag("green");
    var flagBlack = hero.findFlag("black");
    
    // <%= green_flag_fence %>
    if (flagGreen) {
        // <%= build_fence %>
        hero.buildXY("fence", flagGreen.pos.x, flagGreen.pos.y);
        // <%= pick_up %>
        hero.pickUpFlag(flagGreen);
    }
    // <%= black_flag_trap %>
    else if (flagBlack) {
        // <%= build_trap %>
        hero.buildXY("fire-trap", flagBlack.pos.x, flagBlack.pos.y);
        // <%= pick_up %>
        hero.pickUpFlag(flagBlack);
    }
    // <%= move_back %>
    hero.moveXY(43, 31);
}