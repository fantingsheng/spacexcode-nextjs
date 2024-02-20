// import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timfan",
  description: "A frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Header />
          <main className="px-4 md:px-6 pt-20 pb-24 md:pb-44 max-w-[700px] mx-auto ring-offset-primary">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
