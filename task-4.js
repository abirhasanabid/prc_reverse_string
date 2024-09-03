/**
 * Task: Reverse the entire sentence character by character, without using any built-in functions, and store the result in a new string. Print the reversed sentence.
 */


let sentence = "I love learning";

// for(let i = 0;i<sentence.length;i++){
//     console.log(sentence[i]);
// }

let rev = '';
for (let i = sentence.length - 1; i >= 0; i--) {
    const result = sentence[i];
    rev = result + rev;
}
console.log(rev);

// console.log(result);