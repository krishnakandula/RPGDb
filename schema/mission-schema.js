// Contains schema for mission
const generator = require("./../generator")
const TABLE_NAME = "mission";

const COLS = {
    MISSION_ID: "mission_id",
};

let tuples = [];

let insertMissionStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MISSION_ID}) VALUES ($1)`;

let generateValues = () => {
	let mission_id = generator.generateId();
};

let preparedStatement = {
	name: `${TABLE_NAME} insert`,
	text: insertMissionStatement,
	values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    tuples,
    COLS,
    generate
};

