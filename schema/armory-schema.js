// Schema table for armory relation
const generator = require("./../generator");

const MARKET = require("./market-schema");

const TABLE_NAME = "characters";

const COLS = {
    MARKET_ID: MARKET.COL.MARKET_ID,
    BLACKSMITH: "blacksmith",
}

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID} ${COLS.BLACKSMITH}) VALUES ($1, $2)`

let generateValues = () => {
    let marketID;
    let blacksmith = generator.generateRandomName();
    
    return [marketID, blacksmith];
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
    TABLE_NAME,
    generate
};
