// Contains schema for party_participates_in_mission 
const PARTY = require("./party-schema");
const MISSION = require("./mission-schema");

const TABLE_NAME = "party_participates_in_mission ";

const COLS = {
    PARTY_ID: PARTY.COLS.PARTY_ID,
    MISSION: MISSION.COLS.MISSION_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};