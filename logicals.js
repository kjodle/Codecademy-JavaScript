var hungry = true;
var foodHere = true;

var eat = function() {
    if (hungry && foodHere) {
        return true;
    } else {
        return false;
    }
  
};

// Create two variables, tired and bored, and set one equal to true and the other equal to false. (It doesn't matter which is which.) Inside the nap function, create an if statement that returns true if either tired or bored (or both!) are true, and false otherwise.

var tired = true;
var bored = false;

var nap = function() {
  if( (tired && bored) || (tired && !false) || (!tired && bored) ){
      return true;
  } else {
      return false;
  }
};


//Declare a variable called programming and set it to false. Then, write an if/else statement inside happy so that happy returns true if programming is false and false otherwise.

var programming = false;

var happy = function() {
  if(!programming) {
      return true;
  } else if(programming) {
      return false;  
  }
};


