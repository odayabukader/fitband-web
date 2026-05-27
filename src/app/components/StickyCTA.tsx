import * as React from 'react';
import { ChevronRight } from 'lucide-react';

export const StickyCTA = ({ t, lang, theme }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('why-fitband');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] max-w-md mx-auto">
      <a
        href="#pricing"
        className={`flex items-center justify-between w-full bg-lime-400 text-zinc-950 font-black py-4 px-6 rounded-2xl border-2 active:scale-95 ${isDark ? 'border-white/20' : 'border-zinc-200'}`}
      >
        <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'} leading-none`}>
          <span className="text-[10px] uppercase tracking-tighter opacity-70">{t.sticky.offer}</span>
          <span className="text-lg">{isRtl ? 'احصل على خصم 30%' : 'GET 30% OFF'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm uppercase">{t.sticky.cta}</span>
          <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
        </div>
      </a>
    </div>
  );
};
