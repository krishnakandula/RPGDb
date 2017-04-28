// Contains tools schema
const generator = require("./../generator");

const TABLE_NAME = "tools";

const COLS = {
    TOOLS_ID: "tools_id",
};

let insertToolsStatement = `INSERT INTO ${TABLE_NAME} 
                            (${COLS.TOOLS_ID})
                            VALUES ($1)`;

let tools = {
    name: `${TABLE_NAME} insert`,
    text: insertToolsStatement,
    value: [generator.generateId()]
};

module.exports = {
   tools
};
