const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;

const johnBMI = johnWeight / (johnHeight * johnHeight);

console.log(markBMI, johnBMI);

const markHeigherBMI = markBMI > johnBMI;

console.log(markHeigherBMI);

if (markHeigherBMI) {
  console.log(`Marks BMI ${markBMI} is higher than Johns BMI ${johnBMI}`);
} else {
  console.log(`Johns BMI ${johnBMI} is heigher than Marks BMI ${markBMI}`);
}
