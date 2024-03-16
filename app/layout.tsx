import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="antialiased font-medium bg-primary text-primary">
          <Header />
          <div className="max-w-[700px] mx-auto md:px-6 py-2 px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}