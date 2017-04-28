// Contains the armor schema 
const generator = require("./../generator");

const TABLE_NAME = "armor";

const COLS = {
    ARMOR_ID: "armor_id",
}

let tuples = [];

let insertArmorStatement = `INSERT INTO ${TABLE_NAME} (${COLS.ARMOR_ID}) VALUES ($1)`;

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertArmorStatement,
    values: []
};

let generate = () => {
   preparedStatement.values = [generator.generateId()];
   tuples.push(preparedStatement);
   return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    tuples,
    generate
};