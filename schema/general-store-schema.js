//Contains the schema for the general store relation
const generator = require('./../generator');
const MARKET = require("./market-schema");

<<<<<<< HEAD
//Contains the schema for the general store relation
const TABLE_NAME = 'general-store';

const COLS = {
    MARKET_ID: 'market_id',
    STORE_KEEPER: 'store_keeper'
=======
const TABLE_NAME = "general-store";

const COLS = {
    MARKET_ID: MARKET.COLS.MARKET_ID,
    STORE_KEEPER: "store_keeper"
>>>>>>> f2acc084102d1fe64ef8f7c8f2d2906eed5199be
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