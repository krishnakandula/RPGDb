// Contains tools schema
const generator = require("./../generator");

const TABLE_NAME = "tools";

const COLS = {
    TOOLS_ID: "tools_id",
};

let insertToolsStatement = `INSERT INTO ${TABLE_NAME} (${COLS.TOOLS_ID}) VALUES ($1)`;

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertToolsStatement,
    value: []
};

let generate = () => {
    preparedStatement.values = generator.generateId();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate
};