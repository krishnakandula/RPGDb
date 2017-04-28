// Contains armory weapon schema
const ARMORY = require("./armory-schema");
const TOOLS = require("./weapons-schema");
const generator = require("./../generator");

const TABLE_NAME = "armory_weapon";

const COLS = {
    WEAPONS_ID : WEAPONS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.WEAPONS_ID} ${COLS.MARKET_ID}) VALUES ($1, $2)`;

let generateValues = () => {
    let weaponsID;
    let marketID;

    return [weaponsID, marketID];
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
