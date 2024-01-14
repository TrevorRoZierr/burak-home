import GoUp from "../components/GoUp";

type Props = {
  title: string;
  image: string;
  subTitle?: string;
};

const Content = ({ title, image, subTitle }: Props) => (
  <div className="flex justify-center items-center flex-col sm:mt-16 mt-10 sm:p-3 p-3">
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

const page = () => {
  return (
    <div>
      <Content
        title="IT INFRASTRUCTURE"
        image="/itinfra.jpg"
        subTitle="Burak Solutions is your trusted partner for robust IT infrastructure solutions. We specialize in designing and implementing cutting-edge systems, ensuring seamless operations and scalability. From network architecture to cloud integration, our expertise ensures your business is equipped for the digital future."
      />
      <Content
        title="STRATEGIC SOURCING"
        image="/strasource.jpg"
        subTitle="Navigate the complex landscape of procurement with Burak Solutions' strategic sourcing expertise. We tailor sourcing strategies to align with your business goals, optimizing costs and maximizing value. Our approach ensures efficiency, transparency, and sustainable vendor relationships, empowering your organization for long-term success."
      />
      <Content
        title="TRAINING PROGRAM"
        image="/cp.jpg"
        subTitle="Invest in your team's professional development with Burak Solutions certification programs. Our training modules are designed to enhance skills, knowledge, and proficiency in the latest technologies and industry best practices. Equip your workforce with the certifications they need to stay ahead in today's competitive IT landscape."
      />
      <Content
        title="MANAGED SERVICES"
        image="/ms.jpg"
        subTitle="Experience unparalleled support with Burak Solutions' managed services. Our proactive approach to IT management ensures your systems run smoothly, minimizing downtime and maximizing productivity. From routine maintenance to real-time monitoring, we provide comprehensive solutions tailored to your unique business needs.  "
      />
      <GoUp />
    </div>
  );
};

export default page;
