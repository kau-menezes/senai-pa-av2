import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google"
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Avaliação 2",
  description: "Avaliação 2 de PA SENAI",
};

const poppinsFont = Poppins({
  weight: ["100", "200","300", "400", "500", "600", "700", "800"],
  style: "normal",
  variable: "--poppinsFont",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased font-poppinsFont`}>
        <Header route1="Primeira Rota 🔢" route2="Segunda Rota 🔢" route3="Terceira Rota 🔢"/>
        <main className="flex flex-col items-center">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
