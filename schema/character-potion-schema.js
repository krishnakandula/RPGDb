// Contains schema for character_potion
const INVENTORY = require("./inventory-schema");
const POTION = require("./potion-schema");

const TABLE_NAME = "character_potion";

const COLS = {
    POTION_ID: POTION.COLS.POTION_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};