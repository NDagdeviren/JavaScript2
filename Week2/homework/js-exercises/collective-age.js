'use strict'
const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];
/* Write a program that calculates the combined age of every member
Make use of the map function to get the ages
It should contain a function that takes a callback
The callback adds all the ages together and returns the number
The mainfunction should log the string "The collective age of the HYF team is: [number]"to the console, and afterwards
return the number */

function getAges(object) {
    return object.age;
}

function sum(total, newNumber) {
    return total + newNumber;
}

function mainFunction() {
    const ages = hackYourFutureMembers.map(getAges);
    const totalAge = ages.reduce(sum);
    console.log(`The collective age of the HYF team is: ${totalAge}`);
}

mainFunction();