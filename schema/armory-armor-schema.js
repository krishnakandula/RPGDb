// Contains armory_armor relation 
const ARMORY = require("./armory-schema");
const ARMOR = require("./armor-schema");
const generator = require("./../generator")

const TABLE_NAME = "armory_armor";

const COLS = {
    ARMOR_ID: ARMOR.COLS.ARMOR_ID,
    ARMORY_ID : ARMORY.COLS.ARMORY_ID,
    MARKET_ID: ARMORY.COLS.MARKET_ID
}

let insertArmoryArmorStatement = `INSERT INTO ${TABLE_NAME} 
                                    (${COLS.ARMOR_ID} ${COLS.ARMORY_ID} ${COLS.MARKET_ID})
                                    VALUES ($1, $2, $3)`;

let armory_armor = {
    name: `${TABLE_NAME} insert`,
    text: insertArmoryArmorStatement,
    value: 
}

module.exports = {
    TABLE_NAME,
    COLS
};
