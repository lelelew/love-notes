import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../server/lib/connect-to-database";
import { createMessage } from "../../../server/services/message-service";
import { getSession } from "next-auth/client";
import { Message } from "../../../server/entities/message";

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Message>,
) => {
  if (
    request.method === "POST" &&
    request.body.text &&
    request.body.date &&
    request.body.time
  ) {
    const dbConnection = await connectToDatabase();
    const session = await getSession({ req: request });

    let message = await createMessage(
      session.user.id,
      request.body.text,
      request.body.date,
      request.body.time,
    );
    response.status(200).json(message);
    dbConnection.close();
  } else {
    response.status(404).end();
  }
};
