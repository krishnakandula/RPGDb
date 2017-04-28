// Contains schema for magician
const CHARACTER = require('./character-schema');
const generator = require('./../generator.js');

const TABLE_NAME = "magician";

const COLS = {
    CHARACTER_ID: CHARACTER.COLS.ID,
    MAGIC_POINTS: "magic_points",
    TYPE_FLAG_1: "type_flag_1"
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.CHARACTER_ID} ${COLS.MAGIC_POINTS} ${COLS.TYPE_FLAG_1}) VALUES ($1, $2, $3)`;

let preparedStatement = {
    name: 'insert',
    text: insertStatement,
    values: []
}

let generate = () => {
    let index = generator.generateId();

    // 
    if (index > 49) 
    return;

    let id  = CHARACTER.tuples[index].values[0];
    let magicPoints = generator.generateRandomNumber(10, 100);
    let flag = generator.generateRandomSex();

    return [id, magicPoints, flag];
}

module.exports = {
    TABLE_NAME,
    generate
};