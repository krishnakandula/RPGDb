// Contains armory weapon schema
const ARMORY = require("./armory_schema");
const TOOLS = require("./weapons_schema");

const TABLENAME = "armory_weapon";

const COL = {
    WEAPONS_ID : WEAPONS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

module.exports = {
    TABLENAME,
    COL
};
