import HomePage from "./componets/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Cybersecurity | Your Vision, My Code",
  description: "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000',
  colorScheme: 'dark',
  robots: 'index, follow',
  authors: [{ name: 'AI Cybersecurity', url: 'https://www.example.com' }],
  creator: 'AI Cybersecurity',
  publisher: 'AI Cybersecurity',
  openGraph: {
    title: "Hamza Khan | Building Digital Success Stories | Full Stack & AI Expert",
    description:  "Your vision, my code - Creating powerful digital experiences that drive growth. Join 20+ satisfied clients who've transformed their online presence.",
    url: "https://cyber-ai-two.vercel.app/",
    siteName: "Hamza Khan's Portfolio",
    images: [
      {
        url: `https://cyber-ai-two.vercel.app/images/001.png`,
        width: 1800,
        height: 945,
        alt: "Hamza Khan - Web Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>  
  );
}
