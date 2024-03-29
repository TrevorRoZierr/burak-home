"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import GoUp from "../components/GoUp";

type Props = {
  title: string;
  subTitle?: string;
};

const Content = ({ title, subTitle }: Props) => (
  <div className="flex justify-center items-center flex-col sm:mt-16 mt-10 sm:p-3 p-3">
    <h1 className="sm:text-6xl text-4xl sm:font-medium font-medium uppercase border-b-2 sm:tracking-wider tracking-wide text-center">
      {title}
    </h1>
    <p className="sm:mt-10 mt-6 sm:font-bold font-medium sm:text-lg text-md sm:w-[40%] sm:h-[50%] text-center">
      {subTitle}
    </p>
  </div>
);

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_you5zii",
          "template_tuesz9x",
          form.current,
          "GLvYYQkgL9bPvw3r7"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <Content title="Contact" subTitle="Message us to connect." />
      <div className="flex justify-center items-center flex-col sm:py-2 py-4 sm:px-10 px-8">
        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="flex justify-center items-center flex-col"
        >
          <input
            type="text"
            placeholder="Name:"
            name="user_name"
            className="sm:my-2 my-1 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
            required
            autoComplete="off"
          />
          <br></br>
          <input
            type="email"
            placeholder="Email:"
            name="user_email"
            required
            autoComplete="off"
            className="sm:my-2 my-1 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
          />
          <br></br>
          <input
            type="text"
            placeholder="Mobile Number:"
            name="user_phone"
            required
            autoComplete="off"
            className="sm:my-2 my-1 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
          />
          <br></br>
          <input
            type="text"
            placeholder="Subject:"
            name="subject"
            required
            autoComplete="off"
            className="sm:my-2 my-1 border-2 border-black sm:p-2 p-2 rounded placeholder-black"
          />
          <br></br>
          <textarea
            name="message"
            placeholder="Type your Message:"
            required
            autoComplete="off"
            cols={30}
            rows={10}
            className="sm:my-3 my-2 border-2 border-black sm:p-3 p-3 rounded placeholder-black"
          ></textarea>
          <br></br>
          <div className="flex justify-center items-center flex-col">
            <button
              type="submit"
              className="text-center p-4 border-2 rounded-full bg-black text-white sm:font-medium hover:text-black hover:bg-white duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
