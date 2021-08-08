// names
// const names = ['shova', 'ome', 'nico', 'mahi', 'kona', 'himi', 'kobita', 'kona', 'poli', 'shova', 'ome', 'mariya', 'himi'];
// function removeDuplicate(names) {
//     const unique = [];
//     // for (let i = 0; i < names.length; i++) {
//     //     const element = names[i];
//     //     console.log(element);
//     // }
//     for (const element of names) {
//         console.log(element);
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// numbers
const numbers = [23, 45, 76, 98, 24, 12, 54, 90, 24, 78, 90, 23, 65, 76, 54, 98];
function removeDuplicate(numbers) {
    const unique = [];
    for (const element of numbers) {
        // console.log(element);
        if (unique.indexOf(numbers) == -1) {
            unique.push(numbers);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);