// Contains schema for quest
const MISSION = require("./mission-schema");
const generator = require("./../generator");


const TABLE_NAME = "quest";

const COLS = {
    MISSION_ID: MISSION.COLS.MISSION_ID,
    QUEST_NAME: "quest_name",
    QUEST_GIVER: "quest_giver",
    LOCATION: "location",
    DEADLINE: "deadline"
};

let unique = (name) => {
    let u = generator.generateRandomName();
    while (name === u)
        u = generator.generateRandomName();
    return u;
}