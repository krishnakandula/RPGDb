// Contains schema for character_armor 
const INVENTORY = require("./inventory-schema");
const ARMOR = require("./armor-schema");
const generator = require("./../generator");

const TABLE_NAME = "character_armor";

const COLS = {
    ARMOR_ID: ARMOR.COLS.ARMOR_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.ARMOR_ID} ${COLS.CHARACTER_ID}, ${COLS.INVENTORY_ID}) VALUES ($1, $2, $3)`;

let generateValues= () => {
    let armorId;
    let characterId;
    let inventoryId;

    return [armorId, characterId, inventoryId];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
}

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate
};