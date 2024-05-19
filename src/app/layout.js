import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIADOTS",
  description: "Ableism is a desecration of the sacred",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gfgrey"}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
