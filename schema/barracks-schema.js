// Contains schema for barracks
const generator = require("./../generator");
const barrackNames = require("./../data/names").barracks;

const TABLE_NAME = "barracks";

let tuples = [];

const COLS = {
    BARRACKS_ID: "barracks_id",
    BARRACKS_NAME: "barracks_name"
};

let insertBarracksStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.BARRACKS_NAME}) VALUES ($1, $2)`;                          

let tuples = ["Cafteria", "Infirmary", "Quarters"]

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
    tuples.push(preparedStatement);

    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    tuples,
    generate
};

