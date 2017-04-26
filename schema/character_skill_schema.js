// Contains character skill chema
const CHARACTER = require("./character_schema");

const TABLENAME = "character_skill";

const COLS = {
    SKILL_ID: "skill_id",
    CHARACTER_ID: CHARACTER.COLS.CHARACTER_ID,
};

module.exports = {
    TABLENAME,
    COLS
};