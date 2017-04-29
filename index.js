const fs = require('fs');

const {client} = require('./db');

const characterSchema = require('./schema/character-schema');
const marketSchema = require('./schema/market-schema');
const generalStoreSchema = require('./schema/general-store-schema');
const armorySchema = require('./schema/armory-schema');
const partySchema = require('./schema/party-schema');
const missionSchema = require('./schema/mission-schema');
const rewardsSchema = require('./schema/rewards-schema');

let getFileName = (tableName) => {
    return `${tableName}Out.txt`;
}

//Connect to database
client.connect(err => {
    if (err) throw err;

    //Execute queries here
    console.log("Connection successful");

    //Populate 2 markets
    let numberOfMarkets = 2;
    writeToDb(marketSchema.TABLE_NAME,
        marketSchema,
        numberOfMarkets);

    //Populate 1 General Store
    let numberOfGeneralStores = 1;
    writeToDb(generalStoreSchema.TABLE_NAME,
        generalStoreSchema,
        numberOfGeneralStores);

    //Populate 1 Armory
    let numberOfArmories = 1;
    writeToDb(armorySchema.TABLE_NAME,
        armorySchema,
        numberOfArmories)

    //Populate Characters
    let numberOfCharacters = 60;
    writeToDb(characterSchema.TABLE_NAME,
        characterSchema,
        numberOfCharacters);

    //Populate 15 Parties
    let numberOfParties = 15;
    writeToDb(partySchema.TABLE_NAME,
        partySchema,
        numberOfParties);

    //Populate missions
    let numberOfMissions = 30;
    writeToDb(missionSchema.TABLE_NAME,
        missionSchema,
        numberOfMissions);

    //Populate rewards
    let numberOfRewards = 30;
    writeToDb(rewardsSchema.TABLE_NAME,
        rewardsSchema,
        numberOfRewards);
});

function writeToDb(tableName, schema, iterations) {
    let fileName = getFileName(tableName);
    while(iterations > 0){
        let queryStatement = schema.generate();
        fs.appendFileSync(fileName, JSON.stringify(queryStatement)+ '\n');
        client
            .query(queryStatement)
            .then(result => {
                console.log(`${tableName} successfully populated`);
            })
            .catch(err => {
                onError(tableName, err);
            });
        iterations--;
    }
}

/**
 *
 * @param tableName
 * @param err
 */
let onError = (tableName, err) => {
    console.error(`Could not insert into ${tableName}`);
    console.error(err);
}