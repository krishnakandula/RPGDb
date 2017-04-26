// Contains armory tool schema
const ARMORY = require("./armory_schema");
const TOOL = require("./tools_schema");

const TABLENAME = "armory_tool";

const COLS = {
    TOOLS_ID : TOOLS.COLS.TOOLS_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
};

module.exports = {
    TABLENAME,
    COLS
};
