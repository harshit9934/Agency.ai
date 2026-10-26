import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const servicesdata = [
    {
      title: "Advertising",
      description:
        "We turn ideas into powerful digital solutions that connect , engage ...",
      icon: assets.ads_icon,
    }, // 1st service
    {
      title: "Content marketing ",
      description:
        "We turn ideas into powerful digital solutions that connect , engage ...",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing ",
      description:
        "We turn ideas into powerful digital solutions that connect , engage ...",
      icon: assets.content_icon,
    },
    {
      title: "Social media ",
      description:
        "We turn ideas into powerful digital solutions that connect , engage ...",
      icon: assets.social_icon,
    },
  ]; // making a array that can store a services
  return (
    <div
      id="services"
      className=" relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How cann we help ? "
        desc="From strategy to execute we craft digital solutions that move  your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesdata.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  ); // mount title comp
};

export default Service;
