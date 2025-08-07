import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budgy",
  description: "Sistema de Orçamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${montserrat.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </div>
  );
}
