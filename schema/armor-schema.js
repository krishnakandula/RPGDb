// Contains the armor schema 
const generator = require("./../generator");

const TABLE_NAME = "armor";

const COLS = {
    ARMOR_ID: "armor_id",
}

let insertArmorStatement = `INSERT INTO ${TABLE_NAME} (${COLS.ARMOR_ID}) VALUES ($1)`;

let armor = {
    name: `${TABLE_NAME} insert`,
    text: insertArmorStatement,
    values: [generator.generateId()]
};


module.exports = {
    armor
};