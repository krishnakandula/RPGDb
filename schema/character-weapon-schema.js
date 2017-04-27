// Contains schema for character_weapon
const INVENTORY = require("./inventory-schema");
const WEAPONS = require("./weapons-schema");

const TABLE_NAME = "character_weapon";

const COLS = {
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    WEAPONS_ID: WEAPONS.COLS.WEAPONS_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};