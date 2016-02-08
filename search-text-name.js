/*jshint multistr:true */

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\ Nulla vel quam condimentum, suscipit arcu ut, viverra sem. Maecenas\ tincidunt, dolor sit amet volutpat tempor, ligula magna suscipit diam,\ id faucibus nisi Ken tortor id nibh. Aenean vitae diam in velit porttitor\ volutpat at vel metus. Nullam fermentum, risus et hendrerit adipiscing,\ augue purus venenatis metus, non tempus erat risus pulvinar neque. Sed\ elementum odio non dui rutrum, sit amet Ken semper erat elementum. Nam\ hendrerit faucibus risus quis faucibus. Donec adipiscing dui in tortor\ commodo semper. Sed pretium sit amet risus nec placerat.";
var myName = "Ken";
var hits = [];
for ( i=0; i<text.length; i++) {
    if (text[i] === "K") {
        for ( j=i; j<i+myName.length; j++ ) {
            hits.push(text[i]);
        }
    }
}
if (hits.length === 0) {
    console.log( "Your name wasn't found!");
}
else {
    console.log( hits );
}