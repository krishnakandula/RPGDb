// Contains schema for character_potion
const INVENTORY = require("./inventory-schema");
const POTION = require("./potion-schema");

const TABLE_NAME = "character_potion";

const COLS = {
    POTION_ID: POTION.COLS.POTION_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.POTION_ID} ${COLS.CHARACTER_ID}, ${COLS.INVENTORY_ID}) VALUES ($1, $2, $3)`;

let generateValues= () => {
    let potionId;
    let characterId;
    let inventoryId;

    return [potionId, characterId, inventoryId];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
}

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
};

module.exports = {
    TABLE_NAME,
    generate
};