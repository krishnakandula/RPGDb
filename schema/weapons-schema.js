// Contains weapons schema
const generator = require("./../generator");

const TABLE_NAME = "weapons";

const COLS = {
    WEAPONS_ID : "weapons_id",
};

let insertWeaponsStatement = `INSERT INTO ${TABLE_NAME} (${COLS.WEAPONS_ID}) VALUES ($1)`;

let weapons = {
    name: `${TABLE_NAME} insert`,
    text: insertWeaponsStatement,
    values: [generator.generateId()]
};

module.exports = {
    weapons
};