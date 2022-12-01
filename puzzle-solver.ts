const { solveDayOne } = require("./days/index.ts");

const day = process.argv.slice(2)[0];

(function solvePuzzle() {
  switch (day) {
    case "1":
      solveDayOne();
      break;
    default:
      console.log("Invalid day");
      break;
  }
})();
