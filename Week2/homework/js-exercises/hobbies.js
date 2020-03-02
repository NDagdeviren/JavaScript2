'use strict'
const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
];

let list = document.createElement("ul");
document.body.appendChild(list);


function add(item) {
    let myLi = document.createElement("li");
    list.appendChild(myLi);
    myLi.innerText = item;
}

function makeList(array) {
    array.forEach(add);
}

makeList(myHobbies);