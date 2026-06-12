import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
