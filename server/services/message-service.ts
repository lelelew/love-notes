import { getRepository } from "typeorm";
import { Message } from "../entities/message";

export async function createMessage(
  userId: string,
  text: string,
  date: string,
  time: number,
): Promise<string> {
  const userRepository = getRepository(Message); // you can also get it via getConnection().getRepository() or getManager().getRepository()

  const user = await userRepository.findOne(userId);
  user.text = text;
  user.date = date;
  user.time = time;
  await userRepository.save(user);
  return user.text;
}
