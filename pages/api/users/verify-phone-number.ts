import { signIn, signOut, getSession } from "next-auth/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { setVerified } from "../../../server/services/user-service";
import { connectToDatabase } from "../../../server/lib/connect-to-database";
import { checkVerificationCode } from "../../../server/services/user-service";

type Data = {
  verified: boolean;
};

/**
 * USER <-> (react) Form <-> Client Side Helpers <- HTTP -> API Route Handler <-> Database Helpers <-> DB
 */

export default async (
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) => {
  const dbConnection = await connectToDatabase();
  const session = await getSession({ req: request });
  if (session) {
    const verificationCode = request.body.verificationCode;
    // will come from the formik form on the new page for verifying (or same page it's currently in)
    const verified = await checkVerificationCode(
      session.user.id,
      verificationCode,
    );
    if (verified) {
      await setVerified(session.user.id, true);
    }
    response.status(200).json({ verified: verified });
  } else {
    response.status(401).end();
  }
  dbConnection.close();
};
