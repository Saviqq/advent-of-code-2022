const { getLineReader } = require("../../utils/index.ts");

async function puzzleOne() {
  const lineReader = getLineReader("./days/1/input.txt");

  let topElf = 0;
  let currElf = 0;

  for await (const line of lineReader) {
    const parsedLine = parseInt(line);

    if (!isNaN(parsedLine)) {
      currElf += parsedLine;
    } else {
      topElf = currElf > topElf ? currElf : topElf;
      currElf = 0;
    }
  }
  console.log(topElf);
}

async function puzzleTwo() {
  const lineReader = getLineReader("./days/1/input.txt");

  const topThree = [0, 0, 0];
  let currElf = 0;

  for await (const line of lineReader) {
    const parsedLine = parseInt(line);

    if (!isNaN(parsedLine)) {
      currElf += parsedLine;
    } else {
      const insertIndex = topThree.findIndex((it) => it < currElf);
      if (insertIndex !== -1) {
        topThree[insertIndex] = currElf;
      }

      topThree.sort((a, b) => a - b);
      currElf = 0;
    }
  }

  const sum = topThree.reduce((acc, elf) => {
    return acc + elf;
  }, 0);
  console.log(sum);
}

module.exports = async function solveDayOnePuzzle() {
  await puzzleOne();
  await puzzleTwo();
};
