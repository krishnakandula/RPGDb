// Contains tools schema
const generator = require("./../generator");

const TABLE_NAME = "tools";

const COLS = {
    TOOLS_ID: "tools_id",
};

let tuples = [];

let insertToolsStatement = `INSERT INTO ${TABLE_NAME} (${COLS.TOOLS_ID}) VALUES ($1)`;

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertToolsStatement,
    value: []
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