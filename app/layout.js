import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "快生图",
  description: "通过简单的配置快速生成特定功能的图片",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
