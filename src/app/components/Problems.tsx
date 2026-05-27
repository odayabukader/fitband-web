import * as React from 'react';
import { Activity, Moon, Heart, Battery, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';

const icons = [Sparkles, Activity, Moon, Heart, CreditCard, Battery, ShieldCheck];

export const Problems = ({ t, lang, theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <section id="why-fitband" className={`py-[60px] px-6 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-950'}`}>{t.problems.title}</h2>
          <div className="h-1 w-20 bg-lime-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {t.problems.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className={`flex items-start gap-4 p-6 rounded-3xl border ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${isDark ? 'bg-lime-400/10' : 'bg-lime-400/20'}`}>
                  <Icon className={`w-6 h-6 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
