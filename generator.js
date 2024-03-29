const names = require('./data/names');
const uuid = require('uuid/v1');

let characterCount = 100;
let missionCount = 30;
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

/**
 * Convenience function so uuid does not need to be required
 * Generates a UUID
 * @returns {*}
 */
let generateId = () => {
    return uuid();
}

/**
 * Picks a random entry from a source array
 * @param {*} sourceArray 
 */
let pickRandomEntryFromArray = (sourceArray) => {
    let index = generateRandomNumber(0, sourceArray.length);

    return sourceArray[index];
}

let getCharacterIndex = () => {
    return characterCount--;
}

let getMissioncIndex = () => {
    return missionCount--;
}


module.exports = {
    generateRandomName,
    generateRandomNumber,
    generateRandomSex,
    generateRandomPartyName,
    generateId,
    pickRandomEntryFromArray,
    getCharacterIndex,
    getMissioncIndex
};