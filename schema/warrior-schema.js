//Contains the schema for the warrior relation
const CHARACTER = require('./character-schema');
const MAX_STAMINA = require("./../data/constants").character.MAX_STAMINA;
const generator = require('./../generator');

const TABLE_NAME = 'warrior';

const COLS = {
  CHARACTER_ID: CHARACTER.COLS.ID,
  STAMINA_POINTS: 'stamina_points',
  TYPE_FLAG_1: 'type_flag_1',
  TYPE_FLAG_2: 'type_flag_2'
};

let insertWarriorStatment = `INSERT INTO ${TABLE_NAME} (${COLS.CHARACTER_ID}, ${COLS.STAMINA_POINTS}, ${COLS.TYPE_FLAG_1}, ${COLS.TYPE_FLAG_2}) VALUES ($1, $2, $3, $4)`;

let generateStatement = () => {
    let index = generator.getCharacterIndex();

    if (index > 0) 
        return;

    let character_id = CHARACTER.tuples[index].values[0];
    let stamina_points = generateRandomNumber(10, MAX_STAMINA);
    let type_flag_1 = generator.generateRandomSex();
    let type_flag_2 = generator.generateRandomSex();

    return [character_id, stamina_points, type_flag_1, type_flag_1];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertWarriorStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    return preparedStatement;
}

module.exports = {
  TABLE_NAME,
  generate
};