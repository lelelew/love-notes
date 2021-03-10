import { useEffect, useState } from "react";
import { Message } from "../../server/entities/message";
import { listMessages } from "../services/message-service";

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    async function load() {
      const result = await listMessages();
      setMessages(result);
      // console.log(result);
    }
    load();
  }, []);
  return messages;
}
