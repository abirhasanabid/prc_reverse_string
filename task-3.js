/**
 * Task: Use a while loop to reverse the string and store the result in a new string. Print the reversed string.
 */

let message = "coding";
let rev = '';

let i = 0;
while (i < message.length) {
    const newStr = message[i];
    rev = newStr + rev;
    i++
}
console.log(rev);