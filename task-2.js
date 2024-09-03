/**
 * Task: Use a for loop to reverse the string and store the reversed string in a new variable. Print the reversed string.
 */

let word = "JavaScript";
let rev = '';

for(let i = 0;i<word.length;i++){
    const newStr = word[i];
    rev = newStr + rev;
}
console.log(rev);