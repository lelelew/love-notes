/**
 * Make a request to the API to create a message to be sent
 * @param text message to be sent
 * @param date date that message should be sent
 * @param time time that message should be sent

 *
 * @returns {boolean} true if successful, false otherwise
 */

export async function createMessage(
  text: string,
  date: string,
  time: number,
): Promise<boolean> {
  try {
    const response = await fetch("/api/messages/create-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, date, time }),
    });
    let result = await response.json();
    return result;
  } catch (e) {
    console.log("error creating message");
    return false;
  }
  return true;
}
