// Task 24:

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of 
the following: */

let car: string = "subaru";
let age: number = 25;
let array: number[] = [1, 2, 3, 4, 5];

// **string test**:
// test1: Equality test: (True)
console.log("Is car == 'subaru'? I predict True.");

console.log(car == 'subaru');

// test2: Strict equality test: (False)
console.log("Is car === 'Subaru'? I predict False.");

console.log(car === 'Subaru');

// test3: Inequality test: (True)
console.log("Is car != 'Toyota'? I predict True.");

console.log(car != 'Toyota');

// test4: Strict Inequality test: (False)
console.log("Is car !== 'subaru'? I predict False.");

console.log(car !== 'subaru');

//test5: lowercase test: (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");

console.log(car.toLowerCase() == 'subaru');

// test6: lowercase test: (False)
console.log("Is car.toLowerCase() != 'subaru'? I predict False.");

console.log(car.toLowerCase() != 'subaru');

//**Numerical Test:**

// test7: Equality Test: (True)
console.log("Is age == 25? I predict True");

console.log(age == 25);

// test8: Inequality Test: (False)
console.log("Is age != 25? I predict False");

console.log(age != 25);

// test9: greaterthan Test: (True)
console.log("Is age > 20? I predict True");

console.log(age > 20);

// test10: lessthan Test: (False)
console.log("Is age < 25? I predict False");

console.log(age < 25);

// test11: greaterthan Equalto Test: (True)
console.log("Is age >= 20? I predict True");

console.log(age >= 20);

// test12: Lessthan Equalto Test: (False)
console.log("Is age <= 20? I predict False");

console.log(age <= 20);

//** Logical operators:

// test13: OR (True):
console.log("Is age > 20 || age == 30? First statement is true and second is false so, I predict True");

console.log(age > 20 || age == 30);

// test14: AND (False):
console.log("Is age > 20 && age == 30? First statement is true and second is false so, I predict False");

console.log(age > 20 && age == 30);

//** Array Test: **

//test15: In array (True):

console.log("Is 3 in array? I predict True");

console.log(3 in array);

//test16: In array (False):

console.log("Is 6 in array? I predict False");

console.log(6 in array);




