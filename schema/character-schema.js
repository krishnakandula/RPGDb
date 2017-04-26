//Contains the schema for the character relation
const TABLE_NAME = "character";

const COLS = {
  ID: "character_id",
  NAME: "character_name",
  SEX: "sex",
  EXP: "experience_points",
  HP: "hit_points"
};

module.exports = {
  TABLE_NAME,
  COLS
};