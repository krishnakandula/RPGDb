// Contains schema for rewards 
const MISSION = require("./mission-schema");
const generator = require("./../generator");
const TABLE_NAME = "rewards";

const COLS = {
    REWARDS_ID: "rewards_id",
    GOLD: "gold",
    EXP: "experience_points",
    MISSION_ID: MISSION.COLS.MISSION_ID
};

let tuples = [];

let insertRewardsStatement = `INSERT INTO ${TABLE_NAME} (${COLS.REWARDS_ID}, ${COLS.GOLD},
${COLS.EXP}, ${COLS.MISSION_ID}) VALUES ($1,$2,$3,$4)`;

let generateStatement = () => {
	let rewards_id = generator.generateId();
	let gold = generator.generateRandomNumber(10,500);
	let exp = generator.generateRandomNumber(1,3);
	let index = generator.generateRandomNumber(0, MISSION.tuples.length);
	let MISSION_ID = MISSION.tuples[index].values[0];

	return [rewards_id, gold, exp, MISSION_ID];
};

let preparedStatement = {
	name: `${TABLE_NAME} insert`,
	text: insertRewardsStatement,
	values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    COLS,
    generate,
    tuples
};