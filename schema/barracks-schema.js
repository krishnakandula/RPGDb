// Contains schema for barracks
const generator = require("./../generator");
const barrackNames = require("./../data/names").barracks;


const TABLE_NAME = "barracks";

const COLS = {
    BARRACKS_ID: "barracks_id",
    BARRACKS_NAME: "barracks_name"
};

let insertBarracksStatement = `INSERT INTO ${TABLE_NAME} (${COLS.BARRACKS_ID} ${COLS.BARRACKS_NAME}) VALUES ($1, $2)`;                          

const id = generator.generateId();
let barracks = {
        name: `${TABLE_NAME} insert`,
        text: insertBarracksStatement,
        values : [id, barrack]
    };


console.log(barracks);

module.exports = {
    barracks
};

