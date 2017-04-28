//Contains the schema for the potion relation
const generator = require("./../generator");
const TABLE_NAME = "potion";

const COLS = {
	POTION_ID: "potion_id",
}

let insertFoodStatement = `INSERT INTO ${TABLE_NAME} (${COLS.POTION_ID}) VALUES ($1)`;

let potion = {
  name: `${TABLE_NAME} insert`,
  text: insertFoodStatement,
  values: [generator.generateId()]
}

module.exports = {
  potion
};
