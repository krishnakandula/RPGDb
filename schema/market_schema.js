// Contains market schema
const CHARACTER = require("./character_schema");

const TABLENAME = "market";

const COL = {
    MARKET_ID: "market_id",
    MARKET_NAME: "market_name",
    CHARACTER_ID: CHARACTER.COL.CHARACTER_ID
};

module.exports = {
    TABLENAME,
    COL
};
