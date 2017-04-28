// Contains schema for pet
const CHARACTER = require("./character-schema");

const TABLE_NAME = "pet";

const COLS = {
    PET_ID: "pet_id",
    CHARACTER_ID: CHARACTER.COLS.ID,
    PET_NAME: "pet_name",
    HEALTH_POINTS: "health_points"
};

let insertPetStatement = `INSERT INTO ${TABLE_NAME} (${COLS.PET_ID} ${COLS.CHARACTER_ID} ${COLS.PET_NAME} ${COLS.HEALTH_POINTS}) VALUES ($1,$2,$3,$4)`;

let pet = {
	name: `${TABLE_NAME} insert`,
	text: insertPetStatement,
	values: [generator.generatorId()]
};

module.exports = {
    pet
};