import { getRepository } from "typeorm";
import { User } from "../entities/user";

/**
 * Look up user using userId and set phone number
 * @param userId id of user whose phone number you want to update
 * @param phoneNumber should be in E164 format
 */
export async function setPhoneNumber(userId: string, phoneNumber: string) {
  const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
  const user = await userRepository.findOne(userId);
  user.phoneNumber = phoneNumber;
  await userRepository.save(user);
}

export async function storeVerificationCode(
  userId: string,
  verificationCode: string,
) {
  const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
  const user = await userRepository.findOne(userId);
  user.verificationCode = verificationCode;
  await userRepository.save(user);
}

export async function checkVerificationCode(
  userId: string,
  verificationCode: string,
): Promise<boolean> {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  return user.verificationCode === verificationCode;
}

export async function setVerified(
  userId: string,
  phoneNumberVerified: boolean,
) {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);
  user.phoneNumberVerified = phoneNumberVerified;
  await userRepository.save(user);
}
