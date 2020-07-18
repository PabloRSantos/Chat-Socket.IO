const express = require("express")

const app = express()

const server = require("http").createServer(app)
const io = require("socket.io")(server)

app.get("/", (req, res) => {

})

let messages = []

io.on("connection", socket => {

    socket.emit("previousMessages", messages)

    socket.on("sendMessage", data => {

        //emit envia so pro socket que conectou

        messages.push(data)
        socket.broadcast.emit("receivedMessage", data) //envia para todos os sockets conectados
    })
})

io.on("disconnect", () => {
    console.log("Desconectou")
})

server.listen(3333, function(){
    console.log("Servidor Rodando")
})