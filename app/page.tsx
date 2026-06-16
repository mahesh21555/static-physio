import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickContactStrip from "@/components/QuickContactStrip";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <QuickContactStrip />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <WhyChooseUs />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
