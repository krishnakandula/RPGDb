// Contains armory_armor relation 
const ARMORY = require("./armory-schema");
const ARMOR = require("./armor-schema");

const TABLE_NAME = "armory_armor";

const COLS = {
    ARMOR_ID: ARMOR.COLS.ARMOR_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
}

module.exports = {
    TABLE_NAME,
    COLS
};
