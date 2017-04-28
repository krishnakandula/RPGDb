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

let generateStatement = () => {
    let marketID;
    let armoryID = generator.generateId();
    let blacksmith = generator.generateRandomName();
    
    return [marketID, armoryID, blacksmith];
}

let armory = {
    name: `${TABLE_NAME} insert`,
    text: insertStatement,
    value: generateStatement()
};
  
module.exports = {
    armory
};
