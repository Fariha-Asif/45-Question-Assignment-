// Task 43:

/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name. */

function addGreat(magicians: string[]): string[] {
    
    const great_magicians: string[] = [];
 
    for (const magician of magicians) {
       great_magicians.push(`${magician} the Great`);
    }

    return great_magicians;
}

const magicians: string[] = ["Roger Lapin", "David Copperfield", "Paul Daniels", "David Blaine", "Derren Brown"];

console.log("Original Magicians:");
console.log(magicians.join('\n'));

console.log("\nGreat Magicians:");
const great_magicians: string[] = addGreat(magicians);
console.log(great_magicians.join('\n'));