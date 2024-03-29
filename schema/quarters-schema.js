// Contains schema for quarters
const BARRACKS = require("./barracks-schema.js");
const generator = require("./../generator");

const TABLE_NAME = "quarters";

const COL = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    QUARTER_MASTER: "quarter_master"
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.QUARTER_MASTER}) VALUES ($1, $2)`;

let generateValues = () => {
    let barracksID = BARRACKS.tuples[2].values[0];
    let quartersID = generator.generateId();
    let master = generator.generateRandomName();

    return [barracksID, master];
}

let quarters = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
}

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate
};
