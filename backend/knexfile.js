const path = require("path")

module.exports = {
    development: {
        client: 'pg',
        connection: {
          user : 'postgres',
          password : 'prs100502',
          database : 'chat'
        },
    migrations: {
        directory: path.resolve(__dirname, "database", "migrations")
    }
}
}

