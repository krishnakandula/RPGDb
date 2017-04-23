const character = require("../schema/character-schema");

let insertStatement = `INSERT INTO ${character.TABLE_NAME} 
                        (${character.COLS.ID}, ${character.COLS.NAME}, ${character.COLS.SEX}, ${character.COLS.EXP}, ${character.COLS.HP}) 
                        VALUES ($1, $2, $3, $4, $5)`;

//Prepared statement
const sample = {
  name: "sample",
  text: insertStatement,
  values: []
};

module.exports = {
  sample
};
