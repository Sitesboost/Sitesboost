import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}