// Contains schema for character_tools
const INVENTORY = require('./inventory-schema');
const TOOLS = require('./tools-schema');

const TABLE_NAME = 'character_tools';

const COLS = {
    TOOLS_ID: TOOLS.COLS.TOOLS_ID,
    CHARACTER_ID: INVENTORY.COLS.CHARACTER_ID,
    INVENTORY_ID: INVENTORY.COLS.INVENTORY_ID
};

let insertCharacterToolStatement = `INSERT INTO ${TABLE_NAME} (${COLS.TOOLS_ID}, ${COLS.CHARACTER_ID}, ${COLS.INVENTORY_ID}) VALUES ($1, $2, $3)`

let generateStatement = () => {
	let tools_id;
	let character_id;
	let inventory_id;
}

let preparedStatement = {
	name: `${TABLE_NAME} insert`,
	text: insertCharacterToolStatement,
	values: []
}

let generate = () => {
    preparedStatement.values = generateStatement();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    COLS
};