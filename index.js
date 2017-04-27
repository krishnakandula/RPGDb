const {client} = require("./db");
const queries = require("./sql/queries");

//Connect to database
client.connect(err => {
    if (err) throw err;

    //Execute queries
    console.log("Connection successful");

    let id = 57483;
    let name = "";
    let sex = true;
    let hp = 100;
    let exp = 150;

    let values = [id, name, sex, exp, hp];
    queries.sample.values = values;

    client
        .query(queries.sample)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err);
        }).then(() => {
        //Exit cleanly
        process.exit(0);
    });
});
