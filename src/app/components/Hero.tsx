import * as React from 'react';
import { Star, ChevronRight, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { images } from '@/app/config/images';

export const Hero = ({ t, lang, theme }) => {
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';
  
  const imageList = [
    images.smartAppImage,
    images.appFeaturesImage,
    images.healthAppImage,
    images.aiFeatureImage,
    images.strapImage,
    images.batteryLifeImage,
    images.notificationsImage,
    images.designFeatureImage,
    images.weightFeatureImage,
    images.mainHeroImage,
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  // Delay autoplay so refresh does not immediately crossfade images
  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const startDelay = setTimeout(() => {
      timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % imageList.length);
      }, 4000);
    }, 8000);

    return () => {
      clearTimeout(startDelay);
      if (timer) clearInterval(timer);
    };
  }, [imageList.length]);

  return (
    <section className={`relative min-h-[90vh] flex flex-col items-center justify-center pt-[10px] pb-[60px] px-6 overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-50" 
        style={{ 
          background: isDark 
            ? 'radial-gradient(circle, rgba(0,230,58,0.15) 0%, rgba(0,230,58,0) 70%)' 
            : 'radial-gradient(circle, rgba(0,230,58,0.2) 0%, rgba(0,230,58,0) 70%)' 
        }} 
      />
      
      <div className="relative z-10 text-center max-w-md w-full">
        <div className={`inline-flex items-center gap-1 backdrop-blur-sm px-3 py-1 rounded-full border mb-6 ${isDark ? 'bg-zinc-900/60 border-white/10' : 'bg-white/60 border-zinc-200'}`}>
          <div className={`flex ${isRtl ? '-space-x-reverse' : ''} -space-x-1`}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${isDark ? 'border-zinc-950 bg-zinc-800 text-white' : 'border-white bg-zinc-100 text-zinc-900'}`}>
                <Star className="w-2.5 h-2.5 fill-lime-400 text-lime-400" />
              </div>
            ))}
          </div>
          <span className={`text-[10px] sm:text-xs font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{t.hero.rating}</span>
        </div>

        <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-[1.1] ${isDark ? 'text-white' : 'text-zinc-950'}`}>
          {t.hero.title} <br />
          <span className="text-lime-500">{t.hero.titleAccent}</span>
        </h1>
        
        <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {t.hero.desc}
        </p>

        <div className="relative mb-8">
          <div className="relative z-10 drop-shadow-[0_0_20px_rgba(0,230,58,0.2)] mb-6 flex justify-center min-h-[200px]">
            <div className="block w-fit max-w-[320px] rounded-3xl border-4 border-lime-400/20 overflow-hidden leading-none">
              <ImageWithFallback
                src={imageList[currentImage]}
                alt={lang === 'ar' ? 'سوار Fit Band الذكي' : 'Fit Band Smart Tracker'}
                className="block w-full max-w-[320px] h-auto"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 max-w-[320px] mx-auto">
            {imageList.map((img, idx) => (
              <button
                key={`thumb-${idx}`}
                type="button"
                onClick={() => setCurrentImage(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                  currentImage === idx 
                    ? 'border-lime-500 scale-105 shadow-[0_0_10px_rgba(0,230,58,0.4)]' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading={idx < 5 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <a 
            href="#pricing"
            className="group relative flex items-center justify-center w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold py-5 rounded-2xl text-xl border border-lime-500/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.cta}
              <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </span>
          </a>
          <p className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
            <Zap className="w-4 h-4 text-lime-500 fill-lime-500" />
            {t.hero.stock}
          </p>
        </div>
      </div>
    </section>
  );
};
