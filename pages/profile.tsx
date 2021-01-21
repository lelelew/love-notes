import Head from "next/head";
import React from "react";
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
import { setPhoneNumber } from "../client/services/user-service";

interface Values {
  phoneNumber: string;
}

export default function Profile() {
  const [session, loading] = useSession();
  async function submitSetPhoneNumber(
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) {
    await setPhoneNumber(session.user.id, values.phoneNumber);
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
        <h1>Signup</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
            phoneNumber: "",
          }}
          onSubmit={submitSetPhoneNumber}
        >
          <Form>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              placeholder="415-123-4567"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      );
    </>
  );
}
