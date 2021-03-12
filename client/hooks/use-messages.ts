import { useEffect, useState } from "react";
import { Message } from "../../server/entities/message";
import { listMessages } from "../services/message-service";

export function useMessages(): [Message[], () => void] {
  const [messages, setMessages] = useState<Message[]>([]);
  async function load() {
    const result = await listMessages();
    setMessages(result);
  }
  useEffect(() => {
    load();
  }, []);
  return [messages, load];
}
