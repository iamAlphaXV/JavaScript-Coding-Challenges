const nicole = {
  firstName: "Micheala",
  lastName: "Lee",
  birthYear: 1995,
  job: "Accountant",
  friends: ["Nadine", "Paige", "Rhea"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(nicole.calcAge());

function maynt(hasDriversLicense) {
  if (hasDriversLicense) {
    console.log("has a");
  } else {
    console.log("does not have");
  }
}

maynt();

console.log(
  `${nicole.firstName} ${nicole.lastName} is a ${nicole.age} year old ${
    nicole.job
  }.Her firends are: ${nicole.friends[0]}, ${nicole.friends[1]}, ${
    nicole.friends[2]
  }.She ${maynt()} her drivers license. `
);
