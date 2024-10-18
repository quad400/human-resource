import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import {Navbar} from "@/components/nav-bar";
import { FooterBar } from "@/components/footer-bar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Home | Human Resources",
  icons: [
    {
      url: "/assets/logo.png",
      href: "/assets/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
        <Navbar />
        <main className="flex justify-center items-center w-full">
          {children}
        </main>
        <FooterBar />
      </body>
    </html>
  );
}
