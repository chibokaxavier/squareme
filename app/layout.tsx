"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/Redux/store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Squareme</title>
      <body className={`${inter.variable} antialiased`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <div className="flex">
              <Sidebar />
              {children}
            </div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
