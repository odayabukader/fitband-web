import * as React from 'react';
import { motion } from 'motion/react';
import { Hero } from '@/app/components/Hero';
import { Problems } from '@/app/components/Problems';
import { ProductShowcase } from '@/app/components/ProductShowcase';
import { SocialProof } from '@/app/components/SocialProof';
import { OfferSelection } from '@/app/components/OfferSelection';
import { TermsAndConditions } from '@/app/components/TermsAndConditions';
import { StickyCTA } from '@/app/components/StickyCTA';
import { Toaster } from 'sonner';
import { translations } from '@/app/utils/translations';
import { Languages, Sun, Moon } from 'lucide-react';

export default function App() {
  const [lang, setLang] = React.useState('ar');
  const [theme, setTheme] = React.useState('dark');
  const t = translations[lang];

  const [selectedOffer, setSelectedOffer] = React.useState({
    id: 'single',
    name: 'سوار واحد',
    price: '49',
    originalPrice: '70',
    discount: '30% OFF',
    desc: 'وفر 21 دينار',
    badge: undefined,
    recommended: false
  });

  // Keep selected offer synced with language changes
  React.useEffect(() => {
    setSelectedOffer(prev => {
        const key = prev.id as 'single' | 'double' | 'triple';
        const priceMap = {
            single: { p: '49', o: '70', d: '30% OFF' },
            double: { p: '80', o: '140', d: '43% OFF' },
            triple: { p: '105', o: '210', d: '50% OFF' }
        };
        return {
            ...prev,
            name: t.offers.items[key].name,
            desc: t.offers.items[key].desc,
            price: priceMap[key].p,
            originalPrice: priceMap[key].o,
            discount: priceMap[key].d,
            badge: key === 'double' ? t.offers.bestValue : (key === 'triple' ? t.offers.highSavings : undefined)
        };
    });
  }, [lang, t.offers]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div 
        className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'} ${lang === 'ar' ? 'font-["Cairo"]' : 'font-["Inter"]'}`}
        dir={t.dir}
    >
      <Toaster position="top-center" expand={false} richColors theme={theme as any} />
      
      {/* Header Overlay */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center max-w-md mx-auto">
        <div className={`backdrop-blur-md px-6 py-2 rounded-full border flex items-center gap-2 transition-colors ${theme === 'dark' ? 'bg-zinc-950/40 border-white/10' : 'bg-white/60 border-zinc-200'}`}>
            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
            <span className={`text-sm font-black tracking-tighter uppercase italic ${theme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>
              {t.brand}
            </span>
        </div>
 
        <div className="flex gap-2">
            <button 
                onClick={toggleTheme}
                className={`backdrop-blur-md p-2 rounded-full border transition-colors ${theme === 'dark' ? 'bg-zinc-950/40 border-white/10 text-lime-400 hover:bg-zinc-900' : 'bg-white/60 border-zinc-200 text-lime-600 hover:bg-zinc-100'}`}
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
                onClick={toggleLang}
                className={`backdrop-blur-md p-2 rounded-full border transition-colors ${theme === 'dark' ? 'bg-zinc-950/40 border-white/10 text-lime-400 hover:bg-zinc-900' : 'bg-white/60 border-zinc-200 text-lime-600 hover:bg-zinc-100'}`}
            >
                <Languages className="w-5 h-5" />
            </button>
        </div>
      </header>

      <main className="pt-20">
        <Hero t={t} lang={lang} theme={theme} />
        <OfferSelection 
          t={t} 
          lang={lang} 
          theme={theme} 
          onSelect={setSelectedOffer} 
          selectedOffer={selectedOffer}
        />
        <Problems t={t} lang={lang} theme={theme} />
        <ProductShowcase t={t} lang={lang} theme={theme} />
        <SocialProof t={t} lang={lang} theme={theme} />
        <TermsAndConditions lang={lang} theme={theme} />
      </main>

      <footer className={`hidden py-12 px-6 border-t pb-32 text-center transition-colors ${theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-white border-zinc-100'}`}>
        <div className="max-w-md mx-auto">
            <span className={`text-lg font-black italic mb-4 block ${theme === 'dark' ? 'text-white' : 'text-zinc-950'}`}>Fit Band</span>
            <p className="text-zinc-500 text-[10px] leading-relaxed mb-6">
                © 2026 {t.brand} Jordan. {t.footer.rights} <br />
                {t.footer.disclaimer}
            </p>
        </div>
      </footer>

      <StickyCTA t={t} lang={lang} theme={theme} />
    </div>
  );
}
