const character = require('./character-schema');

//Contains the schema for the character relation
const TABLE_NAME = "character_skill";

const COLS = {
  CHARACTER_SKILL_ID: "skill_id",
  CHARACTER_ID = character.COLS.ID,

};

module.exports = {
  TABLE_NAME,
  COLS
};