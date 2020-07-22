const knex = require("knex")
require("dotenv/config")

const connection = knex({
    client: process.env.CLIENT_DB,
  connection: {
    user : process.env.USER_DB,
    password : process.env.PASSWORD_DB,
    database : process.env.DATABASE
  }
})

module.exports = connection