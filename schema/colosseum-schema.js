// Contains schema for colosseum
const MISSION = require("./mission-schema");
const generator = require("./../generator");

const TABLE_NAME = "colosseum";

const COLS = {
    MISSION_ID: MISSIONS.COLS.MISSION_ID,
    ADMISSION_FEE: "admission_fee",
    DATE: "fight_date_and_time",
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MISSION_ID}, ${COLS.ADMISSION_FEE}, ${COLS.DATE}) VALUES ($1, $2, $3)`;

let colosseum = {
	name: 'insert',
	text: insertStatement,
	values: []
};

let generate = () => {
	let index = generator.gen
	let missionID = MISSIONS.
}

module.exports = {
    TABLE_NAME,
    COLS
};