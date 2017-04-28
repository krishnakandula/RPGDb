const generator = require('./../generator');

//Contains the schema for the general store relation
const TABLE_NAME = "general-store";

const COLS = {
    MARKET_ID: "market_id",
    STORE_KEEPER: "store_keeper"
};

let insertGeneralStoreStatement =
    `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID}, ${COLS.STORE_KEEPER}) VALUES ($1, $2)`;

let generateStatement = () => {
    let market_id = generator.generateId();
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