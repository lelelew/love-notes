import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../server/lib/connect-to-database";
import { getSession } from "next-auth/client";
import { Message } from "../../../server/entities/message";
import { listMessages } from "../../../server/services/message-service";

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Message[]>,
) => {
  const session = await getSession({ req: request });

  if (session) {
    const dbConnection = await connectToDatabase();
    let userMessages = await listMessages(session.user.id);
    response.status(200).json(userMessages);
    dbConnection.close();
  } else {
    response.status(404).end();
  }
};
