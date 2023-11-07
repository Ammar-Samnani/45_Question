// Task 2

let personName = "Ammar Abid";
console.log(`Hello ${personName}, how is your day going?`);


// Task 3

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());


// Task 4

let famousQuote = "Tell me and I forget, teach me and I may remember, involve me and I learn.";
let author = "Benjamin Franklin";

console.log(`${author} once said, "${famousQuote}"`);


// Task 5

let famous_person = "Leonardo da Vinci";
let message = `${famous_person} once said, "Learning never exhausts the mind."`;

console.log(message);


// Task 6

let pName = "\t\n   John Doe\t\n   ";
console.log(pName);
console.log(pName.trim());


// Task 7

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


// Task 8

console.log("------------------------------------------------------");
console.log("console.log(5 + 3)");
console.log("------------------------------------------------------");


// Task 9

let favoriteNumber = 5;
console.log(`My favorite number is ${favoriteNumber}.`);


// Task 10

// This Program add two numbers, 10-11-2023, Ammar Abid.
let number = 10;
let number2 = 11;
let addbooth = number + number2


// Task 11

let names = ["Ali", "Ahmed", "Sara", "Sam"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


// Task 12

console.log(`Hello ${names[0]}`);
console.log(`Hello ${names[1]}`);
console.log(`Hello ${names[2]}`);
console.log(`Hello ${names[3]}`);

// Task 13

let transportation = ["Audi Car", "Suzuki Motorcycle", "2 Wheel Bicycle"];

for (let i = 0; i < 3; i++) {
    console.log(`I would like to own a ${transportation[i]}.`);
}


// Task 14

let Guests = ["Ahmed", "Ali", "Rahim"];
for (let i = 0; i < 3; i++) {
    console.log(`Dear ${Guests[i]}, you are invited to my birthday party.`);
}


// Task 15

let cancelGuest = Guests[1];
console.log(`${cancelGuest} can't make it to dinner.`);

Guests[1] = "Sir Zia";

for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]}, you are invited to dinner.`);
}


// Task 16

console.log("Good news! We found a bigger dinner table.");

Guests.unshift("hafiz");
Guests.splice(3, 0, "sarif");
Guests.push("Suriani");

for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]}, you are invited to dinner.`);
}


// Task 17
console.log("Apologies, the new dinner table won't arrive in time. Only two guests can be invited.");

while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let i = 0; i < Guests.length; i++) {
    console.log(`Dear ${Guests[i]}, you are still invited to dinner.`);
}

while (Guests.length < 0){
    Guests.pop();
}
console.log(Guests);


// Task 18

let placesToVisit = ["Japan", "Italy", "Australia", "Brazil", "Canada"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("Alphabetical Order:");
console.log(placesToVisit.slice().sort());

console.log("Original Order (2):");
console.log(placesToVisit);

console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());

console.log("Original Order (3):");
console.log(placesToVisit);


// Task 19

console.log(`We are inviting ${Guests.length} people to dinner.`);


// Task 20

// let mountains = ["Everest", "K2", "Kangchenjunga", "Matterhorn"];
// for(let i = 1 ; i < mountains.length ; i++){
    
// }