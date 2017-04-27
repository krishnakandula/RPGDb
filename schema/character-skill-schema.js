// Contains character skill chema
const CHARACTER = require("./character-schema");

const TABLE_NAME = "character_skill";

const COLS = {
    SKILL_ID: "skill_id",
    CHARACTER_ID: CHARACTER.COLS.CHARACTER_ID,
};

module.exports = {
    TABLE_NAME,
    COLS
};