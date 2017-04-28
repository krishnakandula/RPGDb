//Contains the schema for the food relation
const generator = require("./../generator");

const TABLE_NAME = "food";

const COLS = {
	FOOD_ID: "food_id",
}

let insertFoodStatement = `INSERT INTO ${TABLE_NAME} 
                                (${COLS.FOOD_ID})
                                VALUES ($1)`;

let food = {
	name: `${TABLE_NAME} insert`,
	text: insertFoodStatement,
	values: [generator.generatorId()]
};


module.exports = {
  food
};