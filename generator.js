const names = require('./data/names');

/**
 * Generates insert statements for the character relation
 * @param {*} num 
 */
let generateCharacterInsertStatements = (num) => {
  while(num >= 0){
    //Generate random name
    //Generate random sex
    //
  }
};

/**
 * Generates a random name using the names.json data file
 * @return the selected name
 */
let generateRandomName = () => {
  index = getRandomNumber(0, names.length);

  return names[index];
};

/**
 * Generates a random number in a given range
 * @param {*} min 
 * @param {*} max 
 */
let getRandomNumber = (min, max) => {
  range = max - min;
  rand = (Math.random() * range) + min;

  //Cast to integer
  return parseInt(rand, 10);
}

module.exports = {

};