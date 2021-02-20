import { getRepository } from "typeorm";
import { Message } from "../entities/message";

export async function createMessage(
  userId: string,
  text: string,
  date: string,
  time: string,
): Promise<Message> {
  const messageRepository = getRepository(Message); // you can also get it via getConnection().getRepository() or getManager().getRepository()

  const message = {
    userId,
    text,
    date,
    time,
  };
  return await messageRepository.save(message);
}
