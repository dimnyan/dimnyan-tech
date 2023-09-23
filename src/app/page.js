import Footer from "@/components/Footer";
import IntroduceMe from "@/components/IntroduceMe";
import MainBanner from "@/components/MainBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <IntroduceMe />
      <Footer />
    </>
  );
}
