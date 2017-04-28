// Contains armory tools schema
const ARMORY = require("./armory-schema");
const TOOLS = require("./tools-schema");
const generator = require("./../generator");

const TABLE_NAME = "armory_tools";

const COLS = {
    TOOLS_ID : TOOLS.COLS.TOOLS_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.TOOLS_ID} ${COLS.MARKET_ID}) VALUES ($1, $2)`;

let generateValues = () => {
    let toolsID;
    let marketID;

    return [toolsID, marketID];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
}


module.exports = {
   TABLE_NAME,
   generate
};
