// import { colorhex } from '@testgrandma/shortcuts';
// import

import chalk from 'chalk';
import randomColor from 'randomcolor';

const generatedColor = randomColor();

function square() {
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
    console.log(chalk.hex(generatedColor)('#####       #ff0000       #####'));
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

//this output logs a 31x9 box which is colored in any random color
console.log('\n');
console.log('box colored in a random color');
square();

//this output logs a 31x9 box which is colored in different shade of the random color above
console.log('\n');
console.log('box colored in a different shade of the random color');
square();

// console.log(chalk.hex('#DEADED').underline('Hello, world!'));
// colorhex(ff0000);
// console.log(chalk.hex('#DEADED')('Bold gray!'));

/* for (i=0 , i < 3) {
  console.log('###############################');
  i++;
}

console.log('
  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       #ff0000       #####
  #####                     #####
  ###############################
  ###############################
  ###############################
  ');*/
