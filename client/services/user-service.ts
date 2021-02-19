/**
 * Make a request to the API to set the phone number of a given user
 * @param phoneNumber should be in E164 format
 *
 * @returns {boolean} true if successful, false otherwise
 */
export async function setPhoneNumber(phoneNumber: string): Promise<boolean> {
  try {
    const response = await fetch("/api/users/set-phone-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
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
      },
    );
  } catch (e) {
    console.log("error verifying phone number");
    return false;
  }
  return true;
}

export async function checkVerificationCode(verificationCode: string) {
  try {
    const response = await fetch("/api/users/verify-phone-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verificationCode }),
    });
    let result = await response.json();
    return result.verified;
  } catch (e) {
    console.log("error verifying phone number");
    return false;
  }
  return true;
}
