const generator = require('./../generator');

//Contains the schema for the general store relation
const TABLE_NAME = "general-store";

const COLS = {
    MARKET_ID: "market_id",
    FOOD_ID: "food_id"
};

let insertStoreFoodStatement =
    `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID}, ${COLS.FOOD_D}) VALUES ($1, $2)`;

let generateStatement = () => {
    let market_id = generator.generateId();
    let food_id = generator.generateRandomName();

    return [market_id, food_id];
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