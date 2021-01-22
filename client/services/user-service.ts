/**
 * Make a request to the API to set the phone number of a given user
 * @param userId id of user whose phone number you want to update
 * @param phoneNumber should be in E164 format
 *
 * @returns {boolean} true if successful, false otherwise
 */
export async function setPhoneNumber(userId, phoneNumber): Promise<boolean> {
  try {
    const response = await fetch("/api/users/set-phone-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, phoneNumber }),
    });
  } catch (e) {
    console.log("error setting phone number");
    return false;
  }
  return true;
}

export async function requestPhoneNumberVerification() {
  try {
    const response = await fetch(
      "/api/users/request-phone-number-verification",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ userId, phoneNumber }),
      },
    );
  } catch (e) {
    console.log("error verifying phone number");
    return false;
  }
  return true;
}
