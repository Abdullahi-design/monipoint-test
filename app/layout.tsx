import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moniepoint",
  description: "Moniepoint assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className='relative flex flex-col overflow-hidden min-h-screen'>
          <Nav/>
          <div className='w-full flex-grow flex-1'>{children}</div>
          <Analytics />
          <Footer/>
        </div>
      </body>
    </html>
  );
}
