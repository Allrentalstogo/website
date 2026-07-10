import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import "./globals.css";

const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "All Rentals To Go | Party & Event Rentals in Houston",
  description:
    "Your one-stop shop for event services. LED Robots, DJ, Dance Floor, Photo Booth, Choreography and more. Everything in one place in Houston, TX.",
  keywords: [
    "party rentals Houston",
    "event rentals Houston",
    "LED robots",
    "quinceañera Houston",
    "DJ Houston",
    "renta para fiestas Houston",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${bebasNeue.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
