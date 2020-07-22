const path = require("path")
require("dotenv/config")

module.exports = {
    development: {
        client: process.env.CLIENT_DB,
        connection: {
          user : process.env.USER_DB,
          password : process.env.PASSWORD_DB,
          database : process.env.DATABASE
        },
    migrations: {
        directory: path.resolve(__dirname, "database", "migrations")
    }
}
}

