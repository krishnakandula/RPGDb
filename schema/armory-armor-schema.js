// Contains armory_armor relation 
const ARMORY = require("./armory-schema");
const ARMOR = require("./armor-schema");
const generator = require("./../generator")

const TABLE_NAME = "armory_armor";

const COLS = {
    ARMOR_ID: ARMOR.COLS.ARMOR_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
}

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.ARMOR_ID} ${COLS.MARKET_ID}) VALUES ($1, $2)`;

let generateValues = () => {
    let armorID;
    let marketID;

    return [armorID, marketID];
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
