// Contains schema for infirmary
const BARRACKS = require("./barracks-schema");
const generator = require("./../generator");

const TABLE_NAME = "infirmary";

const COLS = {
    HEAD_NURSE: "head_nurse",
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
};

let insertStatement = `INSERT INTO ${TABLE_NAME} ( ${COLS.HEAD_NURSE} ${COLS.BARRACKS_ID}) VALUES ($1, $2)`;

let generateValues = () => {
    let barracksID;
    let nurse = generator.generateRandomName();

    return [barracksID, nurse];
}

let infirmary = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: generateValues()
}

module.exports = {
    infirmary
};