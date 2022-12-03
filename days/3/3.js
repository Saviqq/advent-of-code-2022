const assert = require("assert");
const fs = require("fs");

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function parseList(filePath) {
  return fs.readFileSync(filePath, "utf-8").replace(/\r/g, "").split("\n");
}

function puzzleOne(input) {
  const parsedInput = parseList(input);
  return parsedInput.reduce((acc, backpack) => {
    const firstHalf = backpack.substring(0, backpack.length / 2).split("");
    const secondHalf = backpack.substring(backpack.length / 2).split("");
    const wrongItem = firstHalf.find((firstIt) =>
      secondHalf.some((secondIt) => secondIt === firstIt)
    );

    let priority = 0;
    if (wrongItem.charCodeAt() >= 97) {
      priority = wrongItem.charCodeAt() - 96;
    } else {
      priority = 26 + wrongItem.charCodeAt() - 64;
    }

    return acc + priority;
  }, 0);
}

function puzzleTwo(input) {
  const parsedInput = parseList(input);

  let prioritySum = 0;
  for (let i = 0; i < parsedInput.length; i = i + 3) {
    const firstElf = parsedInput[i].split("");
    const secondElf = parsedInput[i + 1].split("");
    const thirdElf = parsedInput[i + 2].split("");

    const firstTwo = firstElf
      .filter((firstItems) =>
        secondElf.some((secondItems) => secondItems === firstItems)
      )
      .filter(onlyUnique);

    const badge = firstTwo.find((firstItems) =>
      thirdElf.some((secondItems) => secondItems === firstItems)
    );

    let priority = 0;
    if (badge.charCodeAt() >= 97) {
      priority = badge.charCodeAt() - 96;
    } else {
      priority = 26 + badge.charCodeAt() - 64;
    }

    prioritySum += priority;
  }
  return prioritySum;
}

module.exports = {
  solveDayThree: function () {
    console.log(puzzleOne("./days/3/input.txt"));
    console.log(puzzleTwo("./days/3/input.txt"));
  },
  testDayThree: function () {
    assert.equal(puzzleOne("./days/3/input-test.txt"), 157);
    assert.equal(puzzleTwo("./days/3/input-test.txt"), 70);
  },
};
