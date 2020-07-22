const express = require("express")

const app = express()

const server = require("http").createServer(app)
const io = require("socket.io")(server)

const knex = require("./database/connection")



io.on("connection", async socket => {

    const messages = await knex("messages").select("*")
    socket.emit("previousMessages", messages)

    socket.on("sendMessage", async data => {
        //emit envia so pro socket que conectou
        await knex("messages").insert(data)

        
        socket.broadcast.emit("receivedMessage", data) //envia para todos os sockets conectados
    })
})


server.listen(3333, function(){
    console.log("Servidor Rodando")
})