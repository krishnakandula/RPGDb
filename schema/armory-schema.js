// Schema table for armory relation
const MARKET = require("./market_schema");

const TABLE_NAME = "characters";

const COLS = {
    MARKET_ID: MARKET.COL.MARKET_ID,
    ARMORY_ID: "armory_id",
    BLACKSMITH: "blacksmith",
}
  
module.exports = {
    TABLE_NAME,
    COLS
};
