const knex = require("knex");
const { NODE_ENV } = require("../config/index");
const config = require("../knexfile");

const db = knex(config[NODE_ENV]);

module.exports = db;
