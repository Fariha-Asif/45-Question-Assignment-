"use strict";
// Task 39:
Object.defineProperty(exports, "__esModule", { value: true });
/* City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
function city_country(city, country) {
    return `${city}, ${country}`;
}
let c1 = city_country("Karachi", "Pakistan");
let c2 = city_country("Islamabad", "Pakistan");
let c3 = city_country("Muree", "Pakistan");
console.log(c1);
console.log(c2);
console.log(c3);
