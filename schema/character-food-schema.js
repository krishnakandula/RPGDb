// Contains schema for character_food
const INVENTORY = require("./inventory-schema");
const FOOD = require("./food-schema");

const TABLE_NAME = "character_food";

const COLS = {
    FOOD_ID: FOOD.COLS.FOOD_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};