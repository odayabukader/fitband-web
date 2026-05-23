import * as React from 'react';
import { motion } from 'motion/react';
import { Check, TrendingUp } from 'lucide-react';
import { CheckoutForm } from './CheckoutForm';

export const OfferSelection = ({ t, lang, theme, onSelect, selectedOffer }) => {
  const [selected, setSelected] = React.useState('single');
  const [timeLeft, setTimeLeft] = React.useState(600); // 10 minutes
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const rawOffers = [
    {
      id: 'single',
      price: '49',
      originalPrice: '70',
      discount: '30% OFF',
      ...t.offers.items.single
    },
    {
      id: 'double',
      price: '80',
      originalPrice: '140',
      discount: '43% OFF',
      badge: t.offers.bestValue,
      recommended: true,
      ...t.offers.items.double
    },
    {
      id: 'triple',
      price: '105',
      originalPrice: '210',
      discount: '50% OFF',
      badge: t.offers.highSavings,
      ...t.offers.items.triple
    }
  ];

  const handleSelect = (id) => {
    setSelected(id);
    onSelect(rawOffers.find(o => o.id === id));
  };

  return (
    <section id="pricing" className={`transition-colors duration-500 ${isDark ? 'bg-zinc-900' : 'bg-lime-50/50'} px-[24px] pt-[40px] pb-[60px]`}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-3xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>{t.offers.title}</h2>
          <p className={`transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.offers.subtitle}</p>
        </div>

        <div className="flex flex-col gap-4">
          {rawOffers.map((offer) => (
            <button
              key={offer.id}
              onClick={() => handleSelect(offer.id)}
              className={`relative flex flex-col w-full text-left p-6 rounded-3xl transition-all duration-300 border-2 ${
                selected === offer.id 
                ? (isDark ? 'bg-zinc-900 border-lime-400 ring-4 ring-lime-400/20' : 'bg-white border-lime-500 ring-4 ring-lime-500/10') 
                : (isDark ? 'bg-zinc-900/40 border-white/5 hover:border-white/10' : 'bg-white border-zinc-200 hover:border-zinc-300')
              }`}
            >
              {offer.badge && (
                <div className={`absolute -top-3 ${isRtl ? 'right-6' : 'left-6'} bg-lime-400 text-zinc-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg`}>
                  {offer.badge}
                </div>
              )}
              
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected === offer.id ? 'border-lime-500 bg-lime-500' : 'border-zinc-300'
                  }`}>
                    {selected === offer.id && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <h3 className={`text-xl font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{offer.name}</h3>
                </div>
                <div className={`${isRtl ? 'text-left' : 'text-right'}`}>
                    <span className={`block line-through text-xs font-bold transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {offer.originalPrice} <span className="text-[9px] uppercase opacity-60 font-medium">{t.currency}</span>
                    </span>
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className={`text-2xl font-black ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>
                        {offer.price}
                      </span>
                      <span className={`text-[10px] uppercase font-bold ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>{t.currency}</span>
                    </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <p className={`text-sm transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{lang === 'ar' ? (offer.id === 'single' ? 'وفر 21 دينار' : offer.id === 'double' ? 'وفر 60 دينار ' : 'وفر 105 دينار') : offer.desc}</p>
                <div className={`text-[10px] font-black px-2 py-1 rounded-lg transition-colors ${isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-400/20 text-lime-700'}`}>
                    {offer.discount}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Complete Order Form Directly Under Offers */}
        <CheckoutForm t={t} lang={lang} theme={theme} selectedOffer={selectedOffer} />

        {/* Urgency and Timer below everything else */}
        <div className={`mt-8 rounded-3xl p-4 flex flex-col gap-3 border transition-colors ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-zinc-200'}`}>
            <div className="flex items-center gap-3">
                <TrendingUp className={`w-5 h-5 shrink-0 transition-colors ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                <p className={`text-[11px] leading-tight transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>142 {t.offers.people}</span> {t.offers.urgent}
                </p>
            </div>
            <div className={`flex items-center justify-between border-t pt-3 transition-colors ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {lang === 'ar' ? 'ينتهي العرض في:' : 'OFFER EXPIRES IN:'}
                </span>
                <span className={`font-mono font-bold text-sm px-2 py-1 rounded-lg transition-colors ${isDark ? 'text-lime-400 bg-lime-400/10' : 'text-lime-700 bg-lime-100'}`}>
                    {formatTime(timeLeft)}
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};
