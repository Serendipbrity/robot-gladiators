var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0){

    // ask player if theyd like to fight or skip

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");    

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
       
        // if yes (true) leave fight
        if (confirmSkip){ 
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
          // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
// Check enemies health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
        
    // award player money for winning
    playerMoney = playerMoney + 20
    // leave while loop since enemy is dead
    break;    
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

     // Subtract the value of 'enemyAttack' from the value of the 'playerHealth and use the result to update the value in the 'playerHealth'
     playerHealth = playerHealth - enemyAttack;
     // Log a resulting message to the console so we know that it worked
     console.log(
         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );
   
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
};  // end of fight function 
          
  // function to start a new game
var startGame = function(){ 
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
// fight enemy ronots by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive keep fighting
if (playerHealth > 0) {
    // lets player know what round they are in
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on index of enemy array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    //debugger;

    // pass the pickedEnemyName variable into the fight function where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}
// if player isnt alive, stop game
   else {
       window.alert("You have lost your robot in this battle! Game Over!")
       break;
       }
    }
    // play again
    endGame();
};


// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
    window.alert("You've lost your robot in the battle.");
    }
}

// ask the player if theyd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
