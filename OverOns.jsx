import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const oprichters = [
  {
    naam: "Oprichter 1",
    rol: "Design & Strategie",
    bio: "Gepassioneerd door visueel design en merkidentiteit. Brengt jouw ideeën tot leven met doordachte layouts en sterke esthetiek.",
    feiten: [
      { label: "Focus", waarde: "UI/UX Design" },
      { label: "Specialiteit", waarde: "Merkidentiteit" },
      { label: "Werkwijze", waarde: "Klantgericht" },
      { label: "Waarde", waarde: "Kwaliteit Boven Alles" },
    ],
    initials: "O1",
  },
  {
    naam: "Oprichter 2",
    rol: "Development & Techniek",
    bio: "Bouwt snelle, veilige en schaalbare websites. Zet ontwerpen om in technisch perfecte, goed presterende digitale producten.",
    feiten: [
      { label: "Focus", waarde: "Front-end Dev" },
      { label: "Specialiteit", waarde: "Performance" },
      { label: "Werkwijze", waarde: "Precisiegerich" },
      { label: "Waarde", waarde: "Code = Vakmanschap" },
    ],
    initials: "O2",
  },
];

export default function OverOns() {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".founder-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("revealed"), i * 150);
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

      {/* Header */}
      <section className="pt-40 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">Het team</p>
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-[#14181f]">
            Over <span className="text-[#1B3A6B]">Ons</span>
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-xl leading-relaxed">
            Sitesboost. is opgericht door twee enthousiaste professionals met een gedeelde passie: bedrijven helpen groeien met een sterke online aanwezigheid.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-gray-50" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {oprichters.map((o, i) => (
              <div key={o.naam} className={`founder-card ${i % 2 === 0 ? "section-reveal-left" : "section-reveal"} bg-white rounded-xl border border-gray-100 p-10`}>
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-14 h-14 bg-[#1B3A6B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-bold text-white">{o.initials}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#14181f]">{o.naam}</h2>
                    <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wide">{o.rol}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-7 pl-4 border-l-2 border-[#C9A84C]">{o.bio}</p>
                <div className="grid grid-cols-2 gap-3">
                  {o.feiten.map((feit) => (
                    <div key={feit.label} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{feit.label}</p>
                      <p className="text-xs font-semibold text-[#1B3A6B]">{feit.waarde}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-base font-semibold text-[#1B3A6B]">Samen bouwen wij aan jouw digitale toekomst.</p>
            <Link to="/contact" className="shrink-0 bg-[#1B3A6B] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#C9A84C] transition-colors whitespace-nowrap">
              Start Jouw Project →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
}