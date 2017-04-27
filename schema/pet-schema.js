// Contains schema for pet
const CHARACTER = require("./character-schema");

const TABLE_NAME = "pet";

const COLS = {
    PET_ID: "pet_id",
    CHARACTER_ID: CHARACTER.COLS.ID,
    PET_NAME: "pet_name",
    HEALTH_POINTS: "health_points"
};

module.exports = {
    TABLE_NAME,
    COLS
};