const assert = require("assert");
const fs = require("fs");

/**
 * - R P S
 * R 4 1 7
 * P 8 5 2
 * S 3 9 6
 */

const rulesOne = [
  [4, 1, 7],
  [8, 5, 2],
  [3, 9, 6],
];

/**
 * - L D W
 * R 3 4 8
 * P 1 5 9
 * S 2 6 7
 */

const rulesTwo = [
  [3, 4, 8],
  [1, 5, 9],
  [2, 6, 7],
];

function parseGuide(filePath) {
  return fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) =>
      line.split(" ").map((it) => {
        return it.charCodeAt() <= 67
          ? it.charCodeAt() - 65
          : it.charCodeAt() - 88;
      })
    );
}

function puzzleOne(input) {
  const parsedInput = parseGuide(input);

  return parsedInput.reduce((acc, round) => {
    return acc + rulesOne[round[1]][round[0]];
  }, 0);
}

function puzzleTwo(input) {
  const parsedInput = parseGuide(input);

  return parsedInput.reduce((acc, round) => {
    return acc + rulesTwo[round[0]][round[1]];
  }, 0);
}

module.exports = {
  solveDayTwo: function () {
    console.log(puzzleOne("./days/2/input.txt"));
    console.log(puzzleTwo("./days/2/input.txt"));
  },
  testDayTwo: function () {
    assert.equal(puzzleOne("./days/2/input-test.txt"), 15);
    assert.equal(puzzleTwo("./days/2/input-test.txt"), 12);
  },
};
