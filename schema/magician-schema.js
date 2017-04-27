// Contains schema for magician
const CHARACTER = require("./character-schema");

const TABLE_NAME = "magician";

const COLS = {
    CHARACTER_ID: CHARACTER.COLS.ID,
    MAGICIAN_ID: "magician_id",
    MAGIC_POINTS: "magic_points",
    TYPE_FLAG_1: "type_flag_1"
};

module.exports = {
    TABLE_NAME,
    COLS
};