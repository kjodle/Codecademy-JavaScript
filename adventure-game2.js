// Codecademy example

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}


// This is mine

var user = prompt("Do you like space", "Enter your answer here").toLowerCase();
switch(user){
    case 'yes':
        var pilot = prompt("Can you pilot a starship?").toLowerCase();
        var fire = prompt("Can you man the weapons array?").toLowerCase();
        if( pilot === "yes" && fire === "yes" ) {
            alert("We'll have to see who else is on board before assigning you a job.");
        } else if( pilot === "yes" || fire === "yes" ) {
            alert("Man your station.");
        } else {
            alert("You are officially in charge of making the tea.");
        }
        break;
    case 'maybe':
        var sick = prompt("Do you get space sick?").toLowerCase();
        var brew = prompt("Do you know how to make a proper cup of tea?").toLowerCase();
        if( sick === "no" && brew === "yes" ) {
            alert("You are officially in charge of making the tea.");
        } else if( sick === "yes" && brew === "yes" ) {
            alert("You are officially in charge of making the tea. But pack it in a thermos for us and stay on the planet.");
        } else if( sick === "no" && brew === "no" ) {
            alert( "That's okay. We'll find something for you to do."); } else {
            alert( "That's okay. You stay on the planet and Google 'how to make a proper cup of tea'.");
            }
        break;
    case 'no':
        alert("Uh-oh! I guess we're leaving without you!");
        break;
    default:
        console.log("How's that again?");
}