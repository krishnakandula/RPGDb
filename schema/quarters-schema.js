// Contains schema for quarters
const BARRACKS = require("./barracks-schema.js");

const TABLE_NAME = "quarters";

const COL = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    QUARTERS_ID: "quarters_id",
    QUARTER_MASTER: "quarter_master"
};

module.exports = {
    TABLE_NAME,
    COLS
};