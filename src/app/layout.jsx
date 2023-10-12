import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | dimnyan",
  description:
    "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in ReactJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
