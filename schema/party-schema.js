// Contains schema for party

const generator = require('./../generator');
const partyNames = require('./../data/names').party;

const TABLE_NAME = "party";

let tuples = [];

const COLS = {
    PARTY_NAME: "party_name",
    PARTY_ID: "party_id"
};

let insertPartyStatement = `INSERT INTO ${TABLE_NAME} (${COLS.PARTY_NAME} ${COLS.PARTY_ID}) VALUES ($1, $2)`

/**
 *
 * @returns {[*,*]}
 */
let generateStatement = () => {
    //Generate id
    let id = generator.generateId();
    //Generate name
    let name = generator.generateRandomPartyName();
    return [name, id];
}

/**
 *
 * @type {{name: string, text: string, values: (*)[]}}
 */
let preparedStatement = {
    name: `${TABLE_NAME} insert statement`,
    text: insertPartyStatement,
    values: []
};

let generateValues = () => {
    let name = generator.pickRandomEntryFromArray(partyNames);
    let id = generator.generateId();

    return [name, id];
}

let generate = () => {
    preparedStatement.value = generateValues();
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
   TABLE_NAME,
   COLS,
   tuples,
   generate
};