import chalk from 'chalk';
import randomColor from 'randomcolor';

const generatedColor = randomColor();

function coloredSquareInRandomColor() {
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 2.
    console.log(chalk.hex(generatedColor)('###############################'));
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with value of step 0.
    console.log(chalk.hex(generatedColor)('#####                     #####'));
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with values of step 0 through 2.
    console.log(
      chalk.hex(generatedColor)(`#####       ${generatedColor}       #####`),
    );
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with value of step 0.
    console.log(chalk.hex(generatedColor)('#####                     #####'));
  }
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 2.
    console.log(chalk.hex(generatedColor)('###############################'));
  }

  return;
}

function squareSpecifiedByUser(x) {
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 2.
    console.log(chalk.hex(x)('###############################'));
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with value of step 0.
    console.log(chalk.hex(x)('#####                     #####'));
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with values of step 0 through 2.
    console.log(chalk.hex(x)(`#####       ${x}       #####`));
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with value of step 0.
    console.log(chalk.hex(x)('#####                     #####'));
  }
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 2.
    console.log(chalk.hex(x)('###############################'));
  }

  return;
}

console.log(process.argv[2]);

let colorSpecifiedByUser = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

//this output logs a 31x9 box which is colored in any random color
console.log('\n');
console.log('box colored in a random color');
coloredSquareInRandomColor();

//this output logs a 31x9 box which is colored in different shade of the random color above
console.log('\n');
console.log(
  'box colored in a different shade of the color specifed by user input',
);

squareSpecifiedByUser(colorSpecifiedByUser);
