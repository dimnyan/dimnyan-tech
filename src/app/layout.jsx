// import Head from "next/head";
import Footer from "./_components/Misc/Footer";
import Navbar from "./_components/Misc/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   author: { "@type": "Person", name: "Nyoman Lanang Kresna Erlangga" },
// };

export async function generateMetadata() {
  return {
    title: "Home | dimnyan",
    description:
      "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS",
    image: "/images/my-icon.png",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
