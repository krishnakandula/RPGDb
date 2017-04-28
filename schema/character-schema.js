const generator = require('./../generator');
const {character} = require('./../data/constants');

//Contains the schema for the character relation
const TABLE_NAME = "character";

let tuples = [];

const COLS = {
    ID: "character_id",
    NAME: "character_name",
    SEX: "sex",
    EXP: "experience_points",
    HP: "hit_points",
    MARKET_ID: "market_id"
};

let insertCharacterStatement =
    `INSERT INTO ${TABLE_NAME} (${COLS.ID}, ${COLS.NAME}, ${COLS.SEX}, ${COLS.EXP}, ${COLS.HP} ${COLS.MARKET_ID}) VALUES ($1, $2, $3, $4, $5, $6)`;

let generateStatement = () => {
    let id = generator.generateId();
    let name = generator.generateRandomName();
    let sex = generator.generateRandomSex();
    let exp = generator.generateRandomNumber(character.MIN_EXP, character.MAX_EXP);
    let hp = generator.generateRandomNumber(character.MIN_HP, character.MAX_HP);
    let market_id;

    return [id, name, sex, exp, hp, market_id];
}

let preparedStatement = {
    name: `${TABLE_NAME} insert`,
    text: insertCharacterStatement,
    values: []
};

let generate = () => {
    preparedStatement.values = generateStatement();
    tuples.push(preparedStatement);
    return preparedStatement;
}

module.exports = {
    TABLE_NAME,
    tuples,
    generate
};