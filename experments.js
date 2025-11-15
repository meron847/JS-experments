let friends =0;
for (let i= 0; i< 10; i++) {
    friends++;
}
console.log(friends);
//this is loop//


const timesToRepeat = 50;
const Character = '%'

let answer = "";

for (let i = 0; i < timesToRepeat; i++) {
    answer = answer + Character;
}

console.log(answer)


const repeatedTimes =200;
const main = '$'

console.log("".padStart(repeatedTimes,main)); //used to quickly create a repeated character string//


function addTwo(number){
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

const otherAnswer = addTwo(10);
console.log(otherAnswer);



const myHome = "Seattle";
const myState = "Washington";
const myCountry = "USA";

function logOutYourHome(home, state, Country) {
    console.log(`You are from ${home}, ${state}, ${Country}.`);
}

logOutYourHome(myHome,myCountry,myState);
//this is finction


//want to round a number? use Math
const number = 56.8;
const roundNumber = Math.round(number);
console.log(roundNumber)

//call a function
const dog = {
    name: "luca",
    speak() {
  console.log("woof woof");
    },
};
dog.speak();