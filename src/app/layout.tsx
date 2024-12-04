import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/css/globals.css";
import "../app/css/common.css";
import Navbar from "./components/Navbar";
import ClientProvider from "./redux/ClientProvider";
import CommonComponents from "./components/others/CommonComponents";
// import ""
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "safar - travel the world",
  description: "Travel the world with safar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProvider>
          <CommonComponents />
          <Navbar />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
