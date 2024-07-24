import { useState } from "react";
import { Message } from "./Message";
import { addDoc, collection, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, store } from "../firebaseInstance";
import "../styles/Chatroom.css";

export function Chatroom() {
  const messageCollection = collection(store, "messages");
  const q = query(messageCollection, orderBy("timestamp"));

  const [messages] = useCollectionData(q);
  const [message, setMessage] = useState("");

  const sendMessage = (formEvent) => {
    formEvent.preventDefault();

    const newMessage = {
      message: message,
      timestamp: Date.now(),
      userId: auth.currentUser.uid,
      avatar: auth.currentUser.photoURL,
    };

    addDoc(messageCollection, newMessage);
    setMessage("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <Message
              key={msg.userId + msg.timestamp}
              timestamp={msg.timestamp}
              message={msg.message}
              avatar={msg.avatar}
              userId={msg.userId}
            />
          ))}
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Say hi to the others..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
