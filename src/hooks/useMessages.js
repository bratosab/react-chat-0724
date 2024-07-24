import { addDoc, collection, orderBy, query } from "firebase/firestore";
import { store } from "../firebaseInstance";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useMessages() {
  const messageCollection = collection(store, "messages");
  const q = query(messageCollection, orderBy("timestamp"));

  const [messages] = useCollectionData(q);

  const sendMessage = (message) => {
    addDoc(messageCollection, message);
  };

  return [messages, sendMessage]
}
