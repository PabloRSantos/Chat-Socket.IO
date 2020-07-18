import React, {useState, useEffect} from 'react';
import io from "socket.io-client"
import { Container } from './style';


const socket = io("http://localhost:3333")
socket.on("connection")


const Chat = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    socket.on("previousMessages", msg => setMessages(msg))
    socket.on("receivedMessage", newMessage => setMessages([...messages, newMessage]))

    function handleInput(event){
        setMessage(event.target.value) //yarn uuid
    }

    function submitForm(){
        if(message.trim()){
            socket.emit("sendMessage", {
                id: 1,
                message
            })
            
            setMessages([...messages, {id: 1, message}])
            setMessage("")
        }
    }

  return (
      <Container>
          <input type="text" placeholder="Seu nome"/>
          <div name="message" id="message">
              <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg.message}</li>
                    ))}
              </ul>
          </div>
          <input onChange={handleInput} value={message} type="text" placeholder="Sua mensagem"/>
          <button onClick={submitForm}>Enviar</button>
      </Container>
  )
}

export default Chat;