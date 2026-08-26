import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import RouteLoader from "@/components/RouteLoader";  

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PicoSoft Solutions",
  description:
    "Pico Soft Solutions builds high-quality, creative and agile business products — web applications, mobile apps and web services engineered to deliver measurable value to your customers.",
  metadataBase: new URL("https://picosoftsolutions.com"),
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "PicoSoft Solutions",
    description:
      "Software that drives your business forward. Web, mobile and cloud engineering delivered by a senior, dedicated team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body bg-[#05080f] text-white antialiased">
          <RouteLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
