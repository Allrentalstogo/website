"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { QuoteProvider } from "@/context/QuoteContext";
import LanguageModal from "@/components/LanguageModal";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MainServices from "@/components/MainServices";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Promotions from "@/components/Promotions";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FloatingMenu from "@/components/FloatingMenu";

export default function Home() {
  return (
    <LanguageProvider>
      <QuoteProvider>
      <LanguageModal />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MainServices />
        <About />
        <Gallery />
        <VideoGallery />
        <Promotions />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <FloatingMenu />
      </QuoteProvider>
    </LanguageProvider>
  );
}
