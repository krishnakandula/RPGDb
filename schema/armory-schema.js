// Schema table for armory relation
const generator = require("./../generator");

const MARKET = require("./market-schema");

const TABLE_NAME = "armory";

const COLS = {
    MARKET_ID: MARKET.COLS.MARKET_ID,
    BLACKSMITH: "blacksmith",
}

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID}, ${COLS.BLACKSMITH}) VALUES ($1, $2)`

let generateValues = () => {
    let marketId = MARKET.tuples[1]; //Get armory id from market
    let blacksmith = generator.generateRandomName();

    return [marketId, blacksmith];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateValues();
    return preparedStatement;
}
  
module.exports = {
    COLS,
    TABLE_NAME,
    generate
};
