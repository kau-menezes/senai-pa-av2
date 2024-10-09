import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Avaliação 2",
  description: "Avaliação 2 de PA SENAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header route1="Primeira Rota 🔢" route2="Segunda Rota 🔢" route3="Terceira Rota 🔢"/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
