'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Clock, Calendar, CheckCircle2, Heart, ShieldCheck, ArrowRight, Smile, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Adding simple animations

export default function DristorDentHome() {
  console.log('DristorDentHome component is rendering');
  
  // Fade-in animation variant
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // --- NEW: Mobile Menu State ---
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">

      {/* --- 1. NAVIGATION BAR (Updated with Mobile Menu) --- */}
      <nav className="fixed top-[calc(var(--promo-height)+env(safe-area-inset-top))] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-20 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

          {/* A. LOGO */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <img src="/logo.png" alt="Dristor Dent" className="h-12 w-auto" />
          </a>

          {/* B. DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-dristor-textLight">
            <a href="#" className="hover:text-dristor-accent transition">Acasă</a>
            <a href="#about" className="hover:text-dristor-accent transition">Despre Noi</a>
            <a href="#servicii" className="hover:text-dristor-accent transition">Servicii</a>
            <a href="#contact" className="hover:text-dristor-accent transition">Contact</a>
          </div>

          {/* C. RIGHT SIDE (Call Button + Mobile Toggle) */}
          <div className="flex items-center gap-4">

              {/* Call Button */}
              <a
                href="tel:0723123456"
                className="hidden md:flex bg-white border-2 border-dristor-accent text-dristor-accent hover:bg-dristor-accent hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all items-center gap-2"
              >
                <Phone size={14} />
                <span>Sună Acum</span>
              </a>

              {/* Mobile Hamburger Toggle (Visible only on Mobile) */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-dristor-text hover:text-dristor-accent transition z-50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
        </div>

        {/* D. MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-6 md:hidden z-40"
          >
             <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-dristor-text hover:text-dristor-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Acasă <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-dristor-text hover:text-dristor-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Despre Noi <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#servicii" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-dristor-text hover:text-dristor-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Servicii <ArrowRight size={16} className="text-gray-300" />
             </a>
             <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-dristor-text hover:text-dristor-accent flex justify-between items-center border-b border-gray-50 pb-2">
                Contact <ArrowRight size={16} className="text-gray-300" />
             </a>
             <div className="pt-2">
                <a href="tel:0723123456" className="w-full bg-dristor-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-center shadow-lg">
                   <Phone size={18} /> Sună pentru Programare
                </a>
             </div>
          </motion.div>
        )}
      </nav>

      {/* --- 1. HERO SECTION (Warm & Personal) --- */}
      <section className="relative pt-[300px] md:pt-32 pb-20 bg-cover bg-no-repeat md:min-h-screen md:flex md:items-center items-end" style={{backgroundImage: 'url(/image3.jpg)', backgroundPosition: '86% center'}}>
        {/* Overlay for both mobile and desktop */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl px-6 ml-4 md:ml-32">
          <div className="flex justify-start">
          
          {/* Left: Text */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="space-y-6 relative z-10 md:relative md:z-auto max-w-lg"
          >
            <div className="hidden md:inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm text-base font-bold text-dristor-accentDark">
               <Smile size={20} />
               <span>Lângă tine din 2008</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Dristor Dent <br/>
              <span className="text-dristor-accent">Cabinet dentar</span>
            </h1>

            <p className="hidden md:block text-xl md:text-2xl text-white leading-relaxed max-w-md">
              Servicii stomatologice complete pentru toată familia.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="#programare" className="bg-dristor-accent hover:bg-dristor-accentDark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-dristor-accent/30 transition-all flex items-center justify-center gap-2">
                <Calendar size={18} />
                Programează-te
              </a>
              <div className="flex flex-col justify-center text-sm text-white pl-2">
                <div className="flex items-center gap-2 font-bold text-white">
                   <Phone size={14} className="text-dristor-accent" />
                   <span>0721 295 839 </span> {/* REPLACE WITH REAL PHONE */}
                </div>
                <span>Str. Râmnicul Sărat, nr. 12, Dristor</span>
              </div>
            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* --- 2. ABOUT (Short & Human) --- */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="font-heading text-3xl font-bold text-dristor-text">Mai mult decât un cabinet</h2>
           <p className="text-dristor-textLight text-lg leading-relaxed max-w-2xl mx-auto">
              Suntem o micro-întreprindere prezentă în Dristor încă din 2008. Am crescut alături de pacienții noștri, tratând copii care acum au devenit adulți. La noi, nu ești un "număr de fișă", ești vecinul sau prietenul nostru.
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
              <div className="bg-dristor-bg p-6 rounded-2xl border border-dristor-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dristor-accent mb-4 shadow-sm">
                    <CheckCircle2 size={20} />
                 </div>
                 <h3 className="font-bold text-dristor-text mb-2">Explicații Clare</h3>
                 <p className="text-sm text-dristor-textLight">Îți explicăm fiecare pas înainte. Nu începem nimic până nu ești confortabil.</p>
              </div>
              <div className="bg-dristor-bg p-6 rounded-2xl border border-dristor-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dristor-accent mb-4 shadow-sm">
                    <ShieldCheck size={20} />
                 </div>
                 <h3 className="font-bold text-dristor-text mb-2">Transparență</h3>
                 <p className="text-sm text-dristor-textLight">Stabilim împreună planul și costurile de la bun început. Fără surprize.</p>
              </div>
              <div className="bg-dristor-bg p-6 rounded-2xl border border-dristor-highlight">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-dristor-accent mb-4 shadow-sm">
                    <Heart size={20} />
                 </div>
                 <h3 className="font-bold text-dristor-text mb-2">Fără Teamă</h3>
                 <p className="text-sm text-dristor-textLight">Avem răbdare. Știm că vizita la dentist nu e plăcerea nimănui, așa că o facem cât mai ușoară.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- 3. SERVICES (Simple List) --- */}
      <section id="servicii" className="py-20 px-6 max-w-5xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-dristor-text">Ce putem rezolva la Dristor Dent</h2>
            <p className="text-dristor-textLight mt-2">Servicii stomatologice complete pentru toată familia.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-dristor-accent hover:shadow-md transition">
               <h3 className="font-heading text-xl font-bold mb-4 text-dristor-text">Tratamente Generale</h3>
               <ul className="space-y-3 text-dristor-textLight">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dristor-accent rounded-full"></div> Consultații și plan tratament</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dristor-accent rounded-full"></div> Tratarea cariilor (Obturații)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dristor-accent rounded-full"></div> Tratamente de canal (Endodonție)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-dristor-accent rounded-full"></div> Urgențe dureroase</li>
               </ul>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-400 hover:shadow-md transition">
               <h3 className="font-heading text-xl font-bold mb-4 text-dristor-text">Estetică & Protetică</h3>
               <ul className="space-y-3 text-dristor-textLight">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Coroane și punți dentare</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Proteze mobile și lucrări fixe</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Chirurgie și implanturi</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Igienizare (Detartraj ultrasunete)</li>
               </ul>
            </div>
         </div>
      </section>

      {/* --- 4. PERSONAL CARE (Emotional Connection) --- */}
      <section className="bg-dristor-accent/10 py-16 px-6 rounded-3xl mx-4 md:mx-12 my-12 relative overflow-hidden">
         <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-heading text-3xl font-bold text-dristor-text mb-6">Cum avem grijă de voi</h2>
            <p className="text-xl italic text-dristor-textLight mb-8">
               "Ne dorim ca fiecare pacient să se simtă în siguranță, ascultat și înțeles. Acordăm timp pentru întrebări, explicăm opțiunile și alegem împreună varianta potrivită."
            </p>
            <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm text-dristor-text font-bold text-sm">
               Vrem să fim dentistul familiei, nu doar un loc pentru urgențe.
            </div>
         </div>
         {/* Decorative Background Element */}
         <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
      </section>

      {/* --- 5. APPOINTMENT FORM --- */}
     <section className="py-16 px-6 bg-dristor-bg">
       <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12">
           <h2 className="font-heading text-3xl font-bold text-dristor-text mb-4">Programează-te Online</h2>
           <p className="text-dristor-textLight">Completează formularul și te contactăm pentru confirmare</p>
         </div>

         <div className="bg-white p-8 rounded-3xl shadow-lg">
           <form className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-bold text-dristor-textLight uppercase tracking-wider mb-2">Numele tău</label>
                 <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-dristor-accent transition" placeholder="Ex: Maria Popescu" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-dristor-textLight uppercase tracking-wider mb-2">Telefon</label>
                 <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-dristor-accent transition" placeholder="Ex: 07xx xxx xxx" />
               </div>
             </div>
             <div>
               <label className="block text-sm font-bold text-dristor-textLight uppercase tracking-wider mb-2">Motivul vizitei</label>
               <select className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-dristor-accent transition bg-white text-dristor-text">
                 <option>Control de rutină</option>
                 <option>Durere / Urgență</option>
                 <option>Igienizare</option>
                 <option>Lucrări dentare</option>
                 <option>Altceva</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-bold text-dristor-textLight uppercase tracking-wider mb-2">Mesaj (Opțional)</label>
               <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-dristor-accent transition h-24" placeholder="Detalii suplimentare..."></textarea>
             </div>
             <button className="w-full bg-dristor-accent hover:bg-dristor-accentDark text-white py-4 rounded-xl font-bold shadow-md transition-all">
               Trimite Solicitarea
             </button>
             <p className="text-xs text-center text-gray-500 mt-4">Vă vom contacta telefonic pentru confirmare.</p>
           </form>
         </div>
       </div>
     </section>

     {/* --- 6. NEW FOOTER (4 Columns) --- */}
      <footer id="contact" className="bg-dristor-text text-white pt-16 pb-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Col 1: Logo & Strong Message */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-lg">
                  <img src="/logo.png" alt="Dristor Dent" className="h-16 w-auto" />
                </div>
             </div>
             <p className="text-dristor-bg/80 leading-relaxed font-light border-l-2 border-dristor-accent pl-4">
               Servicii stomatologice complete pentru toată familia.
             </p>
          </div>

          {/* Col 2: Program */}
          <div>
             <h3 className="font-heading font-bold text-xl mb-6 text-dristor-accent">Program</h3>
             <ul className="space-y-3 text-dristor-bg/80">
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Luni - Vineri</span>
                 <span className="font-bold text-white">09:00 - 20:00</span>
               </li>
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Sâmbătă</span>
                 <span className="text-dristor-accent">Închis</span>
               </li>
               <li className="flex justify-between border-b border-white/10 pb-2">
                 <span>Duminică</span>
                 <span className="text-dristor-accent">Închis</span>
               </li>
             </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
             <h3 className="font-heading font-bold text-xl mb-6 text-dristor-accent">Contact</h3>
             <ul className="space-y-4 text-dristor-bg/80">
                <li className="flex items-start gap-3">
                   <MapPin className="mt-1 text-dristor-accent shrink-0" size={18} />
                   <span>Str. Râmnicul Sărat, nr. 12,<br/>Bl. C20, Sc. 5, Ap. 61,<br/>Sector 3, București</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="text-dristor-accent shrink-0" size={18} />
                   <span>0721 295 839</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="text-dristor-accent shrink-0" size={18} />
                   <span>contact@dristordent.ro</span>
                </li>
             </ul>
          </div>

          {/* Col 4: Map (Iframe) */}
          <div className="h-full min-h-[250px] rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 bg-white/5 relative">
             <iframe
               src="https://maps.google.com/maps?q=Strada+Râmnicul+Sărat+12,+București&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-dristor-bg/40">
          © 2026 Dristor Dent SRL. Toate drepturile rezervate. Crafted in the clouds by{' '}
          <a href="https://sky.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <img src="/skyro.png" alt="sky.ro" className="inline h-6 w-auto" />
          </a>
        </div>
      </footer>

     {/* --- WHATSAPP FLOATING BUTTON (SVG Version - No Font Needed) --- */}
     <a
       href="https://wa.me/40720088880"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat on WhatsApp"
       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
     >
       {/* Official WhatsApp SVG Icon */}
       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
       </svg>
     </a>

    </div>
  );
}