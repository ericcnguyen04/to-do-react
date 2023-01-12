// primitives
'hello'
1
2
3
1.9
true
// two strings are made, using the assignment operator
const stringOne = 'hello'
const stringTwo = stringOne + ' ' + 'world'
// console.log(stringOne, stringTwo)

// reference types, aka container types, do not have copies made when using the assignment operator '='
{}
[]

const arrayOne = [1, 2, 3, 4]
const arrayTwo = [...arrayOne]
arrayTwo.push('banana', 'taco')
console.log('arrayOne', arrayOne)
console.log('arrayTwo', arrayTwo)