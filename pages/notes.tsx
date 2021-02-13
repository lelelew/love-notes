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

interface MessageInput {
  text: string;
}

export default function Notes() {
  const [session, loading] = useSession();

  async function submitMessageInput(
    values: MessageInput,
    { setSubmitting }: FormikHelpers<MessageInput>,
  ) {
    console.log(values);
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
        This is the page that will be used to create a new message sequence.
        <Formik
          enableReinitialize={true}
          initialValues={{
            text: "",
          }}
          onSubmit={submitMessageInput}
        >
          <Form>
            <label htmlFor="text">Text Message</label>
            <Field
              as="textarea"
              rows={3}
              id="text"
              name="text"
              placeholder="Enter your text message here."
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      );
    </>
  );
}
