import assets from "../assets/assets";
import Title from "./Title";

const workData = [
  {
    title: "Mobile App",
    description: "A modern mobile app experience.",
    image: assets.work_mobile_app,
  },
  {
    title: "Fitness App",
    description: "A fitness app designed to support healthier habits.",
    image: assets.work_fitness_app,
  },
  {
    title: "Dashboard Management",
    description: "A dashboard for clear, efficient business management.",
    image: assets.work_dashboard_management,
  },
];

const OurWork = () => {
  return (
    <div
      id="ourWork"
      className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 inset-e-5/6">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
