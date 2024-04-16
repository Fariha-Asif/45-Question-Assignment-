"use strict";
// Name: Fariha Asif
// Date: 19-03-2024
Object.defineProperty(exports, "__esModule", { value: true });
// Task 18:
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
let placesNames = ["Madina", "Phalastin", "Khaana Kaaba", "London", "Paris"];
// Print your array in its original order.
// Print original Array:
console.log(placesNames);
//Print your array in alphabetical order without modifying the actual list.
// Print array in alphabetical order:
let alphabeticalOrder = ([...placesNames].sort());
console.log(alphabeticalOrder);
// Show that your array is still in its original order by printing it.
// Print original array:
console.log(`original:` + placesNames);
console.log(placesNames);
// Print your array in reverse alphabetical order without changing the order of the original list.
// Reverse Order:
let reverse = ([...placesNames].sort().reverse());
console.log(reverse);
// Show that your array is still in its original order by printing it again.
// Print original array:
console.log(`original:` + placesNames);
console.log(placesNames);
// Reverse the order of your list. Print the array to show that its order has changed.
//Print in Reverse Order:
let rev = (placesNames.reverse());
console.log(rev);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
//Print back Original:
console.log(rev.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Print in sorted order:
let sort = placesNames.sort();
console.log(sort);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Reverse Alphabetical Order:
console.log(sort.reverse());
