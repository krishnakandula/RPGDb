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

let formattedBarrackNames = [`${barrackNames[0]} Cafeteria`, `${barrackNames[1]} Infirmary`, `${barrackNames[2]} Quarters`]

let generateValues = () => {
    let id = generator.generateId();

    // Generate Names for each barrack specialization 
    let name = formattedBarrackNames[0];
    formattedBarrackNames = formattedBarrackNames.splice(0,1);
    
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
    COLS,
    tuples,
    generate
};

