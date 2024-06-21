// <%= ask_healer %>

while(true) {
    var currentHealth = hero.health;
    var healingThreshold = hero.maxHealth / 2;
    var ogre = hero.findNearestEnemy();
    // <%= if_health_low %>
    // <%= move_to_point2 %> "heal me".
    // <%= else_attack %>
    if (currentHealth < healingThreshold) {
        hero.moveXY(65, 46);
        hero.say("heal me");
    }
    else if (ogre) {
        hero.attack(ogre);
    }
}