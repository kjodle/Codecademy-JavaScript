var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
      console.log("That's a sunny color!");
      break;  
  default:
    console.log("I don't think that's a primary color!");
}


var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
    console.log("That candy is unknown to me.");
}

var answer = prompt("Name a number between 1 and 5");
switch(answer) {
  case '1':
    console.log("Your number is odd");
    break;
  case '3':
    console.log("Your number is odd");
    break;
  case '5':
    console.log("Your number is odd");
    break;
  default:
    console.log("Your number is even");
}

var response = prompt("What is your first name?", "Enter your name here");
switch(response) {
    case 'Ken':
        console.log("Hey, that's my name, too!");
        break;
    case 'Chekhov':
        console.log("I never forget a face. Even one I've never seen before.");
        break;
    case 'Kirk Unit':
        console.log("You will assist me in my functioning.");
        break;
    default:
        console.log("That's not a name!");
};

