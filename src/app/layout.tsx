import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

// Friendly, rounded headings
const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

// Clean, legible body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dristor Dent | Cabinet Stomatologic de Familie",
  description: "Cabinet stomatologic privat în Dristor. Tratamente atente pentru adulți și copii, din 2008. Sunați pentru programare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${nunito.variable} ${inter.variable} font-body antialiased bg-dristor-bg text-dristor-text`}>
        {/* Promo Bar */}
        <div className="promo-bar">
          <div className="promo-desktop">
            <span>Concept demo • Conținut orientativ • Dezvoltat de sky.ro • <a href="mailto:dan.trifan@sky.ro">dan.trifan@sky.ro</a> • <a href="tel:+40720088880">+4 0720 088 880</a></span>
            <a className="btn btn-promo" href="https://wa.me/40720088880">WhatsApp</a>
          </div>
          <div className="promo-mobile">
            <div className="promo-left">Concept demo</div>
            <div className="promo-center">Dezvoltat de sky.ro</div>
            <div className="promo-right"><a href="tel:+40720088880">+4 0720 088 880</a></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}