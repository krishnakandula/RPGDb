// Contains market schema
const generator = require('./../generator');
const names = require('./../data/names.json');

const TABLE_NAME = "market";

let tuples = [];

const COLS = {
    MARKET_ID: "market_id",
    MARKET_NAME: "market_name",
};

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID} ${COLS.MARKET_NAME}) VALUES ($1, $2)`;

let generateStatement = () => {
    let id = generator.generateId();
    let name = generator.pickRandomEntryFromArray(names.market);

    return [id, name];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    tuples.push(preparedStatement);

    return preparedStatement;
}

//General store = 0, Armory = 1

module.exports = {
    COLS,
    TABLE_NAME,
    tuples,
    generate
};
