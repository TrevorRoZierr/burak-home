import Link from "next/link";

type Props = {
  title: string;
  image: string;
  subTitle: string;
};

const Content = ({ title, image, subTitle }: Props) => (
  <div className="flex justify-center items-center flex-col sm:mt-16 mt-10 sm:p-3 p-3">
    <h1 className="sm:text-6xl text-4xl sm:font-medium font-medium uppercase border-b-2 sm:tracking-wider tracking-wide text-center">
      {title}
    </h1>
    <img
      src={image}
      alt="Vision"
      className="sm:mt-10 mt-6 sm:w-[40%] sm:h-[50%] sm:p-1 p-1 rounded"
      style={{border: "4px solid darkgreen"}}
    />
    <p className="sm:mt-10 mt-6 sm:font-bold font-medium sm:text-lg text-md sm:w-[40%] sm:h-[50%] text-center">
      {subTitle}
    </p>
  </div>
);

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center sm:p-20 p-10 bg-gradient-to-r from-green-500 to-green-900 border-b-4">
        <Link
          href="/about"
          className="sm:text-lg text-md sm:mr-6 mr-3 sm:px-10 px-5 sm:py-3 py-1 bg-gray-200 rounded sm:font-semibold font-medium border-2 duration-300 hover:underline hover:bg-green-700 hover:text-white hover:shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          About
        </Link>
        <Link
          href="/services"
          className="sm:text-lg text-md sm:ml-6 ml-3 sm:px-8 px-2 sm:py-3 py-1 bg-gray-200 rounded sm:font-semibold font-medium border-2 duration-300 hover:underline hover:bg-green-700 hover:text-white hover:shadow-[0.25rem_0.25rem__0px_0px_rgba(0,0,0,1)]"
        >
          Services
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
        subTitle="We are comitted to delivering the right talent that exceeds your expectations. Our focus is on sourcing IT professionals who can seamlessly integrate into your projects, enhancing capabilities and efficiency of your team."
      />
      <Content
        title="Client-Centric"
        image="/cc.jpg"
        subTitle="At Burak Solutions, we understand that every client is unique. We take the time to understand your specific needs and challenges, ensuring that our solutions align perfectly with your objectives. Your success is our priority."
      />
      <Content
        title="Adaptability & Innovations"
        image="/inn.jpeg"
        subTitle="In the fast paced world of technology, adaptability is crucial. We stay at the forefront of industry developments, embracing the latest trends and technologies to provide you with forward-thinking solutions."
      />
    </section>
  );
}
