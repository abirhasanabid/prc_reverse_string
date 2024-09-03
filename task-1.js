/**
 * Task: Write a simple loop to reverse this string and store the result in a new string.
 */

let text = "hello";
let result = '';

for (const msz of text) {
    // console.log(msz);
    result = msz + result;
}
console.log(result);