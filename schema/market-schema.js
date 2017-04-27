// Contains market schema
const CHARACTER = require("./character-schema");

const TABLENAME = "market";

const COLS = {
    MARKET_ID: "market_id",
    MARKET_NAME: "market_name",
    CHARACTER_ID: CHARACTER.COL.CHARACTER_ID
};

module.exports = {
    TABLENAME,
    COLS
};
