const names = require('./data/names');
const uuid = require('uuid');

const MAX_EXP = 100;
const MIN_EXP = 0;

const MAX_HP = 1000;
const MIN_HP = 0;

/**
 * Generates insert statements for the character relation
 */
let generateCharacterInsertStatement = () => {
    //Generate random id
    //Generate random name
    let name = generateRandomName();
    //Generate random sex
    let sex = generateRandomSex();
    //Generate random exp
    let exp = getRandomNumber(MIN_EXP, MAX_EXP);
    //Generate random hp
    let hp = getRandomNumber(MIN_HP, MAX_HP);

    return []
};

let generateRandomSex = () => {
    min = 0;
    max = 100;
    range = max - min;

    rand = parseInt((Math.random() * range) + min, 10);

    //TRUE = Male
    //FALSE = Female
    if(rand > 50)
        return "TRUE";
    return "FALSE";
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
    generateCharacterInsertStatements
};