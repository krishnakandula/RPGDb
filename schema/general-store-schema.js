//Contains the schema for the general store relation
const generator = require('./../generator');
const MARKET = require("./market-schema");

const TABLE_NAME = "general-store";

const COLS = {
    MARKET_ID: MARKET.COLS.MARKET_ID,
    STORE_KEEPER: "store_keeper"
};

let insertGeneralStoreStatement =
    `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID}, ${COLS.STORE_KEEPER}) VALUES ($1, $2)`;

let generateStatement = () => {
    let market_id = MARKET.tuples[0].values[0];
    let store_keeper = generator.generateRandomName();

    return [market_id, store_keeper];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertGeneralStoreStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    generate
};