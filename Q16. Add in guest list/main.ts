//Name: Fariha Asif
//Date: 16-03-2024

// Task 16:

/* More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner. */

/* Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.*/

//Guest List:
let guestName : string[] = ["Arfa Kareem", "Malala Yousufzai", "Fatima Jinnah"];


// Add statement of bigger dinner table is available:
guestName.forEach((guestName) => {
    console.log(`Dear ${guestName}, I found new bigger dinner table.`)
})

/* Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 Print a new set of invitation messages, one for each person in your list. */
 
// Add new Guest at the beginning:
guestName.unshift("Asma Jahangir");

console.log(guestName);

// Add new Guest at the middle:
guestName.splice(2,0,"Samina Baig");

console.log(guestName);

// Add new Guest at the End:
guestName.push("Muneeba Mazari");

console.log(guestName);

//Print new message:

guestName.forEach((guestName) => {
console.log(`Dear ${guestName}, would you like to eat dinner with me.`)
})
