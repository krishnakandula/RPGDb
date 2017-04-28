//Contains the schema for the food relation
const generator = require("./../generator");

const TABLE_NAME = "food";

let tuples = [];



const COLS = {
	FOOD_ID: "food_id",
}

let insertFoodStatement = `INSERT INTO ${TABLE_NAME} (${COLS.FOOD_ID}) VALUES ($1)`;

let preparedStatement = {
	name: `${TABLE_NAME} insert`,
	text: insertFoodStatement,
	values: []
};

let generate = () => {
    preparedStatement.values = [generator.generateId()];
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate,
    tuples
};