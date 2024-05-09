"use client";

import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import FeaturedProject from "./_components/Home/FeaturedProject";
import { Analytics } from "@vercel/analytics/react";
import Certifications from "./_components/Home/Certifications";

export default function Home() {
  return (
    <>
      <Analytics />

      <MainBanner />
      <Certifications />
      <FeaturedProject />
      <IntroduceMe />
    </>
  );
}
