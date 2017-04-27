// Contains schema for inventory
const CHARACTER = require("./character-schema");

const TABLE_NAME = "inventory";

const COLS = {
    INVENTORY_ID: "inventory_id",
    CHARACTER_ID: CHARACTER.COLS.ID,
    GOLD: "gold"
};

module.exports = {
    TABLE_NAME,
    COLS
};