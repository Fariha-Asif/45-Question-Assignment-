"use strict";
// Task 26:
Object.defineProperty(exports, "__esModule", { value: true });
/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
let alien_color = "green";
// if else statement: (if statement will run)
if (alien_color == "green") {
    console.log("Player has just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points");
}
// else statement will run:
alien_color = "red";
if (alien_color == "green") {
    console.log("Player has just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points");
}
