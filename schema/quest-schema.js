// Contains schema for quest
const MISSION = require("./mission-schema");

const TABLE_NAME = "quest";

const COLS = {
    MISSION_ID: MISSION.COLS.MISSION_ID,
    QUEST_NAME: "quest_name",
    QUEST_GIVER: "quest_giver",
    LOCATION: "location",
    DEADLINE: "deadline"
};