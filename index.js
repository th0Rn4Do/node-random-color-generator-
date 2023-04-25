function square() {
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 4.
    console.log('###############################');
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 time, with values of step 0 through 4.
    console.log('#####                     #####');
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 times, with values of step 0 through 4.
    console.log('#####       #ff0000       #####');
  }
  for (let i = 0; i < 1; i++) {
    // Runs 1 times, with values of step 0 through 4.
    console.log('#####                     #####');
  }
  for (let i = 0; i < 3; i++) {
    // Runs 3 times, with values of step 0 through 4.
    console.log('###############################');
  }

  return;
}
//this output logs a 31x9 box which is colored in any random color
console.log('\n box colored in a random color');
square();

//this output logs a 31x9 box which is colored in different shade of the random color above
console.log('\n box colored in different shade of the random color');
square();

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
