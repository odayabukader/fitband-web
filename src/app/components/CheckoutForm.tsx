import * as React from 'react';
import { Truck, ShieldCheck, MapPin, User, Phone, Package, ArrowRight, Loader2, Eye, RotateCcw, Mail, X, Copy, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

const JORDAN_LOCATIONS = {
  "Amman": {
    ar: "عمان",
    en: "Amman",
    areas: [
      { ar: "وسط البلد", en: "Downtown" },
      { ar: "جبل عمان", en: "Jabal Amman" },
      { ar: "اللويبدة", en: "Al Weibdeh" },
      { ar: "العبدلي", en: "Al Abdali" },
      { ar: "الشميساني", en: "Shmeisani" },
      { ar: "عبدون", en: "Abdoun" },
      { ar: "دير غبار", en: "Deir Ghbar" },
      { ar: "الصويفية", en: "Sweifieh" },
      { ar: "أم أذينة", en: "Um Uthaina" },
      { ar: "الرابية", en: "Al Rabieh" },
      { ar: "تلاع العلي", en: "Tla' Al Ali" },
      { ar: "خلدا", en: "Khalda" },
      { ar: "الجبيهة", en: "Al Jubaiha" },
      { ar: "الجامعة الأردنية", en: "University of Jordan" },
      { ar: "أبو نصير", en: "Abu Nseir" },
      { ar: "شفا بدران", en: "Shafa Badran" },
      { ar: "طبربور", en: "Tabarbour" },
      { ar: "ماركا", en: "Marka" },
      { ar: "الهاشمي الشمالي", en: "Al Hashmi Al Shamali" },
      { ar: "النصر", en: "Al Nasr" },
      { ar: "المقابلين", en: "Al Muqabalain" },
      { ar: "الاشرفية", en: "Al Ashrafiyeh" },
      { ar: "رأس العين", en: "Ras Al Ain" },
      { ar: "مرج الحمام", en: "Marj Al Hamam" },
      { ar: "ناعور", en: "Naour" },
      { ar: "سحاب", en: "Sahab" },
      { ar: "اليادودة", en: "Al Yadoudeh" },
      { ar: "القويسمة", en: "Al Qweismeh" },
      { ar: "خريبة السوق", en: "Khraibet Al Souq" },
      { ar: "جاوا", en: "Jawa" }
    ]
  },
  "Zarqa": {
    ar: "الزرقاء",
    en: "Zarqa",
    areas: [
      { ar: "الزرقاء الجديدة", en: "New Zarqa" },
      { ar: "مدينة الزرقاء", en: "Zarqa City" },
      { ar: "الرصيفة", en: "Russeifa" },
      { ar: "الهاشمية", en: "Hashemiyeh" },
      { ar: "الظليل", en: "Dhuleil" },
      { ar: "السخنة", en: "Sukhna" },
      { ar: "الأزرق", en: "Azraq" }
    ]
  },
  "Irbid": {
    ar: "إربد",
    en: "Irbid",
    areas: [
      { ar: "مدينة إربد", en: "Irbid City" },
      { ar: "الرمثا", en: "Ramtha" },
      { ar: "الحصن", en: "Al Husn" },
      { ar: "الصريح", en: "Al Sareeh" },
      { ar: "ايدون", en: "Aidun" },
      { ar: "بيت راس", en: "Beit Ras" },
      { ar: "بشرى", en: "Bushra" },
      { ar: "حوارة", en: "Huwarra" },
      { ar: "بني كنانة", en: "Bani Kinanah" },
      { ar: "الكورة", en: "Koura" },
      { ar: "الأغوار الشمالية", en: "Northern Jordan Valley" },
      { ar: "الطيبة", en: "Taybeh" },
      { ar: "الوسطية", en: "Wasatiyah" }
    ]
  },
  "Balqa": {
    ar: "البلقاء",
    en: "Balqa",
    areas: [
      { ar: "السلط", en: "Salt" },
      { ar: "الفحيص", en: "Fuheis" },
      { ar: "ماحص", en: "Mahis" },
      { ar: "عين الباشا", en: "Ain Al Basha" },
      { ar: "البقعة", en: "Baqa'a" },
      { ar: "دير علا", en: "Deir Alla" },
      { ar: "الشونة الجنوبية", en: "South Shousa" }
    ]
  },
  "Madaba": {
    ar: "مأدبا",
    en: "Madaba",
    areas: [
      { ar: "مدينة مأدبا", en: "Madaba City" },
      { ar: "ذيبان", en: "Dhiban" },
      { ar: "ماعين", en: "Ma'in" },
      { ar: "الفيصلية", en: "Faisaliah" }
    ]
  },
  "Jerash": {
    ar: "جرش",
    en: "Jerash",
    areas: [
      { ar: "مدينة جرش", en: "Jerash City" },
      { ar: "سوف", en: "Souf" },
      { ar: "ساكب", en: "Sakib" },
      { ar: "الكتة", en: "Kitteh" },
      { ar: "برما", en: "Burma" },
      { ar: "المصطبة", en: "Mastaba" }
    ]
  },
  "Ajloun": {
    ar: "عجلون",
    en: "Ajloun",
    areas: [
      { ar: "مدينة عجلون", en: "Ajloun City" },
      { ar: "عنجرة", en: "Anjara" },
      { ar: "كفرنجة", en: "Kofranjah" },
      { ar: "صخرة", en: "Sakhra" },
      { ar: "عبين", en: "Ebbin" }
    ]
  },
  "Mafraq": {
    ar: "المفرق",
    en: "Mafraq",
    areas: [
      { ar: "مدينة المفرق", en: "Mafraq City" },
      { ar: "الرويشد", en: "Ruwaished" },
      { ar: "بلعما", en: "Balama" },
      { ar: "ارحاب", en: "Rehab" },
      { ar: "المنشية", en: "Manshiyah" },
      { ar: "الخالدية", en: "Khalidiyah" }
    ]
  },
  "Karak": {
    ar: "الكرك",
    en: "Karak",
    areas: [
      { ar: "مدينة الكرك", en: "Karak City" },
      { ar: "المزار الجنوبي", en: "Mazar Janoubi" },
      { ar: "الأغوار الجنوبية", en: "Southern Jordan Valley" },
      { ar: "القصر", en: "Qasr" },
      { ar: "الربة", en: "Rabba" },
      { ar: "فقوع", en: "Faqqu" }
    ]
  },
  "Tafilah": {
    ar: "الطفيلة",
    en: "Tafilah",
    areas: [
      { ar: "مدينة الطفيلة", en: "Tafilah City" },
      { ar: "بصيرا", en: "Busaira" },
      { ar: "الحسا", en: "Hasa" },
      { ar: "القادسية", en: "Qadisiyah" }
    ]
  },
  "Ma'an": {
    ar: "معان",
    en: "Ma'an",
    areas: [
      { ar: "مدينة معان", en: "Ma'an City" },
      { ar: "البتراء (وادي موسى)", en: "Petra (Wadi Musa)" },
      { ar: "الشوبك", en: "Shobak" },
      { ar: "الحسينية", en: "Husseinieh" },
      { ar: "الجفر", en: "Jafr" }
    ]
  },
  "Aqaba": {
    ar: "العقبة",
    en: "Aqaba",
    areas: [
      { ar: "مدينة العقبة", en: "Aqaba City" },
      { ar: "وادي رم", en: "Wadi Rum" },
      { ar: "القويرة", en: "Quweirah" }
    ]
  }
};

export const CheckoutForm = ({ t, lang, theme, selectedOffer }) => {
  const isRtl = lang === 'ar';
  const isDark = theme === 'dark';
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);
  const [orderId, setOrderId] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    governorate: 'Amman',
    area: '',
    address: '',
    notes: '',
    upsell: false
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    const jordanPhoneRegex = /^07[789]\d{7}$/; 
    const arabicPhoneRegex = /^[٠-٩]{10}$/; // Basic Arabic digit check

    if (!formData.name.trim()) newErrors.name = t.checkout.errorName;
    
    // Normalize Arabic numbers to English for validation
    const normalizedPhone = formData.phone.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

    if (!formData.phone.trim()) {
      newErrors.phone = t.checkout.errorPhone;
    } else if (!jordanPhoneRegex.test(normalizedPhone)) {
      newErrors.phone = t.checkout.errorPhoneInvalid;
    }

    if (!formData.governorate) newErrors.governorate = lang === 'ar' ? 'يرجى اختيار المحافظة' : 'Please select a governorate';
    if (!formData.area) newErrors.area = lang === 'ar' ? 'يرجى اختيار المنطقة' : 'Please select an area';
    if (!formData.address.trim()) newErrors.address = t.checkout.errorAddress;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error(t.checkout.errorGeneral);
      return;
    }

    setIsSending(true);

    // Generate unique order ID using timestamp + random
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000);
    const generatedOrderId = `#FB-${timestamp}${random}`;
    setOrderId(generatedOrderId);

    // Get readable names for governorate and area
    const govData = JORDAN_LOCATIONS[formData.governorate];
    const areaData = govData?.areas.find(a => a.en === formData.area);
    
    const governorateName = lang === 'ar' ? govData?.ar : govData?.en;
    const areaName = lang === 'ar' ? areaData?.ar : areaData?.en;

    try {
      const templateParams = {
        order_id: generatedOrderId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        governorate: governorateName, // Send to email
        area: areaName,               // Send to email
        address: `${governorateName} - ${areaName} - ${formData.address}`, // Combined address
        product: selectedOffer?.name,
        price: `${selectedOffer?.price} ${t.currency}`,
        to_email: 'Fitband.jo@gmail.com',
      };

      const SERVICE_ID = 'service_dl4tr4l'; 
      const TEMPLATE_ID = 'template_ad9s64b';
      const PUBLIC_KEY = '4vrzrUyl9iVUK8X9_';

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSubmitted(true);
      toast.success(lang === 'ar' ? "تم إرسال طلبك بنجاح!" : "Order sent successfully!");
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        governorate: '',
        area: '',
        address: '',
        notes: '',
        upsell: false
      });
    } catch (error) {
      console.error('Email error:', error);
      toast.error(lang === 'ar' ? "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى." : "Error sending order. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const copyToClipboard = async () => {
    const fallbackCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = orderId;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(orderId);
        setIsCopied(true);
        toast.success(t.checkout.copied);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch (err) {
      try {
        if (fallbackCopy()) {
          setIsCopied(true);
          toast.success(t.checkout.copied);
          setTimeout(() => setIsCopied(false), 2000);
        } else {
          throw new Error('Fallback failed');
        }
      } catch (fallbackErr) {
        console.error('All copy methods failed:', fallbackErr);
        toast.error(lang === 'ar' ? 'فشل النسخ، يرجى النسخ يدوياً' : 'Copy failed, please copy manually');
      }
    }
  };

  return (
    <div className="mt-8">
      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSubmitted(false)}
                className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`relative w-full max-w-md rounded-[2rem] p-6 md:p-10 text-center shadow-2xl transition-colors my-8 ${isDark ? 'bg-zinc-950 border border-white/10 text-white' : 'bg-white border border-zinc-200 text-zinc-950'}`}
              >
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className={`absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/5 text-zinc-500' : 'hover:bg-zinc-100 text-zinc-400'}`}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="w-14 h-14 md:w-16 md:h-16 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-lime-400/20">
                  <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-zinc-950" />
                </div>
                
                <h2 className="text-xl md:text-3xl font-black mb-2 md:mb-3">
                  {t.checkout.successTitle}
                </h2>
                
                <p className={`text-xs md:text-sm mb-5 md:mb-6 transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {t.checkout.successMessage}
                </p>
                
                <div className={`p-4 md:p-5 rounded-3xl border-2 text-left mb-5 md:mb-6 transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-100'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">{t.checkout.orderId}:</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>{orderId}</span>
                      <button 
                        onClick={copyToClipboard}
                        className={`p-2 rounded-xl transition-all active:scale-90 shadow-sm ${
                          isCopied 
                            ? 'bg-lime-400 text-zinc-950' 
                            : (isDark ? 'bg-zinc-800 text-lime-400 hover:bg-zinc-700' : 'bg-white border border-zinc-200 text-lime-600 hover:bg-zinc-50')
                        }`}
                        title={t.checkout.copy}
                      >
                        {isCopied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">{t.checkout.totalPaid}:</span>
                    <span className={`text-base font-black transition-colors ${isDark ? 'text-white' : 'text-zinc-950'}`}>{selectedOffer?.price} {t.currency}</span>
                  </div>
                </div>

                {/* Social Media Contact - COLORED ICONS */}
                <div className={`mb-6 md:mb-8 p-5 md:p-6 rounded-[2rem] border transition-colors ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-lime-50/50 border-lime-100'}`}>
                  <p className={`text-[11px] font-bold mb-4 md:mb-5 uppercase tracking-wider transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                    {t.checkout.contactUs}
                  </p>
                  <div className="flex gap-4 md:gap-5 justify-center">
                    <a 
                      href="https://www.instagram.com/fitband.jo?igsh=cW5uM3pobzU1NHJj" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg group-hover:scale-110 active:scale-95">
                        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <span className="text-[10px] font-black uppercase opacity-60 tracking-tighter">{t.checkout.instagram}</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/share/14YDBTFC2EJ/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all bg-[#1877F2] text-white shadow-lg group-hover:scale-110 active:scale-95">
                        <Facebook className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <span className="text-[10px] font-black uppercase opacity-60 tracking-tighter">{t.checkout.messenger}</span>
                    </a>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-lime-400 text-zinc-950 py-4 md:py-5 rounded-2xl font-black transition-all hover:bg-lime-300 active:scale-95 shadow-lg shadow-lime-400/20"
                >
                  {t.checkout.backToStore}
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Form Card */}
      <div className={`rounded-[2.5rem] p-8 overflow-hidden relative transition-colors border ${isDark ? 'bg-zinc-950 text-white border-white/10' : 'bg-white text-zinc-950 border-zinc-200'}`}>
        <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} p-4 opacity-5 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
          <Package className="w-24 h-24" />
        </div>

        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
          {t.checkout.title}
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? 'bg-lime-400 text-zinc-950' : 'bg-zinc-950 text-white'}`}>{t.checkout.secure}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-1.5 px-1">
              <User className="w-3 h-3" /> {t.checkout.name}
            </label>
            <input 
              type="text" 
              placeholder={t.checkout.namePlaceholder}
              className={`w-full border transition-all px-5 py-4 rounded-2xl outline-none font-medium text-base ${
                isDark ? 'bg-zinc-900 text-white placeholder:text-zinc-600' : 'bg-zinc-50 text-zinc-950 placeholder:text-zinc-400'
              } ${
                errors.name 
                ? 'border-red-500 focus:border-red-600' 
                : (isDark ? 'border-white/5 focus:border-lime-400 focus:bg-zinc-800' : 'border-zinc-200 focus:border-lime-500 focus:bg-white')
              }`}
              value={formData.name}
              onChange={(e) => {
                setFormData({...formData, name: e.target.value});
                if (errors.name) setErrors({...errors, name: null});
              }}
            />
            {errors.name && <p className="text-[10px] text-red-500 font-bold px-1">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-1.5 px-1">
              <Phone className="w-3 h-3" /> {t.checkout.phone}
            </label>
            <input 
              type="tel" 
              placeholder={t.checkout.phonePlaceholder}
              className={`w-full border transition-all px-5 py-4 rounded-2xl outline-none font-medium text-base ${
                isDark ? 'bg-zinc-900 text-white placeholder:text-zinc-600' : 'bg-zinc-50 text-zinc-950 placeholder:text-zinc-400'
              } ${
                errors.phone 
                ? 'border-red-500 focus:border-red-600' 
                : (isDark ? 'bg-zinc-900 border-white/5 focus:border-lime-400 focus:bg-zinc-800' : 'bg-zinc-50 border-zinc-200 focus:border-lime-500 focus:bg-white')
              }`}
              value={formData.phone}
              onChange={(e) => {
                setFormData({...formData, phone: e.target.value});
                if (errors.phone) setErrors({...errors, phone: null});
              }}
            />
            {errors.phone && <p className="text-[10px] text-red-500 font-bold px-1">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-1.5 px-1">
                <MapPin className="w-3 h-3" /> {lang === 'ar' ? 'المحافظة' : 'Governorate'}
              </label>
              <select
                className={`w-full border transition-all px-5 py-4 rounded-2xl outline-none font-medium text-base appearance-none ${
                  isDark ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-950'
                } ${
                  errors.governorate 
                  ? 'border-red-500 focus:border-red-600' 
                  : (isDark ? 'border-white/5 focus:border-lime-400 focus:bg-zinc-800' : 'border-zinc-200 focus:border-lime-500 focus:bg-white')
                }`}
                value={formData.governorate}
                onChange={(e) => {
                  setFormData({...formData, governorate: e.target.value, area: ''});
                  if (errors.governorate) setErrors({...errors, governorate: null});
                }}
              >
                <option value="">{lang === 'ar' ? 'اختر المحافظة' : 'Select Governorate'}</option>
                {Object.keys(JORDAN_LOCATIONS).map((key) => (
                  <option key={key} value={key}>
                    {lang === 'ar' ? JORDAN_LOCATIONS[key].ar : JORDAN_LOCATIONS[key].en}
                  </option>
                ))}
              </select>
              {errors.governorate && <p className="text-[10px] text-red-500 font-bold px-1">{errors.governorate}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-1.5 px-1">
                <MapPin className="w-3 h-3" /> {lang === 'ar' ? 'المنطقة' : 'Area'}
              </label>
              <select
                className={`w-full border transition-all px-5 py-4 rounded-2xl outline-none font-medium text-base appearance-none ${
                  isDark ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-950'
                } ${
                  errors.area 
                  ? 'border-red-500 focus:border-red-600' 
                  : (isDark ? 'border-white/5 focus:border-lime-400 focus:bg-zinc-800' : 'border-zinc-200 focus:border-lime-500 focus:bg-white')
                }`}
                value={formData.area}
                onChange={(e) => {
                  setFormData({...formData, area: e.target.value});
                  if (errors.area) setErrors({...errors, area: null});
                }}
                disabled={!formData.governorate}
              >
                <option value="">{lang === 'ar' ? 'اختر المنطقة' : 'Select Area'}</option>
                {formData.governorate && JORDAN_LOCATIONS[formData.governorate]?.areas.map((area) => (
                  <option key={area.en} value={area.en}>
                    {lang === 'ar' ? area.ar : area.en}
                  </option>
                ))}
              </select>
              {errors.area && <p className="text-[10px] text-red-500 font-bold px-1">{errors.area}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-zinc-500 flex items-center gap-1.5 px-1">
              <MapPin className="w-3 h-3" /> {t.checkout.address}
            </label>
            <textarea 
              placeholder={lang === 'ar' ? 'مثال: الحي , رقم البناية , رقم الشقة' : 'Example: Neighborhood, Building No, Apartment No'}
              className={`w-full border transition-all px-5 py-4 rounded-2xl outline-none font-medium min-h-[100px] text-base ${
                isDark ? 'bg-zinc-900 text-white placeholder:text-zinc-600' : 'bg-zinc-50 text-zinc-950 placeholder:text-zinc-400'
              } ${
                errors.address 
                ? 'border-red-500 focus:border-red-600' 
                : (isDark ? 'border-white/5 focus:border-lime-400 focus:bg-zinc-800' : 'border-zinc-200 focus:border-lime-500 focus:bg-white')
              }`}
              value={formData.address}
              onChange={(e) => {
                setFormData({...formData, address: e.target.value});
                if (errors.address) setErrors({...errors, address: null});
              }}
            />
            {errors.address && <p className="text-[10px] text-red-500 font-bold px-1">{errors.address}</p>}
          </div>

          <div className={`p-6 rounded-3xl mt-8 border-2 transition-colors ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50 border-zinc-100'}`}>
              <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.checkout.summary}:</span>
                  <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-zinc-950'}`}>{selectedOffer?.name}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.checkout.shipping}:</span>
                  <span className="text-sm font-black text-green-600">{lang === 'ar' ? 'مجاني' : t.checkout.free}</span>
              </div>
              <div className={`h-[1px] mb-4 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
              <div className="flex justify-between items-center mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.checkout.total}:</span>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>{selectedOffer?.price}</span>
                    <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>{t.currency}</span>
                  </div>
              </div>
          </div>

          <button 
            type="submit"
            disabled={isSending}
            className="group relative w-full bg-lime-400 hover:bg-lime-300 disabled:bg-lime-800/20 disabled:text-zinc-500 text-zinc-950 px-8 py-5 rounded-2xl text-lg font-black flex flex-col items-center justify-center transition-all active:scale-[0.98] mt-8 overflow-hidden border border-lime-500/20"
          >
            <div className="flex items-center gap-2 relative z-10">
              {isSending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span className="uppercase tracking-tight leading-none">{lang === 'ar' ? 'اتمام الطلب' : 'COMPLETE ORDER'}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </>
              )}
            </div>

            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
          </button>
        </form>

        {/* Pre-sales Support */}
        <div className={`mt-8 pt-8 border-t flex flex-col items-center text-center transition-colors ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
            <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-4">
              {lang === 'ar' ? 'هل لديك أي استفسار؟' : 'HAVE QUESTIONS?'}
            </p>
            <div className="flex gap-4">
               <a 
                href="https://www.instagram.com/fitband.jo?igsh=cW5uM3pobzU1NHJj" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[11px] font-black transition-all ${isDark ? 'bg-zinc-900 border-white/5 hover:bg-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100 text-zinc-950'}`}
              >
                <Instagram className="w-3.5 h-3.5" />
                {t.checkout.instagram}
              </a>
              <a 
                href="https://www.facebook.com/share/14YDBTFC2EJ/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[11px] font-black transition-all ${isDark ? 'bg-zinc-900 border-white/5 hover:bg-zinc-800 text-white' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100 text-zinc-950'}`}
              >
                <Facebook className="w-3.5 h-3.5" />
                {t.checkout.messenger}
              </a>
            </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4 mt-8 items-stretch">
        <div className={`flex flex-col items-center text-center p-4 rounded-3xl border transition-colors h-full ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}>
          <Truck className="w-8 h-8 text-lime-600 mb-2 shrink-0" />
          <span className={`text-[10px] font-bold uppercase tracking-tighter leading-tight transition-colors mt-auto ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.checkout.delivery}</span>
        </div>
        <div className={`flex flex-col items-center text-center p-4 rounded-3xl border transition-colors h-full ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}>
          <ShieldCheck className="w-8 h-8 text-lime-600 mb-2 shrink-0" />
          <span className={`text-[10px] font-bold uppercase tracking-tighter leading-tight transition-colors mt-auto ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.checkout.cod}</span>
        </div>
        <div className={`flex flex-col items-center text-center p-4 rounded-3xl border transition-colors h-full ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}>
          <Eye className="w-8 h-8 text-lime-600 mb-2 shrink-0" />
          <span className={`text-[10px] font-bold uppercase tracking-tighter leading-tight transition-colors mt-auto ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.checkout.inspection}</span>
        </div>
        <div className={`flex flex-col items-center text-center p-4 rounded-3xl border transition-colors h-full ${isDark ? 'bg-zinc-800/50 border-white/5' : 'bg-white border-zinc-200'}`}>
          <RotateCcw className="w-8 h-8 text-lime-600 mb-2 shrink-0" />
          <span className={`text-[10px] font-bold uppercase tracking-tighter leading-tight transition-colors mt-auto ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.checkout.warranty}</span>
        </div>
      </div>
    </div>
  );
};
