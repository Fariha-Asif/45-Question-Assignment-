// Task 43:

/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name. */

const magicians: string[] = ["Roger Lapin", "David Copperfield", "Paul Daniels", "David Blaine", "Derren Brown"];

function show_magicians(magicians:string[]){
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians:string[]){
    let great_magicians = magicians.map((magician) => {
        return `The Great ${magician}`
    })
    return great_magicians;
}

console.log("Original magicians:");
(show_magicians(magicians));

let great_magicians = make_great([...magicians]);

console.log("Great Added Magicians:");
show_magicians(great_magicians);



