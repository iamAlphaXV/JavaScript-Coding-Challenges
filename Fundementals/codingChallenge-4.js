// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// §
// Data 1: Test for bill values 275, 40 and 430
// Hints:
// §To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// §Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

// =====================================================================
//                                  If/Else

const bill = 275;

const tipA = bill * 0.15;

const tipB = bill * 0.2;

if (bill >= 50 && bill <= 300) {
  console.log(`Tip is ${tipA}`);
} else {
  console.log(`Tip is ${tipB}`);
}

bill >= 50 && bill <= 300
  ? console.log(`Tip is ${tipA}`)
  : console.log(`Tip is ${tipB}`);

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? tipA : tipB
  } and the total value ${bill + (bill >= 50 && bill <= 300 ? tipA : tipB)} `
);
