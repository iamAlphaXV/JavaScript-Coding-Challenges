// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// const dolphinScoreAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

// console.log(dolphinScoreAvg);

// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// const koalaScoreAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// const Draw = koalaScoreAvg === dolphinScoreAvg;

// console.log(koalaScoreAvg);

// if (Draw) {
//   console.log("Its a draw!!!");
// } else if (dolphinScoreAvg > koalaScoreAvg) {
//   console.log("Dolphins have won the tournament");
// } else {
//   console.log("Koalas have won the tournament");
// }

// Bonus 1
// =====================================================================

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const dolphinScoreAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

console.log(dolphinScoreAvg);

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 123;

const koalaScoreAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

const Draw = koalaScoreAvg === dolphinScoreAvg;

console.log(koalaScoreAvg);

if (Draw) {
  console.log("Its a draw!!!");
} else if (dolphinScoreAvg > koalaScoreAvg && dolphinScoreAvg >= 100) {
  console.log("Dolphins have won the tournament");
} else if (koalaScoreAvg > dolphinScoreAvg && koalaScoreAvg >= 100) {
  console.log("Koalas have won the tournament");
}
