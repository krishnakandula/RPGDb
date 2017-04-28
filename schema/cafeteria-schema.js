// Contains schema for cafeteria
const BARRACKS = require("./barracks-schema.js");
const generator = require("./../generator");

const TABLE_NAME = "cafeteria";

const COLS = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    HEAD_CHEF: "head_chef"
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.HEAD_CHEF}) VALUES ($1, $2)`;

let generateValues = () => {
    let barracksID = BARRACKS.tuples[0].values[0];
    let headChef = generator.generateRandomName();

    return [barracksID, headChef];
}

let preparedStatement = {
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
