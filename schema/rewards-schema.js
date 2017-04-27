// Contains schema for rewards 
const MISSION = require("./mission-schema");

const TABLE_NAME = "rewards";

const COLS = {
    REWARDS_ID: "rewards_id",
    GOLD: "gold",
    EXP: "experience_points",
    MISSION_ID: MISSION.COLS.MISSION_ID
};

module.exports = {
    TABLE_NAME,
    COLS
};