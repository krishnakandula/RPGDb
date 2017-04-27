const uuid = require('uuid/v1');

// Contains schema for party
const TABLE_NAME = "party";

const COLS = {
    PARTY_NAME: "party_name",
    PARTY_ID: "party_id"
};

let insertPartyStatement = `INSERT INTO ${TABLE_NAME}
                                (${COLS.PARTY_NAME} ${COLS.PARTY_ID})
                                VALUES ($1, $2)`

let preparedStatement = {
    name: `${TABLE_NAME} insert statement`,
    text: insertPartyStatement,
    values: []
};

let generateStatement = () => {
    //Generate id
    let id = uuid();
    //Generate name

}

module.exports = {
    TABLE_NAME,
    COLS
};