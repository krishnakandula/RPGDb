// Contains schema for character_joins_a_party
const CHARACTER = require("./character-schema");
const PARTY = require("./party-schema");

const TABLE_NAME = "character_joins_a_party";

const COLS = {
    CHARACTER_ID: CHARACTER.COLS.ID,
    PARTY_ID: PARTY.COLS.PARTY_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};