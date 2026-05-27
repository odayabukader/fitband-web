import * as React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Moon, Activity, Heart, Trophy, Battery, Shield } from 'lucide-react';
import { images } from '@/app/config/images';

export const ProductShowcase = ({ t, lang, theme }) => {
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';
  const icons = [Moon, Activity, Heart, Trophy];
  const [activeFeature, setActiveFeature] = React.useState(null);

  const featureDetails = lang === 'ar' ? [
    'تتبع مراحل النوم الخفيف والعميق بدقة.',
    'حساب السعرات والخطوات والمسافة المقطوعة.',
    'تنبيهات عند ارتفاع أو انخفاض ضربات القلب.',
    'أكثر من 20 نمطاً رياضياً مختلفاً.'
  ] : [
    'Track light and deep sleep stages accurately.',
    'Calculate calories, steps, and distance covered.',
    'Alerts for high or low heart rate trends.',
    'Over 20 different professional sports modes.'
  ];

  return (
    <section className={`hidden py-[60px] px-[24px] overflow-hidden relative transition-colors duration-500 ${isDark ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="max-w-md mx-auto relative flex flex-col items-center">
        
        <div className="w-full space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`relative w-full aspect-[4/5] rounded-[2.5rem] border overflow-hidden flex flex-col items-center justify-end p-8 transition-colors duration-500 ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}
          >
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" 
              style={{ 
                background: isDark 
                  ? 'radial-gradient(circle, rgba(0,230,58,0.1) 0%, rgba(0,230,58,0) 70%)' 
                  : 'radial-gradient(circle, rgba(0,230,58,0.15) 0%, rgba(0,230,58,0) 70%)' 
              }} 
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <motion.div
                animate={{ rotate: [0, 2, 0, -2, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative z-10"
              >
                <ImageWithFallback
                  src={images.productCenter}
                  alt="Fit Band Center"
                  className={`w-full h-full object-contain`}
                />
              </motion.div>
            </div>
            <div className="relative z-20 text-center w-full">
                <div className={`inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border mb-4 mx-auto transition-colors ${isDark ? 'bg-zinc-950/60 border-white/10' : 'bg-white/60 border-zinc-200'}`}>
                    <Shield className="w-4 h-4 text-lime-500" />
                    <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.showcase.waterproof}</span>
                </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {t.showcase.benefits.slice(0, 4).map((label, idx) => {
                const Icon = icons[idx];
                const isActive = activeFeature === idx;
                return (
                    <motion.button
                        key={idx}
                        onClick={() => setActiveFeature(isActive ? null : idx)}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`text-left relative backdrop-blur-md border p-6 rounded-[2.5rem] flex flex-col items-start transition-all duration-300 ${isActive ? (isDark ? 'ring-2 ring-lime-400 bg-zinc-800' : 'ring-2 ring-lime-500 bg-white shadow-none') : (isDark ? 'bg-zinc-900/50 border-white/5 hover:bg-zinc-800/80' : 'bg-white border-zinc-200 hover:bg-zinc-50')}`}
                    >
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 border transition-colors ${isDark ? 'bg-zinc-800 border-white/5' : 'bg-zinc-100 border-zinc-200'}`}>
                            <Icon className={`w-5 h-5 transition-colors ${isActive ? (isDark ? 'text-white' : 'text-lime-600') : (isDark ? 'text-lime-400' : 'text-zinc-400')}`} />
                        </div>
                        <h4 className={`font-bold text-xs mb-1 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{label}</h4>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className={`text-[10px] leading-tight mt-2 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}
                          >
                            {featureDetails[idx]}
                          </motion.p>
                        )}
                    </motion.button>
                );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`w-full border p-8 rounded-[2.5rem] flex items-center justify-between transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-lime-400/20 to-zinc-900 border-lime-400/20' : 'bg-white border-zinc-200'}`}
          >
            <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <Battery className={`w-5 h-5 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>{t.showcase.battery}</span>
                </div>
                <p className={`text-3xl font-black italic tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  {lang === 'ar' ? 'طاقة 40 يوماً' : '40-Day Power'}
                </p>
            </div>
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,230,58,0.3)] shrink-0">
                <span className="text-zinc-950 font-black text-xl italic">
                  {lang === 'ar' ? 'برو' : 'PRO'}
                </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};