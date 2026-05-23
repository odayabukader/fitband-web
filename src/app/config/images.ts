// ========================================
// 📸 FitBand Image Assets Configuration
// ========================================
// All product images are stored in /public/images/ folder
// BASE ensures correct URLs in dev and when app is served from a subpath

const BASE = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL != null
  ? import.meta.env.BASE_URL
  : '/';

const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV === true;

function img(path: string) {
  const base = BASE.endsWith('/') ? BASE : BASE + '/';
  const url = `${base}images/${path}`;
  // Avoid cached 404 in dev; bump t when you replace an image to force reload
  return isDev ? `${url}?t=12` : url;
}

// Export all images using public folder paths
export const images = {
  // Main hero/product images
  mainHeroImage: img('main-hero.png'),           // الصورة الرئيسية - خليك بأفضل أداءك كل يوم
  smartAppImage: img('smart-app.png'),           // تطبيق ذكي لمتابعة صحتك خطوة بخطوة
  healthAppImage: img('health-app.png'),          // واجهة تطبيق صحي مع السوار

  // Feature images
  appFeaturesImage: img('app-features.png'),        // أشبكها على التطبيق واستعمل كل الميزات بدون أي اشتراك
  aiFeatureImage: img('ai-feature.png'),          // ذكاء اصطناعي لتحليل يومك
  strapImage: img('strap.png'),              // سوار قماش عملي يناسب كل الأوقات
  batteryLifeImage: img('battery-life.png'),        // بطارية تدوم حتى 40 يوم
  notificationsImage: img('notifications.png'),      // إشعارات ذكية - استقبال تنبيهات المكالمات والرسائل
  designFeatureImage: img('design-feature.png'),      // تصميم نحيف وخفيف
  weightFeatureImage: img('weight-feature.png'),      // خفيفة على اليد لدرجة تنسى انك لابسها - 27 جرام

  // Product showcase
  productCenter: img('main-hero.png'),  // استخدام الصورة الرئيسية لعرض المنتج
};

// Fallback placeholder image (SVG data URI)
export const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23a3e635" width="400" height="400"/%3E%3Ctext fill="%23000" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EFitBand%3C/text%3E%3C/svg%3E';