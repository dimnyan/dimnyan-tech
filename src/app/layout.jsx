// import Head from "next/head";
import Footer from "./_components/Misc/Footer";
import Navbar from "./_components/Misc/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>
        <div className="bg-gray-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
