// Contains schema for cafeteria
const BARRACKS = require("./barracks-schema.js");

const TABLE_NAME = "cafeteria";

const COLS = {
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    CAFETERIA_ID: "cafeteria_id",
    HEAD_CHEF: "head_chef"
};

module.exports = {
    TABLE_NAME,
    COLS
};
