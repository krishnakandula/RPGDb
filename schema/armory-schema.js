// Schema table for armory relation
const MARKET = require("./market_schema");

const TABLE_NAME = "characters";

const COLS = {
    ARMORY_ID: "armory_id",
    MARKET_ID: MARKET.COL.MARKET_ID,
    BLACKSMITH: "blacksmith",
}
  
module.exports = {
    TABLE_NAME,
    COLS
};
