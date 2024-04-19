"use client";

import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import FeaturedProject from "./_components/Home/FeaturedProject";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <MainBanner />
      {/* <div className="lg:flex gap-24 bg-gradient-to-br from-slate-700 to-slate-950 px-12 md:px-24"> */}
      <FeaturedProject />
      <IntroduceMe />
      {/* </div> */}
      {/* <ToProjects /> */}
    </>
  );
}
