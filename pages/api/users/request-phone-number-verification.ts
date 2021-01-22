import twilio from "twilio";
import { signIn, signOut, getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

type Data = {
  name: string;
};

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) => {
  const session = await getSession({ req: request });
  console.log(session);
  if (session) {
    client.messages
      .create({
        body: "This is the ship that made the Kessel Run in fourteen parsecs?",
        from: "+14157920095",
        to: session.user.phoneNumber,
      })
      .then((message) => console.log(message.sid));
    response.status(200).end();
  } else {
    response.status(401).end();
  }
};
