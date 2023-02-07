const firstName = "Marques";
const lastName = "Carter";
const job = "Telecom Engineer";

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

const bio = `Hi, my name is ${firstName} ${lastName}. I am a ${job} .`;

console.log(bio);

const now = 2023;

const ageMarq = now - 1996;
const ageNicole = now - 1995;

// const ageMarq = 2023 - 1996;
// const ageNicole = 2023 - 1995;

// Math Operators
console.log(ageMarq);
console.log(ageNicole);
console.log(ageMarq, ageNicole);
console.log(ageNicole / 2);
console.log(ageMarq * 2);

// Comparison Operator
console.log(ageNicole > ageMarq);
console.log(ageMarq >= 19);
console.log(ageNicole <= 18);

// Assingmnet Operators
let x = 10 + 5;
x += 10;
x *= 2;
x++;
x--;
x--;
console.log(x);
