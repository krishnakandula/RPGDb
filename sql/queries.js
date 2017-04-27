const character = require("../schema/character-schema");
const uuid = require('uuid');

let insertCharacterStatement = `INSERT INTO ${character.TABLE_NAME} 
                        (${character.COLS.ID}, ${character.COLS.NAME}, ${character.COLS.SEX}, ${character.COLS.EXP}, ${character.COLS.HP}) 
                        VALUES ($1, $2, $3, $4, $5)`;

//Prepared statement
let sample = {
    name: "sample",
    text: insertCharacterStatement,
    values: []
};

module.exports = {
    sample
};
