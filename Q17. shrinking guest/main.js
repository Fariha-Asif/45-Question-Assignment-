"use strict";
//Name: Fariha Asif
//Date: 16-03-2024
Object.defineProperty(exports, "__esModule", { value: true });
// Task 17:
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests. */
//Guest List:
let guestName = ['Asma Jahangir', 'Arfa Kareem', 'Samina Baig', 'Malala Yousufzai', 'Fatima Jinnah', 'Muneeba Mazari'];
/* Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner. */
// Add new print message:
console.log("I can invite only two people for dinner.");
/* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner. */
// Delete item one by one:
while (guestName.length > 2) {
    let removedGuest = guestName.pop();
    console.log(`Dear ${removedGuest}, Sorry I can't invite you for dinner.`);
}
/*  Print a message to each of the two people still on your list, letting them know they’re still invited. */
// Print message rest of two guest:
guestName.forEach((gName) => {
    console.log(`Dear ${gName}, You are still invited for dinner.`);
});
/* Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */
// Remove the rest of two and show an empty list:
guestName.splice(0, guestName.length);
console.log(guestName);
