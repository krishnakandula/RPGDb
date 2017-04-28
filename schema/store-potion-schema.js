const generator = require('./../generator');

//Contains the schema for the general store relation
const TABLE_NAME = "general-store";

const COLS = {
    MARKET_ID: "market_id",
    Potion_ID: "potion_id"
};

let insertStoreFoodStatement =
    `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID}, ${COLS.POTION_D}) VALUES ($1, $2)`;

let generateStatement = () => {
    let market_id = generator.generateId();
    let potion_id = generator.generateRandomName();

    return [market_id, potion_id];
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