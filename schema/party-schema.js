const generator = require('./../generator');

// Contains schema for party
const TABLE_NAME = "party";

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
    values: generateStatement()
};

console.log(preparedStatement.values);

module.exports = {
    preparedStatement
};