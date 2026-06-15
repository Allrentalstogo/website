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
  title: "All Rentals To Go | Renta para Fiestas y Eventos en Houston",
  description:
    "Tu supermercado de servicios para eventos. Robots LED, DJ, Dance Floor, Photo Booth, Coreografías y más. Todo en un solo lugar en Houston, TX.",
  keywords: [
    "renta para fiestas Houston",
    "eventos Houston",
    "robots LED",
    "quinceañera Houston",
    "DJ Houston",
    "party rentals Houston",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} ${bebasNeue.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
