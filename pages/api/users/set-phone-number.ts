import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../../server/lib/connect-to-database";
import { setPhoneNumber } from "../../../server/services/user-service";


type Data = {
  name: string
}

export default async (request: NextApiRequest, response: NextApiResponse<Data>) => {
  if (request.method === "POST") {
    const dbConnection = await connectToDatabase();
    const userId = request.body.userId;
    const phoneNumber = request.body.phoneNumber;
    await setPhoneNumber(userId, phoneNumber)
    response.status(200).end()
    dbConnection.close()
  } else {
    response.status(404).end();
  }
}

