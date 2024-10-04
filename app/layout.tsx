import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  description: "Today daily combo today riddle solution",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="i-dkO4eDUXH2Sv5NU03zCqiepqL804A3f3qgR-K81cA" />
        <link rel="icon" href="/logo.png" className="rounded-md" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212]`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
          <Analytics />
          <SpeedInsights />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
