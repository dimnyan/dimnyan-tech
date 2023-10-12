import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projects | dimnyan",
  description:
    "Nyoman Lanang Kresna | Project List Portofolio | Indonesian Front-End IT Web Developer specialized in ReactJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
