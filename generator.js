const names = require('./data/names');
const character = require('./schema/character-schema');
const uuid = require('uuid/v1');

/**
 *
 * @returns {*}
 */
let generateRandomSex = () => {
    let min = 0;
    let max = 100;
    let range = max - min;

    let rand = parseInt((Math.random() * range) + min, 10);

    //TRUE = Male
    //FALSE = Female
    if (rand > 50)
        return "TRUE";
    return "FALSE";
};

/**
 * Generates a random name using the names.json data file
 * @return the selected name
 */
let generateRandomName = () => {
    let index = generateRandomNumber(0, names.people.length);

    return names.people[index];
};

/**
 * Generates a random number in a given range
 * @param {*} min
 * @param {*} max
 */
let generateRandomNumber = (min, max) => {
    let range = max - min;
    let rand = (Math.random() * range) + min;

    //Cast to integer
    return parseInt(rand, 10);
}

/**
 *
 */
let generateRandomPartyName = () => {
    let index = generateRandomNumber(0, names.party.length);

    return names.party[index];
}

let generateId = () => {
    return uuid();
}


module.exports = {
    generateRandomName,
    generateRandomNumber,
    generateRandomSex,
    generateRandomPartyName,
    generateId
};