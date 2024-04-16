"use strict";
// Task 29:
Object.defineProperty(exports, "__esModule", { value: true });
/* Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let favourite_fruit = ["strawberry", "grapes", "banana"];
if (favourite_fruit.includes("grapes")) {
    console.log("You really like grapes.");
}
if (favourite_fruit.includes("mango")) {
    console.log("you don't like mango.");
}
if (favourite_fruit.includes("strawberry")) {
    console.log("You really like strawberry.");
}
if (favourite_fruit.includes("pineapple")) {
    console.log("you don't like pineapple.");
}
if (favourite_fruit.includes("banana")) {
    console.log("you really like banana.");
}
