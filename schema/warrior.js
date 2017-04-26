/*
CREATE TABLE WARRIOR (
	Warrior_id INT NOT NULL
	,PRIMARY KEY (Warrior_id)
	,Stamina_points INT DEFAULT 100
	,Type_flag_1 BOOLEAN DEFAULT FALSE
	,Type_flag_2 BOOLEAN DEFAULT FALSE
);
*/

//Contains the schema for the warrior relation
const TABLE_NAME = "warrior";

const COLS = {
  ID: "warrior_id",
  STAMINA_POINTS: "Stamina_points"
  TYPE_FLAG_1: "Type_flag_1"
  TYPE_FLAG_2: "Type_flag_2"
};

module.exports = {
  TABLE_NAME,
  COLS
};