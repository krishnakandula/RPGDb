const {client} = require('./db');
const fs = require('fs');
const characterSchema = require('./schema/character-schema');
const partySchema = require('./schema/party-schema');

//Connect to database
client.connect(err => {
    if (err) throw err;

    //Execute queries here
    console.log("Connection successful");

    //Populate Characters
    let numberOfCharacters = 10;
    while(numberOfCharacters >= 0){
        let queryStatement = characterSchema.generate();
        fs.appendFileSync('out.txt', JSON.stringify(queryStatement) + '\n');
        client
            .query(queryStatement)
            .then(result => {
                console.log(`${characterSchema.TABLE_NAME} successfully populated`);

            })
            .catch(err => {
                onError(characterSchema.TABLE_NAME, err);
            });
        numberOfCharacters--;
    }
});

/**
 *
 * @param tableName
 * @param err
 */
let onError = (tableName, err) => {
    console.error(`Could not insert into ${tableName}`);
    console.error(err);
}