//Contains the schema for the warrior relation
const CHARACTER = require("./character-schema");

const TABLE_NAME = "warrior";

const COLS = {
  CHARACTER_ID: CHARACTER.COLS.ID,
  WARRIOR_ID: "warrior_id",
  STAMINA_POINTS: "stamina_points",
  TYPE_FLAG_1: "type_flag_1",
  TYPE_FLAG_2: "type_flag_2"
};

module.exports = {
  TABLE_NAME,
  COLS
};