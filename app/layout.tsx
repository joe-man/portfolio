import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import UIProvider from "@/providers/UIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joe Man",
  description: "Portfolio page for Joe Man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
