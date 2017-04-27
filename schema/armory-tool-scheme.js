// Contains armory tool schema
const ARMORY = require("./armory-schema");
const TOOL = require("./tools-schema");

const TABLE_NAME = "armory_tool";

const COLS = {
    TOOLS_ID : TOOLS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};
