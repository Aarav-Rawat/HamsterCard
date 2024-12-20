import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "DailyCombos",
  description: "today daily combos, today riddle solution, today rebus solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" className="rounded-md" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212]`}
      >
       
          {children}
          
       

      </body>
    </html>
  );
}
