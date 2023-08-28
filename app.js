// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// const isAdult = people.some(function (person) {
//   const currentYear = (new Date()).getFullYear();
//   if (currentYear - person.year > 18) {
//     return true;
//   }
// });
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year > 18;
})
console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?
const areAllAdult = people.every(person => {
    const currentYear = (new Date()).getFullYear;
    return currentYear - person.year > 18;
})

console.log({ areAllAdult })

// Array.proptotype.filter() // everyone 19 or older
const allAdult = people.filter(person => {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year > 18) return person;
})


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const someComment = comments.find(comment => comment.id === 823423);
console.log(someComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

// 1) first method

const commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(commentIndex);

// const deletedComment = comments.splice(commentIndex, 1);
// console.log(deletedComment);
// console.table(comments)

// 2) second method

const newComments = [
    ...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)
];

console.log(newComments)

  // comments are still the same