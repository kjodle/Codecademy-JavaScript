function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

var rabbit1 = new Rabbit( this.adjective = "fluffy" );
var rabbit2 = new Rabbit( this.adjective = "happy" );
var rabbit3 = new Rabbit( this.adjective = "sleepy" );

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();