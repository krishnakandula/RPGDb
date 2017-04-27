// Contains schema for character_tools
const INVENTORY = require("./inventory-schema");
const TOOLS = require("./tools-schema");

const TABLE_NAME = "character_tools";

const COLS = {
    TOOLS_ID: TOOLS.COLS.TOOLS_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_IDsc
};

module.exports = {
    TABLE_NAME,
    COLS
};