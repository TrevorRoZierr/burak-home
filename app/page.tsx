"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GoUp from "./components/GoUp";

type Props = {
  title: string;
  image: string;
  subTitle: string;
};

const Content = ({ title, image, subTitle }: Props) => {
  const contentRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={contentRef as React.MutableRefObject<HTMLDivElement>}
      className={`${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-80 "
      } transition-opacity duration-1000 transform flex justify-center items-center flex-col sm:mt-16 mt-10 sm:p-3 p-3`}
    >
      <h1 className="sm:text-6xl text-4xl sm:font-medium font-medium uppercase border-b-2 sm:tracking-wider tracking-wide text-center">
        {title}
      </h1>
      <img
        src={image}
        alt="Vision"
        className="sm:mt-10 mt-6 sm:w-[40%] sm:h-[50%] sm:p-1 p-1 rounded hover:shadow-[0px_0px_20px_1px_rgba(0,0,0,1)] sm:hover:w-[45%] hover:p-2 duration-500"
        style={{ border: "4px solid #71B6CF" }}
      />
      <p className="sm:mt-10 mt-6 sm:font-bold font-medium sm:text-lg text-md sm:w-[40%] sm:h-[50%] text-center">
        {subTitle}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center sm:p-32 p-10 bg-gradient-to-r from-[#71B6CF] to-cyan-900 border-t-4 border-b-4">
        <Link
          href="/"
          className="sm:text-lg text-md sm:mr-6 mr-3 sm:px-10 px-2 sm:py-3 py-1 rounded sm:font-semibold font-medium border-2 duration-300 underline bg-cyan-600 text-black shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="sm:text-lg text-md sm:mr-6 mr-3 sm:px-10 px-2 sm:py-3 py-1 bg-gray-200 rounded sm:font-semibold font-medium border-2 duration-300 hover:underline hover:bg-cyan-600 hover:text-black hover:shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          About
        </Link>
        <Link
          href="/services"
          className="sm:text-lg text-md sm:mr-6 mr-3 sm:px-10 px-2 sm:py-3 py-1 bg-gray-200 rounded sm:font-semibold font-medium border-2 duration-300 hover:underline hover:bg-cyan-600 hover:text-black hover:shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="sm:text-lg text-md sm:mr-6 mr-3 sm:px-10 px-2 sm:py-3 py-1 bg-gray-200 rounded sm:font-semibold font-medium border-2 duration-300 hover:underline hover:bg-cyan-600 hover:text-black hover:shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          Contact
        </Link>
      </div>
      <Content
        title="Vision"
        image="/pledge2.jpg"
        subTitle="Our vision is clear - to become your trusted partner in finding the IT expertise you require. We aim to build a reputation for excellence and reliability in IT resource procurement."
      />
      <Content
        title="Pledge"
        image="/vision.jpg"
        subTitle="We are committed to delivering the right talent that exceeds your expectations. Our focus is on sourcing IT professionals who can seamlessly integrate into your projects, enhancing capabilities and efficiency of your team."
      />
      <Content
        title="Client-Centric"
        image="/cc.jpg"
        subTitle="At Burak Solutions, we understand that every client is unique. We take the time to understand your specific needs and challenges, ensuring that our solutions align perfectly with your objectives. Your success is our priority."
      />
      <Content
        title="Adaptability & Innovations"
        image="/inn.jpeg"
        subTitle="In the fast-paced world of technology, adaptability is crucial. We stay at the forefront of industry developments, embracing the latest trends and technologies to provide you with forward-thinking solutions."
      />
    </section>
  );
}
