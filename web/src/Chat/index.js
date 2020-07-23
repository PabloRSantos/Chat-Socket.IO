import React, {useState, useEffect} from 'react';
import io from "socket.io-client"
import { Container, Item } from './style';


const socket = io("https://chatsocket-backend.herokuapp.com/")
socket.on("connection")


const Chat = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [userId, setUserId] = useState()


    socket.on("previousMessages", msg => setMessages(msg))
    socket.on("receivedMessage", newMessage => setMessages([...messages, newMessage[0]]))


    useEffect(() => {
        let id = localStorage.getItem("@chat_id")

        if(id === null) {
            const value = Math.random() * (1000 - 1) + 1
            id = localStorage.setItem("@chat_id", value)
        }

        setUserId(id)

    }, [])

    function handleInput(event){
        setMessage(event.target.value) //yarn uuid
    }

    function submitForm(){
        if(message.trim()){
            socket.emit("sendMessage", {
                text: message,
                userId
            })
            setMessages([...messages, {text: message, userId}])
            setMessage("")


        }
    }

  return (
      <Container >
          <div name="message" id="message">
              <ul>
                    {messages.map((msg) => (
                        <Item
                         key={msg.id || msg.userId + (Math.random() * (1000 - 1) + 1)}
                         userId={msg.userId === userId ? true : false}>
                             {msg.text}
                        </Item>
                    ))}
              </ul>
          </div>
          <input onChange={handleInput} value={message} type="text" placeholder="Sua mensagem"/>
          <button onClick={submitForm}>Enviar</button>
      </Container>
  )
}

export default Chat;