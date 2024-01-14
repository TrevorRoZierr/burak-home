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

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zk3pwga",
          "template_b4jtgcg",
          form.current,
          "Hrk3myk-4GMixpPl7"
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
          {/* ... your form inputs and button */}
        </form>
      </div>
    </div>
  );
};

export default Page;
