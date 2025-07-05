import React from "react";

export default function SectionTwo() {
  const details = [
    "كما هوة واضح من عنوان المعرض فعلى الصورة ان تكون منشئه باستخدام الذكاء الاصطناعي",
    "تستطيع المشاركة ب 5 صور كحد اقصى",
    <>
      ال <span className="text-purple-300 font-bold">Aspect Ratio</span> للصورة هوة 1:1
      يعني الصورة لازم تكون مربعة
    </>,
    "ستتم طباعة الصور بقياس 20 * 20 inch تقريبا 50 cm مربع",
    <>
      لضمان طباعة صورك بدقة عالـــية يجـــب ان تكــــون ابعـاد الصــور بــين
      <br />
      <span className="text-pink-300 font-bold text-base lg:text-2xl">
        (3000px * 3000px) و (6000px * 6000px)
      </span>
    </>,
    "يجب ان تكون الصور بصيغة png",
    "اخر قسم هوة عبارة عن ادوات تكدر تستخدمها بالشغل ابتداءا من انشاء الصور الى تعديلها وزيارة دقتها وضبط حجمها",
  ];

  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-20 relative"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-32 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 w-full">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
          text-center mb-16 text-white text-shadow-lg
          animate-[fadeInUp_1s_ease-out] transform hover:scale-105 transition-transform duration-300"
        >
          التفاصيل
        </h2>

        <div
          className="w-full glass-morphism rounded-2xl p-8 
          shadow-2xl hover:shadow-blue-500/20 transition-all duration-500
          border border-white/20 hover:border-blue-500/30
          animate-[slideInFromRight_1s_ease-out_0.5s] opacity-0"
          style={{animationFillMode: 'forwards'}}
        >
          <ol className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-6 text-white">
            {details.map((detail, index) => (
              <li
                key={index}
                className="glass-morphism rounded-xl p-6 
                hover:bg-white/10 transform hover:scale-105 transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer
                border border-white/10 hover:border-blue-500/30
                animate-[fadeInUp_0.8s_ease-out] opacity-0"
                style={{
                  animationDelay: `${0.8 + index * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-start justify-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 
                    rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <span className="flex-1 text-right leading-relaxed">{detail}</span>
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse mt-3"></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
