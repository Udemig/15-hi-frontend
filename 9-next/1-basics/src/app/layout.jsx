import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { default: "Getir", template: "%s | Getir" },
  description: "Bir şeyler sipariş eden",
  keywords: ["e-ticaret", "yemek", "sipariş"],
  author: "Furkan Evin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}>
      <body className="min-h-screen flex flex-col text-4xl text-center p-10 gap-10">
        <header>HEADER</header>

        <main className="flex-1">{children}</main>

        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
