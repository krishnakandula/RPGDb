// Contains schema for infirmary
const BARRACKS = require("./barracks-schema");

const TABLE_NAME = "infirmary";

const COLS = {
    HEAD_NURSE: "head_nurse",
    BARRACKS_ID: BARRACKS.COLS.BARRACKS_ID,
    INFIRMARY_ID: "infirmary_id"
};

module.exports = {
    TABLE_NAME,
    COLS
};