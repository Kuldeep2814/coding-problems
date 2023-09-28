// Collect books from array of objects and 
// return collection of books as an array

let friends = [{
    name: 'Kuldeep',
    books: ['My journey', 'Scent of success'],
    age: 25
}, {
    name: 'Bob',
    books: ['Bright Ideas', '100 ways to learn'],
    age: 30
}, {
    name: 'Soumya',
    books: ['What a Life', 'Happiness around you'],
    age: 32
}]

let result = friends.reduce((pre, curr) => {
    return [...pre, ...curr.books]
}, []);

console.log(result);