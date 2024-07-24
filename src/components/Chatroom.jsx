import { useState } from "react";
import { Message } from "./Message";
import { auth } from "../firebaseInstance";
import "../styles/Chatroom.css";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { useMessages } from "../hooks/useMessages";

export function Chatroom() {
  const [messages, sendNewMessage] = useMessages();
  const [message, setMessage] = useState("");
  const [scrollElement] = useAutoScroll(messages);

  const sendMessage = (formEvent) => {
    formEvent.preventDefault();

    const newMessage = {
      message: message,
      timestamp: Date.now(),
      userId: auth.currentUser.uid,
      avatar: auth.currentUser.photoURL,
    };

    sendNewMessage(newMessage)
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
          <span ref={scrollElement}></span>
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
