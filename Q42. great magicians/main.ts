// Task 42:

/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

function show_magicians(magicians:string[]):void {
    
    for (let magician of magicians){
        console.log(magician);
    }
}

function make_Great(magicians: string[]): void {

    for (let i=0; i<magicians.length; i++){
        console.log(magicians[i] += "the Great")
    }
}
let magicians: string[] = ["Roger Lapin", "David Copperfield", "Paul Daniels", "David Blaine", "Derren Brown"];
make_Great(magicians);
show_magicians(magicians);

