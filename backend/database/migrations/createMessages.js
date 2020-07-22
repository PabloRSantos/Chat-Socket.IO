async function up(knex){
    return knex.schema.createTable("messages", table => {
        table.increments("id").primary()
        table.string("userId").notNullable()
        table.string("text").notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());


    })
}

 async function down(knex){
    return knex.schema.dropTable("messages")
}

module.exports = {up, down}

