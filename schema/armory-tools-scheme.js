// Contains armory tools schema
const ARMORY = require("./armory-schema");
const TOOLS = require("./tools-schema");
const generator = require("./../generator");

const TABLE_NAME = "armory_tools";

const COLS = {
    TOOLS_ID : TOOLS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.TOOLS_ID} ${COLS.ARMORY_ID} ${COLS.MARKET_ID}) VALUES ($1, $2, $3)`;

let generateStatement = () => {
    let toolsID;
    let armoryID;
    let marketID;

    return [toolsID, armoryID, marketID];
}

let armory_tool = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    value: generateStatement()
};


module.exports = {
    armory_tool
};
