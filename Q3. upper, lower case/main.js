"use strict";
// Task 3:
/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Faraz";
console.log(personName);
let upperCaseName = "fAraZ";
console.log(upperCaseName.toUpperCase());
let lowerCaseName = "FARAZ";
console.log(lowerCaseName.toLowerCase());
let titleCaseName = "faRaz";
console.log(titleCaseName.charAt(0).toUpperCase() + titleCaseName.slice(1, titleCaseName.length).toLowerCase());
