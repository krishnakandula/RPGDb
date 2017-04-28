// Schema table for armory relation
const generator = require("./../generator");

const MARKET = require("./market-schema");

const TABLE_NAME = "characters";

const COLS = {
    MARKET_ID: MARKET.COL.MARKET_ID,
    ARMORY_ID: "armory_id",
    BLACKSMITH: "blacksmith",
}

let insertStatement = `INSERT INTO ${TABLE_NAME} (${COLS.MARKET_ID} ${COLS.ARMORY_ID} ${COLS.BLACKSMITH}) VALUES ($1, $2, $3)`

let generateValues = () => {
    let marketID;
    let armoryID = generator.generateId();
    let blacksmith = generator.generateRandomName();
    
    return [marketID, armoryID, blacksmith];
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
