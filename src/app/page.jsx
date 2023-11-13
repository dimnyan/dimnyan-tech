"use client";
import Footer from "@/app/_components/Misc/Footer";
import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import Navbar from "@/app/_components/Misc/Navbar";
import ToProjects from "@/app/_components/Home/ToProjects";
import FeaturedProject from "./_components/Home/FeaturedProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <div className="md:flex">
        <FeaturedProject />
        <IntroduceMe />
      </div>
      <ToProjects />
      <Footer />
    </>
  );
}
