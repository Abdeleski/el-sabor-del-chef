import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuQRStatic from "@/components/menu-qr-static";
import GallerySection from "@/components/gallery-section";
import HoursServicesSection from "@/components/hours-services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuQRStatic />
      <GallerySection />
      <HoursServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
