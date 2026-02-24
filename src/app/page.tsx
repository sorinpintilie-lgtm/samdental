'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  Phone, MapPin, Clock, Calendar, CheckCircle2, Heart, 
  ShieldCheck, ArrowRight, Smile, Mail, Menu, X,
  Sparkles, Layers, Target, Activity, Zap, Crown
} from 'lucide-react';
import { motion } from 'framer-motion';

// Datele pentru cele 8 servicii
const servicesData = [
  { id: 1, title: 'Ortodonție', icon: <Smile size={24} />, desc: 'Aparate dentare invizibile sau clasice pentru alinierea perfectă a dinților și o ocluzie sănătoasă.' },
  { id: 2, title: 'Odontoterapie', icon: <ShieldCheck size={24} />, desc: 'Tratamentul cariilor dentare folosind materiale compozite premium, fotopolimerizabile, complet fizionomice.' },
  { id: 3, title: 'Endodonție', icon: <Target size={24} />, desc: 'Tratamente de canal precise, realizate cu instrumentar rotativ, pentru a salva dinții de la extracție.' },
  { id: 4, title: 'Protetică', icon: <Layers size={24} />, desc: 'Refacerea funcției și esteticii prin coroane, punți dentare și fațete din materiale biocompatibile (zirconiu, Emax).' },
  { id: 5, title: 'Implanturi Dentare', icon: <Crown size={24} />, desc: 'Implanuri dentare de înaltă calitate, cu garanție pe viață, pentru înlocuirea dinților lipsă.' },
  { id: 6, title: 'Dinți Ficși în 24h', icon: <Zap size={24} />, desc: 'Soluții rapide pentru restaurarea zâmbetului. Proceduri minim invazive cu recuperare imediată.' },
  { id: 7, title: 'Parodontologie', icon: <Activity size={24} />, desc: 'Prevenția și tratamentul bolilor gingivale și ale țesuturilor de susținere a dinților (cunoscuta paradontoză).' },
  { id: 8, title: 'Estetică', icon: <Sparkles size={24} />, desc: 'Fațete dentare, albire profesională și design al zâmbetului pentru un aspect complet natural și strălucitor.' },
];

export default function SamDentalHome() {
  // --- STATE-URI ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // --- ANIMATII ---
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // --- HANDLER SCROLL PENTRU CAROUSEL MOBIL ---
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollX = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const newIndex = Math.round(scrollX / width);
      setActiveServiceSlide(newIndex);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">

      {/* --- 1. NAVIGATION BAR --- */}
      <nav className="fixed top-[calc(var(--promo-height)+env(safe-area-inset-top))] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-20 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group z-50">
            <img src="/logo.png" alt="Sam Dental" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-sam-textLight">
            <a href="#" className="hover:text-sam-accent transition">Acasă</a>
            <a href="#about" className="hover:text-sam-accent transition">Despre Noi</a>
            <a href="#servicii" className="hover:text-sam-accent transition">Servicii</a>
            <a href="#contact" className="hover:text-sam-accent transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
              <a
                href="tel:0731716194"
                className="hidden md:flex bg-white border-2 border-sam-accent text-sam-accent hover:bg-sam-accent hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all items-center gap-2"
              >
                <Phone size={14} />
                <span>Sună Acum</span>
              </a>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-sam-text hover:text-sam-accent transition z-50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-6 md:hidden z-40"
          >
             <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-sam-text hover:text-sam-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Acasă <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-sam-text hover:text-sam-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Despre Noi <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#servicii" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-sam-text hover:text-sam-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Servicii <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-sam-text hover:text-sam-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Contact <ArrowRight size={16} className="text-gray-300" />
             </a>
             <div className="pt-2">
                <a href="tel:0731716194" className="w-full bg-sam-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-center shadow-lg">
                   <Phone size={18} /> Sună pentru Programare
                </a>
             </div>
          </motion.div>
        )}
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-[300px] md:pt-32 pb-20 bg-cover bg-no-repeat md:min-h-screen md:flex md:items-center items-end" style={{backgroundImage: 'url(/image3.jpg)', backgroundPosition: '86% center'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl px-6 ml-4 md:ml-32">
          <div className="flex justify-start">
          
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="space-y-6 relative z-10 md:relative md:z-auto max-w-lg"
          >
            <div className="hidden md:inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm text-base font-bold text-sam-accentDark">
               <ShieldCheck size={20} />
               <span>Clinică Stomatologică Premium</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Sam Dental <br/>
              <span className="text-sam-accent">București</span>
            </h1>

            <p className="hidden md:block text-xl md:text-2xl text-white leading-relaxed max-w-md">
              Implantologie digitală, chirurgie ghidată și estetică dentară avansată în Sectorul 5.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="#programare" className="bg-sam-accent hover:bg-sam-accentDark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-sam-accent/30 transition-all flex items-center justify-center gap-2">
                <Calendar size={18} />
                Programează-te
              </a>
              <div className="flex flex-col justify-center text-sm text-white pl-2">
                <div className="flex items-center gap-2 font-bold text-white">
                   <Phone size={14} className="text-sam-accent" />
                   <span>0731 716 194</span>
                </div>
                <span>Șos. Alexandriei 126, etaj 1</span>
              </div>
            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* --- 2. ABOUT (Personalizat Sam Dental) --- */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="font-heading text-3xl font-bold text-sam-text">
             Stomatologie premium în București
           </h2>
           <p className="text-sam-textLight text-lg leading-relaxed max-w-2xl mx-auto">
             La Sam Dental oferim tratamente stomatologice personalizate, susținute de expertiză medicală, tehnologie digitală de ultimă generație și protocoale clinice riguroase. Punem accent pe precizie, estetică naturală și confort, oferind pacienților noștri o experiență medicală premium, într-un cadru discret și sigur.
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
              {/* Card 1 */}
              <div className="bg-sam-bg p-6 rounded-2xl border border-sam-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sam-accent mb-4 shadow-sm">
                    <CheckCircle2 size={20} />
                 </div>
                 <h3 className="font-bold text-sam-text mb-2">Precizie digitală</h3>
                 <p className="text-sm text-sam-textLight">
                   Planificare 3D pe baza scanării CBCT și amprentelor intraorale, pentru tratamente sigure, fără incizii clasice și fără traumă inutilă.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="bg-sam-bg p-6 rounded-2xl border border-sam-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sam-accent mb-4 shadow-sm">
                    <ShieldCheck size={20} />
                 </div>
                 <h3 className="font-bold text-sam-text mb-2">Siguranță și control</h3>
                 <p className="text-sm text-sam-textLight">
                   Folosim ghidul chirurgical personalizat pentru inserarea implanturilor dentare cu un nivel maxim de precizie și cu un risc minim de erori.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="bg-sam-bg p-6 rounded-2xl border border-sam-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sam-accent mb-4 shadow-sm">
                    <Smile size={20} />
                 </div>
                 <h3 className="font-bold text-sam-text mb-2">Dinți ficși în aceeași zi</h3>
                 <p className="text-sm text-sam-textLight">
                   În cazurile eligibile, pacientul pleacă din clinică în aceeași zi cu lucrarea provizorie fixă, funcțională și estetică, fără perioade lungi fără dinți.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- 3. SERVICES (6 CARDS, MOBILE CAROUSEL) --- */}
      <section id="servicii" className="py-20 md:px-6 max-w-6xl mx-auto">
         <div className="text-center mb-12 px-6">
            <h2 className="font-heading text-3xl font-bold text-sam-text">Serviciile noastre</h2>
            <p className="text-sam-textLight mt-2">Soluții dentare complete, realizate cu precizie digitală.</p>
         </div>

         {/* Container principal: grid pe desktop, flex scrollable pe mobil */}
         <div 
           ref={scrollContainerRef}
           onScroll={handleScroll}
           className="flex md:grid md:grid-cols-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
         >
            {servicesData.map((service) => (
              <div key={service.id} className="w-full flex-none snap-center px-6 md:px-0 md:w-auto">
                {/* 'w-full' forțează cardul să ia 100% din ecran pe mobil */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sam-accent hover:shadow-md transition h-full flex flex-col">
                   <div className="w-12 h-12 bg-sam-accent/10 rounded-xl flex items-center justify-center text-sam-accent mb-6">
                      {service.icon}
                   </div>
                   <h3 className="font-heading text-xl font-bold mb-3 text-sam-text">{service.title}</h3>
                   <p className="text-sam-textLight text-sm leading-relaxed flex-grow">
                      {service.desc}
                   </p>
                </div>
              </div>
            ))}
         </div>

         {/* Pagination Buline (Doar pe Mobil) */}
         <div className="flex justify-center gap-2 mt-8 md:hidden">
           {servicesData.map((_, index) => (
             <div
               key={index}
               className={`h-2 rounded-full transition-all duration-300 ${
                 activeServiceSlide === index ? 'w-6 bg-sam-accent' : 'w-2 bg-gray-300'
               }`}
             />
           ))}
         </div>
      </section>

      {/* --- 4. PERSONAL CARE --- */}
      <section className="bg-sam-accent/10 py-16 px-6 rounded-3xl mx-4 md:mx-12 my-12 relative overflow-hidden">
         <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-heading text-3xl font-bold text-sam-text mb-6">Zâmbetul tău, misiunea noastră</h2>
            <p className="text-xl italic text-sam-textLight mb-8">
               "La Sam Dental oferim tratamente stomatologice personalizate, susținute de expertiză medicală, tehnologie digitală de ultimă generație și protocoale clinice riguroase. Punem accent pe precizie, estetică naturală și confort, oferind pacienților noștri o experiență medicală premium, într-un cadru discret și sigur."
            </p>
            <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm text-sam-text font-bold text-sm">
               Dinți ficși într-o singură zi.
            </div>
         </div>
         <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
      </section>

      {/* --- 5. APPOINTMENT FORM --- */}
     <section id="programare" className="py-16 px-6 bg-sam-bg">
       <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12">
           <h2 className="font-heading text-3xl font-bold text-sam-text mb-4">Programează-te Online</h2>
           <p className="text-sam-textLight">Completează formularul și te contactăm pentru confirmare</p>
         </div>

         <div className="bg-white p-8 rounded-3xl shadow-lg">
           <form className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-bold text-sam-textLight uppercase tracking-wider mb-2">Numele tău</label>
                 <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sam-accent transition" placeholder="Ex: Maria Popescu" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-sam-textLight uppercase tracking-wider mb-2">Telefon</label>
                 <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sam-accent transition" placeholder="Ex: 07xx xxx xxx" />
               </div>
             </div>
             <div>
               <label className="block text-sm font-bold text-sam-textLight uppercase tracking-wider mb-2">Serviciul dorit</label>
               <select className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sam-accent transition bg-white text-sam-text">
                 <option>Consultație & Plan Tratament</option>
                 <option>Ortodonție (Aparat Dentar)</option>
                 <option>Estetică & Protetică</option>
                 <option>Odontoterapie / Endodonție</option>
                 <option>Durere / Urgență</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-bold text-sam-textLight uppercase tracking-wider mb-2">Mesaj (Opțional)</label>
               <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sam-accent transition h-24" placeholder="Detalii suplimentare..."></textarea>
             </div>
             <button className="w-full bg-sam-accent hover:bg-sam-accentDark text-white py-4 rounded-xl font-bold shadow-md transition-all">
               Trimite Solicitarea
             </button>
             <p className="text-xs text-center text-gray-500 mt-4">Vă vom contacta telefonic pentru confirmare.</p>
           </form>
         </div>
       </div>
     </section>

     {/* --- 6. FOOTER --- */}
      <footer id="contact" className="bg-sam-text text-white pt-16 pb-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-lg">
                  <img src="/logo.png" alt="Sam Dental" className="h-16 w-auto" />
                </div>
             </div>
             <p className="text-sam-bg/80 leading-relaxed font-light border-l-2 border-sam-accent pl-4">
               Clinică stomatologică premium dedicată implantologiei digitale și esteticii dentare.
             </p>
          </div>

          <div>
             <h3 className="font-heading font-bold text-xl mb-6 text-sam-accent">Program</h3>
             <ul className="space-y-3 text-sam-bg/80">
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Luni - Vineri</span>
                 <span className="font-bold text-white">09:00 - 20:00</span>
               </li>
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Sâmbătă</span>
                 <span className="text-sam-accent">Închis</span>
               </li>
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Duminică</span>
                 <span className="text-sam-accent">Închis</span>
               </li>
             </ul>
          </div>

          <div>
             <h3 className="font-heading font-bold text-xl mb-6 text-sam-accent">Contact</h3>
             <ul className="space-y-4 text-sam-bg/80">
                <li className="flex items-start gap-3">
                   <MapPin className="mt-1 text-sam-accent shrink-0" size={18} />
                   <span>Șoseaua Alexandriei 126,<br/>etaj 1, Sector 5, București</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="text-sam-accent shrink-0" size={18} />
                   <span>0731 716 194</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="text-sam-accent shrink-0" size={18} />
                   <span>office@samdental.ro</span>
                </li>
             </ul>
          </div>

          <div className="h-full min-h-[250px] rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 bg-white/5 relative">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.5830655868604!2d26.0495846!3d44.4006798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff83d4b7f553%3A0xe88decbd5abaf5c5!2sSAM%20DENTAL%20S.R.L.!5e0!3m2!1sen!2sro!4v1771938291796!5m2!1sen!2sro"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="transition duration-500 absolute inset-0"
             ></iframe>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-sam-bg/40">
          © 2026 Sam Dental. Toate drepturile rezervate. Crafted in the clouds by{' '}
          <a href="https://sky.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <img src="/skyro.png" alt="sky.ro" className="inline h-6 w-auto" />
          </a>
        </div>
      </footer>

     {/* --- WHATSAPP FLOATING BUTTON --- */}
     <a
       href="https://wa.me/40720088880"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat on WhatsApp"
       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
     >
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
       </svg>
     </a>

    </div>
  );
}
