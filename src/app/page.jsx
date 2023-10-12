"use client";
import Footer from "@/app/_components/Misc/Footer";
import IntroduceMe from "@/app/_components/Home/IntroduceMe";
import MainBanner from "@/app/_components/Home/MainBanner";
import Navbar from "@/app/_components/Misc/Navbar";
import ToProjects from "@/app/_components/Home/ToProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <IntroduceMe />
      <ToProjects />
      <Footer />
    </>
  );
}
