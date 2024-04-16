//Name: Fariha Asif
//Date: 16-03-2024

// Task 15:
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

//Guest List:
let guestName : string[] = ["Arfa Kareem", "Malala Yousufzai", "Fatima Jinnah"];

/* Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest who can’t make it. */

// The Guest who can't attend dinner:
let cantAttend : string = "Malala Yousufzai";
console.log(`${cantAttend} can't make it to dinner`);

/*  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. */

// Add new Guest in the list:
let newGuest : string = "Ayesha Farooq";
guestName[guestName.indexOf(cantAttend)] = newGuest

// Print a second set of invitation messages, one for each person who is still in your list.

// New Guest List:
guestName.forEach((guestName) => {
    console.log(`Dear ${guestName}, \nWould you like to join me for dinner?`)
})

