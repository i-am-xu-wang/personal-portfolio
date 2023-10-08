"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hook";
import { sendEmail } from "@/app/actions/actions";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="email"
          required
          maxLength={200}
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your Email"
          type="email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your Address"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
                focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105"
        >
          Submit
          <FaPaperPlane className="text-s opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
        </button>
      </form>
    </section>
  );
}
