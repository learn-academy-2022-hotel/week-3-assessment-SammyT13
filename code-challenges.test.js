// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Test 1:

describe('fibSequence', () => {
  it('returns an array that length containing the numbers of the Fibonacci sequence.', () => {
    expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    expect(fibSequence(fibLength3)).toEqual('Please provided a term greater than 2.')
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// fibSequence
//   ✕ returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// ● fibSequence › returns an array that length containing the numbers of the Fibonacci sequence.

//   ReferenceError: fibSequence is not defined

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibLength3 = 2
// Expected output: 'Please provided a term greater than 2.'

// b) Create the function that makes the test pass.

// PSUEDOCODE
// Function Signature
// input: number
// output: array of numbers or a string if number 2 or less

// input: 6
// output: [1, 1, 2, 3, 5, 8]

// input: 10
// output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// input: 2
// output: 'Please provided a term greater than 2.'

// Process: create a function called fibSequence that takes in a parameter called n
// *** Side Note:
  // The Fibonacci Sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
  // The way it works: 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8...
  // So the sequence follows the sum of the two numbers before it, but remember 0 and 1 are always the first two numbers
  // Example: 1 + 2 = 3, 2 + 3 = 5, in the next sequence we would take the sum of 2 + 3, which is 5, then take the sum of 1 + 2, which is 3, then we would add 5 + 3, which equals 8
// Side Note End ****
// create an array intialized with 1, 1 (the second & third term of the Fibonacci series)
// create if statement
  // if number 2 or less provided return 'Please provided a term greater than 2.'
// For loop: 
  // use the push method to the fibSeries array with the sum of the two numbers before it
  // [i - 1] + [i - 2]
  // push variable into fibSeries array
// return fibSeries array
  

const fibSequence = (n) => {
  let fibSeries = [1, 1]

  if (n <= 2){
    return 'Please provided a term greater than 2.'
  }
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2])
  }
  return fibSeries
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// fibSequence
// ✓ returns an array that length containing the numbers of the Fibonacci sequence. (2 ms)

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Test 2:

describe('weeklyStudyMinutes', () => {
  it('returns an array of the values sorted from least to greatest', () => {
    expect(weeklyStudyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(weeklyStudyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// weeklyStudyMinutes
// ✕ returns an array of the values sorted from least to greatest

// ● weeklyStudyMinutes › returns an array of the values sorted from least to greatest

// ReferenceError: weeklyStudyMinutes is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// PSUEDOCODE:
// Function Signature
// input: object
// output: array of numbers

// input: const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// output: [15, 15, 20, 30, 30, 60, 90]

// input: const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// output: [10, 15, 20, 45, 60, 65, 100]

// Process: create a function called weeklyStudy minutes that takes in an object as its parameter and returns an array in asscending order
// Inside the function:
  // will use the Objects.values() method to return each value in object as an array
  // will also use the Array.sort method to sort values in asscending order
// 

const weeklyStudyMinutes = (object) => {
 let sortedWeeklyMinutes = Object.values(object).sort((a,b) => a - b)

 return sortedWeeklyMinutes
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// weeklyStudyMinutes
// ✓ returns an array of the values sorted from least to greatest (1 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('sumOfAcctTransactions', () => {
  it('returns an array of the accumulating sum or empty array should return an empty array', () => {
    expect(sumOfAcctTransactions(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumOfAcctTransactions(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumOfAcctTransactions(accountTransactions3)).toEqual([])
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// sumOfAcctTransactions
// ✕ returns an array of the accumulating sum or empty array should return an empty array (1 ms)
// ● sumOfAcctTransactions › returns an array of the accumulating sum or empty array should return an empty array
// ReferenceError: sumOfAcctTransactions is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

//PSUEDOCODE
// Function Signature
// input: an array of numbers or an empty array
// output: an array of numbers or an empty array

// input: [100, -17, -23, -9]
// output: [100, 83, 60, 51]

// input: [250, -89, 100, -96]
// output: [250, 161, 261, 165]

// input: []
// output: []

// Process: create a function named sumOfAcctTransactions, that takes in an array and returns an array of accumalting sum
// function parameter name: array
// create a variable called accumSum initialized at 0
// use the map method to iterate the array
// in the map method add the accumSum + value to accumalate the sum
// return accumSum

const sumOfAcctTransactions = (array) => {
  let accumSum = 0

  return array.map((value) => {
    accumSum = accumSum + value
    return accumSum
  })

}
// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// sumOfAcctTransactions
// ✓ returns an array of the accumulating sum or empty array should return an empty array (4 ms)
