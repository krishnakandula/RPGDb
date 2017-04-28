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

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.WEAPONS_ID} ${COLS.ARMORY_ID} ${COLS.MARKET_ID}) VALUES ($1, $2, $3)`;

let generateStatement = () => {
    let weaponsID;
    let armoryID;
    let marketID;

    return [weaponsID, armoryID, marketID];
}

let armory_weapon = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    value: generateStatement()
};


module.exports = {
    armory_weapon
};
