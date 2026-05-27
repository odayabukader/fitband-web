import * as React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const SocialProof = ({ t, lang, theme }) => {
  const isDark = theme === 'dark';
  const [likes, setLikes] = React.useState(t.reviews.items.map(() => Math.floor(Math.random() * 20) + 5));

  const handleLike = (idx) => {
    const newLikes = [...likes];
    newLikes[idx] += 1;
    setLikes(newLikes);
  };

  return (
    <section className={`py-[60px] px-6 ${isDark ? 'bg-zinc-950' : 'bg-slate-50'}`}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
            ))}
          </div>
          <h2 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>{t.reviews.title}</h2>
          <p className={`transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.reviews.subtitle.replace('Fit Band', 'FitBand')}</p>
        </div>

        <div className="flex flex-col gap-6">
          {(lang === 'ar' ? [
            { name: 'رشاد', review: 'والله لما شغلت الاسوارة ولبستها اعطتني كل اشي بل ملي وخفيفة كثير ومرتبة عل ايد 🌷', location: 'تحقق من الشراء' },
            { name: 'غيث', review: 'اهلا صارلها يومين معي تقريبا والأمور تمام التمام البرنامج سهل التعامل معه وبسيط مشكورين 🤍', location: 'تحقق من الشراء' },
            { name: 'عبود', review: 'ما شاء الله الجودة ممتازة وخفيفه كثير ما بعد ساعه تقريبا ما حسيت إني لابس اشي والتطبيق سهل الاستخدام شكرا كثير', location: 'تحقق من الشراء' },
            { name: 'محمد', review: 'صراحة ال fitband ممتازة وقراءتها 100%.. خصوصاً انا مبارح توترت لمرحلة معينة وفعليا اعطاني انه كنت متوترة بدرجة كبيرة وموضوع قراءات النوم ممتازة حبيت التفصيل و اهنيكم على هالمنتج', location: 'تحقق من الشراء' },
            { name: 'عدي', review: 'وصلتني الأسوارة مرتبة كتير وفعلا قريبة جدا من ال whoop واغلب القراءات نفسها والاهم من هيك انها بدون اشتراك', location: 'تحقق من الشراء' }
          ] : t.reviews.items).map((tItem, idx) => (
            <div 
              key={idx}
              className={`group p-6 rounded-3xl border relative overflow-hidden ${isDark ? 'bg-zinc-800/40 border-white/5' : 'bg-zinc-50 border-zinc-200'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className={`font-bold transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>{tItem.name}</span>
                    <span className={`text-xs transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{tItem.location}</span>
                </div>
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-lime-400 text-lime-400" />
                    ))}
                </div>
              </div>
              <p className={`italic mb-4 relative z-10 transition-colors ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>"{tItem.review}"</p>
              
              <div className="flex items-center justify-between relative z-10">
                <button 
                  onClick={() => handleLike(idx)}
                  className={`hidden items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-zinc-100 border border-zinc-200'}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-lime-600" />
                  <span className={`text-[10px] font-bold uppercase transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {lang === 'ar' ? 'مفيد' : 'Helpful'} ({likes[idx] || 0})
                  </span>
                </button>
              </div>

              <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} opacity-10 group-hover:scale-110 transition-transform`}>
                <CheckCircle2 className={`w-12 h-12 ${isDark ? 'text-lime-400' : 'text-lime-600'}`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`hidden mt-12 text-center p-6 rounded-3xl border-2 border-dashed transition-colors ${isDark ? 'bg-zinc-950/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
            <p className={`text-[10px] mb-2 font-medium uppercase tracking-widest transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.reviews.officialPartner}</p>
            <div className="flex items-center justify-center gap-4 grayscale opacity-50">
                <span className={`text-xl font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>GYM</span>
                <span className={`text-xl font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>HEALTH</span>
                <span className={`text-xl font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>PRO</span>
            </div>
        </div>
      </div>
    </section>
  );
};
