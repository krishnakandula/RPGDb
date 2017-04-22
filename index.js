const {client} = require('./db');

//Connect to database
client.connect(err => {
    if (err) throw err;
    
    //Execute queries
    console.log('Connection successful');
});