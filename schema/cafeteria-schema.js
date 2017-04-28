// Contains schema for cafeteria
const BARRACKS = require("./barracks-schema.js");
const generator = require("./../generator");

const TABLE_NAME = "cafeteria";

const COLS = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    CAFETERIA_ID: "cafeteria_id",
    HEAD_CHEF: "head_chef"
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.CAFETERIA_ID} ${COLS.HEAD_CHEF}) VALUES ($1, $2, $3)`;

let generateStatement = () => {
    let barracksID;
    let cafeteriaID = generator.generateId();
    let headChef = generator.generateRandomName();

    return [barracksID, cafeteriaID, headChef];
}

let cafeteria = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: generateStatement()
}

module.exports = {
    TABLE_NAME,
    COLS
};
