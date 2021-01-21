import {getRepository} from "typeorm";
import {User} from "../entities/user";


/**
 * Look up user using userId and set phone number
 * @param userId 
 * @param phoneNumber should be in E164 format
 */
export async function setPhoneNumber(userId, phoneNumber) {
  const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
  const user = await userRepository.findOne(userId);
  user.phoneNumber = phoneNumber;
  await userRepository.save(user);  
}


