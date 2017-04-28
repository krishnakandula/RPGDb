// Contains weapons schema
const generator = require("./../generator");

const TABLE_NAME = "weapons";

const COLS = {
    WEAPONS_ID : "weapons_id",
};

let insertWeaponsStatement = `INSERT INTO ${TABLE_NAME} (${COLS.WEAPONS_ID}) VALUES ($1)`;
let tuples = [];
let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertWeaponsStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = [generator.generateId()];
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    tuples,
    generate
};