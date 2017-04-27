// Contains armory tools schema
const ARMORY = require("./armory-schema");
const TOOLS = require("./tools-schema");

const TABLE_NAME = "armory_tools";

const COLS = {
    TOOLS_ID : TOOLS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};
