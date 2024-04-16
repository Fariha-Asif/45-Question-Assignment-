"use strict";
// Task 41:
Object.defineProperty(exports, "__esModule", { value: true });
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
let magician_Names = ["Roger Lapin", "David Copperfield", "Paul Daniels", "David Blaine", "Derren Brown"];
function show_magicians() {
    for (let name of magician_Names) {
        console.log(name);
    }
}
show_magicians();
