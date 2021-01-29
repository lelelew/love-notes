import Head from "next/head";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../styles/Home.module.css";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import {
  setPhoneNumber,
  requestPhoneNumberVerification,
  checkVerificationCode,
} from "../client/services/user-service";

interface VerificationValues {
  verificationCode: string;
}

export default function VerifyPhoneNumber() {
  const [session, loading] = useSession();
  const [phoneNumberVerified, setPhoneNumberVerified] = useState<
    boolean | undefined
  >();

  async function submitVerificationCode(
    values: VerificationValues,
    { setSubmitting }: FormikHelpers<VerificationValues>,
  ) {
    let result = await checkVerificationCode(values.verificationCode);
    setPhoneNumberVerified(result);
  }

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div className={styles.container}>
        <button onClick={requestPhoneNumberVerification}>
          send new verification code
        </button>
        <Formik
          enableReinitialize={true}
          initialValues={{
            verificationCode: "",
          }}
          onSubmit={submitVerificationCode}
        >
          <Form>
            <label htmlFor="verificationCode">Verification Code</label>
            <Field
              id="verificationCode"
              name="verificationCode"
              placeholder="123456"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      );
    </>
  );
}
