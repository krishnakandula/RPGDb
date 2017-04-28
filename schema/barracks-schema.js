// Contains schema for barracks
const generator = require("./../generator");

const TABLE_NAME = "barracks";

const COLS = {
    BARRACKS_ID: "barracks_id",
    BARRACKS_NAME: "barracks_name"
};

let insertBarracksStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.BARRACKS_NAME}) VALUES ($1, $2)`;                          

let generateValues = () => {
    let id = generator.generateId();
    let name;

    return [id, name];
}

let preparedStatement = {
        name: `${TABLE_NAME} insert`,
        text: insertBarracksStatement,
        values : []
    };

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate
};

