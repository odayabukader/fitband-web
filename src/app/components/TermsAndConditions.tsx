import * as React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Check, HelpCircle } from 'lucide-react';

export const TermsAndConditions = ({ lang, theme }) => {
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';

  const terms = [
    {
      text: lang === 'ar' ? 'جهاز Fitband غير طبي، ودقة القراءات تتراوح بين 80% – 95% تقريباً.' : 'Fitband is not a medical device; reading accuracy is approximately 80% – 95%.',
    },
    {
      text: lang === 'ar' ? 'السوار مخصص للمتابعة اليومية والصحة العامة، ولا يُعتبر بديلاً عن الأجهزة الطبية أو الفحوصات الطبية الاحترافية.' : 'The band is for daily tracking and general health, not a substitute for medical devices or professional checkups.',
    },
    {
      text: lang === 'ar' ? 'معاينة مجانية قبل الاستلام.' : 'Free inspection before receipt.',
    },
    {
      text: lang === 'ar' ? 'بعد الاستلام، لا يوجد تبديل أو ترجيع إلا في حالة وجود خلل مصنعي.' : 'After receipt, no exchange or return except in case of manufacturing defect.',
    },
    {
      text: lang === 'ar' ? 'كفاله تبديليه لمدة شهر في حال وجود خلل مصنعي.' : 'One-month replacement warranty in case of manufacturing defect.',
    }
  ];

  return (
    <section className={`overflow-hidden relative transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'} px-[24px] pt-[40px] pb-[120px]`}>
      <div className="max-w-md mx-auto">
        <div className={`relative p-8 rounded-[2.5rem] overflow-hidden border transition-colors ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-zinc-200'}`}>
            
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isDark ? 'bg-lime-400/10 text-lime-400' : 'bg-lime-50 text-lime-600'}`}>
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className={`text-2xl font-black mb-2 transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              {lang === 'ar' ? 'تنويه هام قبل شراء السوار!' : 'Important Notice Before Purchase!'}
            </h2>
          </div>

          <div className="space-y-4">
            {terms.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-start gap-3 p-3 rounded-2xl transition-colors ${isDark ? 'bg-zinc-950/50 hover:bg-zinc-950' : 'bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-200'}`}
              >
                <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-lime-400' : 'bg-lime-600'}`} />
                <p className={`text-xs font-medium leading-relaxed text-left ${isRtl ? 'text-right' : ''} ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center opacity-80">
             <span className={`text-xl font-black italic tracking-tighter ${isDark ? 'text-white' : 'text-zinc-950'}`}>FITBAND</span>
          </div>
          <p className="text-[10px] text-center text-zinc-500 font-bold tracking-widest uppercase mt-1">MOVE SMARTER</p>

        </div>
      </div>
    </section>
  );
};
