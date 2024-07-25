// "use client";

import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import FeaturedProject from "./_components/Home/FeaturedProject";
import { Analytics } from "@vercel/analytics/react";
import Certifications from "./_components/Home/Certifications";
import TechStackComponent from "./_components/Home/TechStack";

export const metadata = {
  title: "Nyoman Lanang K E | dimnyan",
  description:
    "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS open for Freelance",
  image: "/images/my-icon.png",
};

export default function Home() {
  return (
    <>
      <Analytics />

      <MainBanner />
      <TechStackComponent />
      <IntroduceMe />
      <FeaturedProject />
      <Certifications />
    </>
  );
}
