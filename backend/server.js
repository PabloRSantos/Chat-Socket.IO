const express = require("express")

const app = express()

const server = require("http").createServer(app)
const io = require("socket.io")(server)

const knex = require("./database/connection")
require("dotenv/config")


io.on("connection", async socket => {

    const messages = await knex("messages").select("*")
    socket.emit("previousMessages", messages)

    socket.on("sendMessage", async data => {
        //emit envia so pro socket que conectou
        const message = await knex("messages").insert(data).returning("*")

        socket.emit("receivedMessage", message) //envia para todos os sockets conectados
    })
})


server.listen(process.env.PORT, function(){
    console.log("Servidor Rodando")
})