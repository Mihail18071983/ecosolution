"use client";

import Head from "next/head";
import { Fira_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import { AppProvider } from "@/utils/AppContex";



const firaSans = Fira_Sans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-sans",
});

const oswald = Oswald({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${firaSans.variable} ${oswald.variable} `} lang="en">
      <Head>
        <title>Ecosolution</title>
        <meta name="description" content="About altervative power source" />
      </Head>
      <body className="bg-main-background-color">
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-center" />
        </AppProvider>
      </body>
    </html>
  );
}
