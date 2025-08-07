import { Montserrat } from "next/font/google";
import "@/styles/globals.css";



const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
      className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
