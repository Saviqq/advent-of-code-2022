const fs = require("fs");
const readline = require("readline");

exports.getLineReader = function (filePath) {
  const fileStream = fs.createReadStream(filePath);

  const reader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  return reader;
};
