const Marq = {
  firstName: "Marques",
  lastName: "Carter",
  birthYear: 1996,
  job: "Engineer",
  friends: ["Nicole", "Stef", "Jesse"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2023 - this.birthYear;
  },
};

console.log(Marq);

console.log(Marq.lastName);
console.log(Marq["lastName"]);

const namekey = "Name";

console.log(Marq["first" + namekey]);
console.log(Marq["last" + namekey]);

// const prompt = require("prompt-sync")();

// const interestedin = prompt(`What do you want to know about Marq?`);

// console.log(Marq[interestedin]);

Marq.location = "Trinidad";
Marq["instagram"] = "_iamAlpha";

console.log(Marq);

console.log(
  `${Marq.firstName} has ${Marq.friends.length} friends, and his best friend is ${Marq.friends[1]} `
);

console.log(Marq.calcAge());
console.log(Marq.calcAge(Marq.birthYear));
console.log(Marq);
