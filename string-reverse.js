// reverse 
// const greetings = 'Hello, how are you?';

// function reverseString(text) {
//     for (const letter of text) {
//         console.log(letter);
//     }
// }
// const reversed = reverseString(greetings);
// console.log(reversed);


// reverse change
const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        // console.log(letter);
        reverse = letter + reverse;
        console.log(reverse, letter);
    }
}
const reversed = reverseString(greetings);
console.log(reversed);