import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Navbar"
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Haberler 2024",
  description: "Haberler 2024 Uygulamasına Hoşgeldiniz!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
     <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-900">
          <Nav />
        </div>
        <Providers>
        <>
        {children}
        </>
        </Providers>
        </body>
    </html>
  );
}
