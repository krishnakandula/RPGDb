// Contains market schema
const CHARACTER = require("./character-schema");
const generator = require('./../generator');
const names = require('./../data/names.json');

const TABLENAME = "market";

let tuples = [];

let getRandomCharacterTuple = () => {
    let index = generator.generateRandomNumber(0, CHARACTER.tuples.length);
    return CHARACTER.tuples[index];
}

const COLS = {
    MARKET_ID: "market_id",
    MARKET_NAME: "market_name",
    CHARACTER_ID: CHARACTER.COL.CHARACTER_ID
};

let insertStatement = `INSERT INTO ${TABLENAME} (${COLS.MARKET_ID} ${COLS.MARKET_NAME} ${COLS.CHARACTER_ID}) VALUES ($1, $2, $3)`;

let generateStatement = () => {
    let id = generator.generateId();
    let name = generator.pickRandomEntryFromArray(names.market);
    let characterId = getRandomCharacterTuple().CHARACTER_ID;

    return [id, name, characterId];
}

let preparedStatement = {
    name: `${TABLENAME} insert`,
    text: insertStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    tuples.push(preparedStatement);

    return preparedStatement;
}

module.exports = {
    TABLENAME,
    tuples,
    generate
};
