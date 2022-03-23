import React, { useEffect } from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from "./features/userSlice";
import { useState } from "react";
import db from './firebase';
import firebase from "firebase"; // 42. satırın çalışması için

function Chat() {

  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

   useEffect(() => {
     if(channelId) {
       db.collection("channels")
          .doc(channelId)
          .collection("messages")
          .orderBy("timestamp", "desc") //"descending" ile en son atılan mesaj üstte gözükecek galiba
          .onSnapshot((snapshot) =>
           
            setMessages(snapshot.docs.map((doc)=> doc.data()))
          )
     }
   },[channelId])

   const sendMessage = e => {
     e.preventDefault() // because when we submit the form we dont want to refresh the page.
    
     db.collection("channels").doc(channelId).collection("messages")
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: input,
          user: user,
        }) 

      setInput("")
  }


  return (
    <div className="chat">
      <ChatHeader channelName={channelName}/>

      <div className="chat__messages">
        {messages.map((message) => ( // every single message, i wanna render out to Message Component
          <Message 
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
      <AddCircleIcon fontSize="large"/>
      <form>
        <input 
          type="text"
          value={input} 
          disabled={!channelId} // channel Id yoksa yani herhangi bir channel seçilmemişse input girmeme(mesaj yazmama) izin vermesin !
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`} 
        />
        <button 
          type="submit" 
          className="chat__inputButton"
          disabled={!channelId}
          onClick={sendMessage}
        >
          Send Message
        </button>
      </form>
      <div className="chat__inputIcons">
      <CardGiftcardIcon fontSize="large"/>
      <GifIcon fontSize="large"/>
      <EmojiEmotionsIcon fontSize="large"/>
            
      </div>

      </div>
      
    </div>
  )
}

export default Chat