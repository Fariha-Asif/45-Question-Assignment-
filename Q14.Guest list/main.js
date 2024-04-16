"use strict";
//Name: Fariha Asif
//Date: 16-03-2024
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestName = void 0;
// Task 14:
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
//Guest List:
let guestName = ["Arfa Kareem", "Malala Yousufzai", "Fatima Jinnah"];
exports.guestName = guestName;
guestName.forEach((name) => {
    console.log(`Dear ${name}, \nWould you like to join me for dinner?`);
});
