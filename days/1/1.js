const assert = require("assert");
const fs = require("fs");

function parseIntInput(filePath) {
  return fs
    .readFileSync(filePath, "utf-8")
    .replace(/\r/g, "")
    .split("\n\n")
    .map((group) => group.split("\n").map((it) => parseInt(it)));
}

function puzzleOne(input) {
  const parsedInput = parseIntInput(input);

  let topElf = 0;
  let currElf = 0;

  parsedInput.forEach((elf) => {
    elf.forEach((meal) => {
      currElf += meal;
    });

    topElf = currElf > topElf ? currElf : topElf;
    currElf = 0;
  });

  return topElf;
}

function puzzleTwo(input) {
  const parsedInput = parseIntInput(input);

  const topThree = [0, 0, 0];
  let currElf = 0;

  parsedInput.forEach((elf) => {
    elf.forEach((meal) => {
      currElf += meal;
    });

    const insertIndex = topThree.findIndex((it) => it < currElf);
    if (insertIndex !== -1) {
      topThree[insertIndex] = currElf;
    }

    topThree.sort((a, b) => a - b);
    currElf = 0;
  });

  const sum = topThree.reduce((acc, elf) => {
    return acc + elf;
  }, 0);
  return sum;
}

module.exports = {
  solveDayOne: function () {
    console.log(puzzleOne("./days/1/input.txt"));
    console.log(puzzleTwo("./days/1/input.txt"));
  },
  testDayOne: function () {
    assert.equal(puzzleOne("./days/1/input-test.txt"), 24000);
    assert.equal(puzzleTwo("./days/1/input-test.txt"), 45000);
  },
};
