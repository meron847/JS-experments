const monthlyRent = 600;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);


const skyIsBlue = true;

if (skyIsBlue) {
 console.log("The sky is blue!");
}else {
    console.log("The sky is ...not blue");
}

const friendsAtYourParty = 0;/*you can have multiple type of branching methode  */

if (friendsAtYourParty=== 0) {
    console.log("Cool.");
}else if (friendsAtYourParty <= 4) {
    console.log("perfect amount.");
} else {
    console.log("wooooooooo")/*if nothing is true run this  */
}

let friends = 0;

while (friends < 10) {
    console.log("another friend");
    friends = friends + 2;
}
console.log(friends);