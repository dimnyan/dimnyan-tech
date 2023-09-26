"use client";
import Footer from "@/components/Footer";
import IntroduceMe from "@/components/IntroduceMe";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";
import ToProjects from "@/components/ToProjects";

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
