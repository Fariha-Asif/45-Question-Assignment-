// Task 3:
/* Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let personName : string = "Faraz";
console.log(personName);


let upperCaseName : string = "fAraZ";
console.log(upperCaseName.toUpperCase());

let lowerCaseName : string = "FARAZ";
console.log(lowerCaseName.toLowerCase());

let titleCaseName : string = "faRaz";
console.log(titleCaseName.charAt(0).toUpperCase() + titleCaseName.slice(1,titleCaseName.length).toLowerCase());

