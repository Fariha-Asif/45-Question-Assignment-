"use strict";
// Task 44:
Object.defineProperty(exports, "__esModule", { value: true });
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */
function sandwiches(...items) {
    console.log("Sandwich Order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy your sandwich");
sandwiches("egg", "cheese");
sandwiches("extra cheese", "black pepper");
sandwiches("butter", "chicken");
