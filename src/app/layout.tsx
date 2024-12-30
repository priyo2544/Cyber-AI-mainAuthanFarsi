"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import JOS from 'jos-animation';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const satoshiVariable = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Black.woff2",
      style: "black",
      weight: "900",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.woff2",
      style: "bold",
      weight: "700",
    },
    {
      path: "./fonts/satoshi/Satoshi-Light.woff2",
      style: "light",
      weight: "300",
    },
    {
      path: "./fonts/satoshi/Satoshi-Medium.woff2",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  const jos_options = {
    passive: false,
    once: true,
    animation: 'fade-up',
    timingFunction: 'ease',
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: 'down',
    rootMargin: '0% 0% 15% 0%',
  };
  useEffect(() => {
    JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [pathname]);
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshiVariable.variable} antialiased font-sans`}
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
