// Contains schema for character_food
const INVENTORY = require("./inventory-schema");
const FOOD = require("./food-schema");

const TABLE_NAME = "character_food";

const COLS = {
    FOOD_ID: FOOD.COLS.FOOD_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.FOOD_ID} ${COLS.CHARACTER_ID}, ${COLS.INVENTORY_ID}) VALUES ($1, $2, $3)`;

let generateValues= () => {
    let foodID;
    let characterId;
    let inventoryId;

    return [foodId, characterId, inventoryId];
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