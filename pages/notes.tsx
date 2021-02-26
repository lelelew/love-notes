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
import { createMessage } from "../client/services/message-service";

interface MessageInput {
  text: string;
  date: string;
  time: string;
}

export default function Notes() {
  const [session, loading] = useSession();

  async function submitMessageInput(
    values: MessageInput,
    helpers: FormikHelpers<MessageInput>,
    // { setSubmitting }: FormikHelpers<MessageInput>,
  ) {
    helpers.setSubmitting(true),
      createMessage(values.text, values.date.toString(), values.time);
    helpers.setSubmitting(false), helpers.resetForm();
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
            date: "",
            time: "00:00",
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

            <label htmlFor="date">Date to send message:</label>
            <Field type="date" id="date" name="date" />

            <label htmlFor="time">Time to send message:</label>
            <Field type="time" id="time" name="time" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      );
    </>
  );
}
