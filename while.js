var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


//Remember to set your condition outside the loop!

var count = 0;
var loop = function(){
	while( count < 3){
		console.log( "I'm looping!" );
		count++;
	}
};

loop();


//Remember to make your condition true outside the loop!

var soloLoop = function(){
  var loop = true;
  while(loop) {
      console.log("Looped once!");
      loop = false;
  }
  
};

soloLoop();


// while vs. for

var count = 0;
while(count<3){
    console.log("Looping!");
    count++;
}

for (i=0; i<0; i++){
    console.log("Still looping!");
}


// do/while

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);


// Another example

var getToDaChoppa = function(){
  var i=0;
  do {
      console.log( "Looping " + (i+1) + " times");
      i++;
  } while(i<4);
  
};

getToDaChoppa();


// All three together

var i;
for (i=0; i<10; i++) {
    console.log("Looping " + (i+1) + " times");
}

var i=0;
while (i<10) {
    i++;
    console.log("Again, looping " + i + " times");
}

var i=0;
do {
    console.log("Last time, we're looping " + (i+1) + " times");
    i++;
} while (i<10);