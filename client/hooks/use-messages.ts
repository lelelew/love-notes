import { useEffect, useState } from "react";
import { Message } from "../../server/entities/message";
import { listMessages } from "../services/message-service";

export async function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    async function load() {
      const result = await listMessages();
      setMessages(result);
    }
    load();
  }, []);
  return messages;
}
