// Contains schema for colosseum
const MISSION = require("./mission-schema");

const TABLE_NAME = "colosseum";

const COLS = {
    MISSION_ID: MISSIONS.COLS.MISSION_ID,
    ADMISSION_FEE: "admission_fee",
    DATE: "fight_date_and_time",
};

module.exports = {
    TABLE_NAME,
    COLS
};