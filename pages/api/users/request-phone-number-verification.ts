import twilio from "twilio";
import { signIn, signOut, getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateVerificationCode } from "../../../server/lib/generate-verification-code";
import { storeVerificationCode } from "../../../server/services/user-service";
import { connectToDatabase } from "../../../server/lib/connect-to-database";

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
  const dbConnection = await connectToDatabase();
  const session = await getSession({ req: request });
  console.log(session);
  if (session) {
    const verificationCode = generateVerificationCode();
    await storeVerificationCode(session.user.id, verificationCode);

    client.messages
      .create({
        body: `Your Love Notes verification code is ${verificationCode}.`,
        from: "+14157920095",
        to: session.user.phoneNumber,
        // twilio US phone numbers are required to have +1
      })
      .then((message) => console.log(message.sid));
    response.status(200).end();
  } else {
    response.status(401).end();
  }
  dbConnection.close();
};
