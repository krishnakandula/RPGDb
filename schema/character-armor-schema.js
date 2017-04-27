// Contains schema for character_armor 
const INVENTORY = require("./inventory-schema");
const ARMOR = require("./armor-schema");

const TABLE_NAME = "character_armor";

const COLS = {
    ARMOR_ID: ARMOR.COLS.ARMOR_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};