var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames);
//console.log(enemyNames.length);
//console.log(enemyNames[0]);
//console.log(enemyNames[3]);


var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0){

    // Alert players that they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");    
    console.log(promptFight);
    //if player chooses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {  
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
        // Check enemies health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
        // Subtract the value of 'enemyAttack' from the value of the 'playerHealth and use the result to update the value in the 'playerHealth'
    playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true) leave fight
    if (confirmSkip){ 
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false) ask question again by running fight() again
    else {
        fight();
    }     
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
  }  
};
// run fight function to start the game
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}


//Game States
// "WIN" -player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" -player robot's health is zero or less
