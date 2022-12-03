const {
  solveDayOnePuzzle,
  testDayOnePuzzle,
  solveDayTwoPuzzle,
  testDayTwoPuzzle,
  solveDayThreePuzzle,
  testDayThreePuzzle,
} = require("./days/index.js");

const arg = process.argv.slice(2)[0];

function solvePuzzle() {
  switch (arg) {
    case "1":
      solveDayOnePuzzle();
      break;
    case "2":
      solveDayTwoPuzzle();
      break;
    case "3":
      solveDayThreePuzzle();
      break;
    default:
      console.log("Invalid day");
      break;
  }
}

function testPuzzle() {
  testDayOnePuzzle();
  testDayTwoPuzzle();
  testDayThreePuzzle();
}

if (arg === "test") {
  testPuzzle();
} else {
  solvePuzzle();
}
