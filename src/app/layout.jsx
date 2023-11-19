import Footer from "./_components/Misc/Footer";
import Navbar from "./_components/Misc/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | dimnyan",
  description:
    "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in ReactJS",
  author: { "@type": "Person", name: "Nyoman Lanang Kresna Erlangga" },
};

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
