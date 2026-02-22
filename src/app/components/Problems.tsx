import * as React from 'react';
import { Activity, Moon, Heart, Battery, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const icons = [Activity, Moon, Heart, CreditCard, Battery, ShieldCheck, Sparkles];

export const Problems = ({ t, lang, theme }) => {
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';
  
  return (
    <section id="why-fitband" className={`py-[60px] px-6 transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>{t.problems.title}</h2>
          <div className="h-1 w-20 bg-lime-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {t.problems.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-start gap-4 p-6 rounded-3xl border transition-colors ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}
              >
                <div className={`p-3 rounded-xl shrink-0 transition-colors ${isDark ? 'bg-lime-400/10' : 'bg-lime-400/20'}`}>
                  <Icon className={`w-6 h-6 transition-colors ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold mb-1 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
