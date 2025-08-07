import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </div>
  );
}