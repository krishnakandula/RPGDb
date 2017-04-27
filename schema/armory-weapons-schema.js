// Contains armory weapon schema
const ARMORY = require("./armory-schema");
const TOOLS = require("./weapons-schema");

const TABLE_NAME = "armory_weapon";

const COLS = {
    WEAPONS_ID : WEAPONS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};
