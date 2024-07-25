import techStack from "@/data/TechStack.json";
import Image from "next/image";

const TechStackComponent = () => {
  return (
    <div>
      <ul className="icon-container">
        {techStack.map((item, index) => (
          <li key={index}>
            <Image
              src={item.icon}
              alt={item.languageName}
              width={400}
              height={400}
              className="px-10 my-10 saturate-50"
            />
          </li>
        ))}
        {techStack.map((item, index) => (
          <li key={index}>
            <Image
              src={item.icon}
              alt={item.languageName}
              width={400}
              height={400}
              className="px-10 my-10 saturate-50"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackComponent;
