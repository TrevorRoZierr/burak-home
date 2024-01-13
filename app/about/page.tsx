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
      style={{ border: "4px solid darkgreen" }}
    />
    <p className="sm:mt-10 mt-6 sm:font-bold font-medium sm:text-lg text-md sm:w-[40%] sm:h-[50%] text-center">
      {subTitle}
    </p>
  </div>
);

const page = () => {
  return (
    <Content
      title="About"
      image="/pledge.jpg"
      subTitle="Burak Solutions is a dynamic and multifaceted IT consulting and services company. With a broad spectrum of services, we are your one-stop solution for all IT-related backed up by industry experts with over a 25 years of experience. Our mission is to empower businesses with tailored, high-quality solutions to meet their diverse needs."
    />
  );
};

export default page;
