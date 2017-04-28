// Contains schema for quarters
const BARRACKS = require("./barracks-schema.js");
const generator = require("./../generator");

const TABLE_NAME = "quarters";

const COL = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    QUARTERS_ID: "quarters_id",
    QUARTER_MASTER: "quarter_master"
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.QUARTERS_ID} ${COLS.QUARTER_MASTER}) VALUES ($1, $2, $3)`;

let generateValues = () => {
    let barracksID;
    let quartersID = generator.generateId();
    let master = generator.generateRandomName();

    return [barracksID, quartersID, master];
}

let cafeteria = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: generateValues()
}

module.exports = {
    cafeteria
};