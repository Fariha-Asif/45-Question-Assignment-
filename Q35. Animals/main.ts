// Task 35:

/* Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

• Modify your program to print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet! */



let animals: string[] = ["Lion", "Tiger", "Leopards"];

for(let animal of animals) {
    console.log(animal);
    if (animal === "Lion"){
        console.log(`${animal} is a king of beasts.`)
    } else if(animal === "Tiger") {
        console.log(`${animal}is the largest cat in the feline family.`)
    } else 
    (console.log(`${animal} do not change their spots.`))
}

console.log("Any of these animals would make a great hunting sense!")