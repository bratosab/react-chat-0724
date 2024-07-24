import { useState } from "react";
import { Message } from "./Message";

export function Chatroom() {
  const [message, setMessage] = useState("");

  const sendMessage = (formEvent) => {
    formEvent.preventDefault();

    console.log(message)
  };

  return (
    <>
      <main>
        <Message />
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
