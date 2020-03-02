'use strict'
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function security(item) {
    return item !== "Lemon";
}
let safeFruits = fruitBasket.filter(security);



console.log(safeFruits);
console.log("My mom bought me a fruit basket, containing " + safeFruits + "!")