// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// //-------------------------------------------First Way (Array.prototype.reverse())-----------------------------------------------//
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// //-------------------------------------------with one liner (Array.prototype.reverse())------------------------------------------//
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

//--------------------------------------------------Second Way (with for loop)---------------------------------------------------//
function reverse(str) {
    let reversed = '';

    for (let character of str){
        reversed = character + reversed;
    }

    return reversed;
}

// //--------------------------------------------------Third Way(with .reduce)---------------------------------------------------//
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');  
// }
