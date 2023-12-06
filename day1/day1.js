const fs = require("fs");

const input = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

const integerRegex = /[0-9]/g;

//Part 2
var numberMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const wordRegex = /one|two|three|four|five|six|seven|eight|nine/g;


var calibrationValuePositions = [];
var calibrationValues = [];

for (let i = 0; i < input.length; i++) {
  //match all possible integers available in each string
  calibrationValuePositions.push(input[i].match(integerRegex));
  console.log(calibrationValuePositions);
  //concatenate first and last integer of each string
  calibrationValues.push(
    calibrationValuePositions[i][0].concat(
      "",
      calibrationValuePositions[i][calibrationValuePositions[i].length - 1]
    )
  );
}

var sum = 0;
for (let i = 0; i < calibrationValues.length; i++) {
  sum += parseFloat(calibrationValues[i]);
}
console.log(sum);

