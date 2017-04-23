const pg = require("pg");
const config = require("./config");

let settings = {
  user: config.USERNAME,
  database: config.DB,
  password: config.PASSWORD,
  host: config.HOST,
  port: config.PORT
};

let client = new pg.Client(settings);

module.exports = {
  client
};
