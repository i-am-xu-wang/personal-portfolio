"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hook";
import { sendEmail } from "@/app/actions/actions";
import toast from "react-hot-toast";
import SubmitButton from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:xwang9092@gmail.com">
          xwang9092@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          setEmail("");
          setMessage("");
        }}
      >
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={200}
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your Email"
          type="email"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Message"
        />
        <SubmitButton />
      </form>
    </section>
  );
}
