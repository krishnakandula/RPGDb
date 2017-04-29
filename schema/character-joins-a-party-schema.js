// Contains schema for character_joins_a_party
const CHARACTER = require("./character-schema");
const PARTY = require("./party-schema");
const generator = require('./../generator');

const TABLE_NAME = "character_joins_a_party";

const COLS = {
    CHARACTER_ID: CHARACTER.COLS.ID,
    PARTY_ID: PARTY.COLS.PARTY_ID
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.CHARACTER_ID}, ${COLS.PARTY_ID}) VALUES ($1, $2)`;

let generateValues= () => {
    let characterId;
    let partyId;

    return [characterId, partyId];
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