import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const diensten = [
  { nr: "01", titel: "Website Design", omschrijving: "Strak en visueel sterk ontwerp dat jouw merk perfect weerspiegelt en bezoekers omzet in klanten." },
  { nr: "02", titel: "Development", omschrijving: "Technisch solide, razendsnel en mobielvriendelijk. Gebouwd met moderne technologie." },
  { nr: "03", titel: "Lancering & Support", omschrijving: "Van ontwerp tot live. Wij begeleiden het hele traject en blijven beschikbaar na oplevering." },
];

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".fade-up").forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      {/* Services strip */}
      <section className="py-36 bg-gray-50" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Wat wij doen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14181f]">Onze <span className="text-[#1B3A6B]">diensten</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {diensten.map((d) => (
              <div key={d.nr} className="fade-up bg-white border border-gray-100 rounded-xl p-10 hover:border-[#1B3A6B]/20 hover:shadow-sm transition-all duration-300">
                <p className="text-xs font-semibold text-gray-300 mb-5">{d.nr}</p>
                <h3 className="text-lg font-semibold text-[#14181f] mb-4">{d.titel}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{d.omschrijving}</p>
                <Link to="/diensten" className="text-sm font-semibold text-[#1B3A6B] hover:text-[#C9A84C] transition-colors">
                  Meer info →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-14 flex gap-3">
            <Link to="/diensten" className="bg-[#1B3A6B] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#C9A84C] transition-colors">
              Alle diensten bekijken →
            </Link>
            <Link to="/over-ons" className="border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-md hover:border-[#1B3A6B] hover:text-[#1B3A6B] transition-all">
              Over Ons
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-28 bg-[#1B3A6B]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Klaar om te starten?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Laten we jouw website bouwen.
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-[#C9A84C] text-white text-sm font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 whitespace-nowrap"
          >
            Gratis Offerte Aanvragen →
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}