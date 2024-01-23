"use client";

import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import FeaturedProject from "./_components/Home/FeaturedProject";

export default function Home() {
  return (
    <>
      <MainBanner />
      {/* <div className="lg:flex gap-24 bg-gradient-to-br from-slate-700 to-slate-950 px-12 md:px-24"> */}
      <IntroduceMe />
      <FeaturedProject />
      {/* </div> */}
      {/* <ToProjects /> */}
    </>
  );
}
