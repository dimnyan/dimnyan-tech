"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WhySection = () => {
  const datas = [
    {
      title: "Simplifying Your Business Process",
      image: "/data.jpg",
      desc: "Innovatived solutions are designed to optimize your workflow, increase efficiency, and save you time and money.",
    },
    {
      title: "Personalized UI/UX Design",
      image: "/phone.jpg",
      desc: "Created visually stunning and user-friendly interfaces tailored to your target audience, ensuring a seamless and enjoyable experience.",
    },
    {
      title: "Reliable Project Delivery",
      image: "/delivery.jpg",
      desc: "Dedicated to delivering projects on time and within budget, while maintaining the highest quality standards.",
    },
  ];
  return (
    <div
      className="relative bg-dot-white/[0.2] bg-slate-800 text-black px-12 pt-10 pb-20 min-h-screen md:px-24 flex align-middle"
      // className="lg:w-2/3 text-black pt-10 lg:py-32"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="m-auto"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="sticky py-10 text-4xl md:text-6xl font-extrabold md:mb-10 tracking-wider text-white text-center">
          Why Me?
        </h1>
        <div className="flex flex-wrap lg:flex-row gap-20 justify-center">
          {datas.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[260px] max-w-[260px] mx-auto"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
                className="object-cover bg-center w-[250px] h-[250px] rounded-xl"
              />
              <h3 className="font-bold text-xl w-fit mt-5 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300 max-w-[260px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1 flex-1 gap-5 xl:grid-cols-2 lg:gap-9"></ul>
      </motion.div>
    </div>
  );
};

export default WhySection;
