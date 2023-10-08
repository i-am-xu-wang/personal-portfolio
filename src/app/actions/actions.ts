"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email) || !validateString(message)) {
    throw new Error("Invalid email or message");
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "xwang9092@gmail.com",
      reply_to: email as string,
      subject: "New message from " + email,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
}
