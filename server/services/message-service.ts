import { getRepository, Repository } from "typeorm";
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

export async function listMessages(userId: string) {
  const messageRepository = getRepository(Message); // you can also get it via getConnection().getRepository() or getManager().getRepository()
  const userMessages = await messageRepository.find({ userId: userId });
  return userMessages;
}
