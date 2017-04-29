// Contains schema for mission
const generator = require("./../generator");
const PARTY = require("./party-schema");
const NUM_PARTIES = require("./../data/names").party.length;
const TABLE_NAME = "mission";

const COLS = {
    MISSION_ID: "mission_id",
    PARTY_ID: PARTY.COLS.PARTY_ID,
    DATE: "fight_date_and_time"
};

let tuples = [];

let insertMissionStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MISSION_ID}, ${COLS.PARTY_ID}, ${COLS.DATE}) VALUES ($1, $2, $3)`;

let generateStatement = () => {
	let mission_id = generator.generateId();
    let party_id = PARTY.tuples[generator.generateRandomNumber(0, NUM_PARTIES)].values[1];
    let jsDate = new Date();
    jsDate.setDate(jsDate.getDate() + generator.generateRandomNumber(1, 20));
    let sqlDate = jsDate.toISOString().slice(0, 19).replace('T', ' ');
    return [mission_id, party_id, sqlDate];
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

