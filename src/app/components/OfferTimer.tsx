import * as React from 'react';
import { TrendingUp } from 'lucide-react';

/** Isolated timer so the parent (and CheckoutForm) do not re-render every second. */
export const OfferTimer = ({ t, lang, theme }) => {
  const [timeLeft, setTimeLeft] = React.useState(20 * 60 * 60);
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    const minsOnly = Math.floor(seconds / 60);
    return `${minsOnly}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`mt-8 rounded-3xl p-4 flex flex-col gap-3 border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-zinc-200'}`}>
      <div className="flex items-center gap-3">
        <TrendingUp className={`w-5 h-5 shrink-0 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
        <p className={`text-[11px] leading-tight ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          <span className={`font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>32 {t.offers.people}</span> {t.offers.urgent}
        </p>
      </div>
      <div className={`flex items-center justify-between border-t pt-3 ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {isRtl ? 'ينتهي العرض في:' : 'OFFER EXPIRES IN:'}
        </span>
        <span className={`font-mono font-bold text-sm px-2 py-1 rounded-lg ${isDark ? 'text-lime-400 bg-lime-400/10' : 'text-lime-700 bg-lime-100'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};
