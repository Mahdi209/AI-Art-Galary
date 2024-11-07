import React from "react";

export default function SectionTwo() {
  const details = [
    "كما هوة واضح من عنوان المعرض فعلى الصورة ان تكون منشئه باستخدام الذكاء الاصطناعي",
    "تستطيع المشاركة ب 5 صور كحد اقصى",
    <>
      ال <span className="text-purple-300">Aspect Ratio</span> للصورة هوة 1:1
      يعني الصورة لازم تكون مربعة
    </>,
    "ستتم طباعة الصور بقياس 20 * 20 inch تقريبا 50 cm مربع",
    <>
      لضمان طباعة صورك بدقة عالـــية يجـــب ان تكــــون ابعـاد الصــور بــين
      <br />
      <span className="text-purple-300 text-base lg:text-2xl">
        (3000px * 3000px) و (6000px * 6000px)
      </span>
    </>,
    "يجب ان تكون الصور بصيغة png",
    "اخر قسم هوة عبارة عن ادوات تكدر تستخدمها بالشغل ابتداءا من انشاء الصور الى تعديلها وزيارة دقتها وضبط حجمها",
  ];

  return (
    <div
      className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto 
      min-h-screen flex flex-col justify-center items-center py-10"
    >
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold 
        text-center mb-10 text-white text-shadow-lg
        animate-[fadeIn_1s_ease-out] transform hover:scale-105 transition-transform"
      >
        التفاصيل
      </h2>

      <ol
        className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl text-center space-y-4 
        bg-slate-800/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-6 
        text-white shadow-2xl hover:border-white/50 transition-all duration-500"
      >
        {details.map((detail, index) => (
          <li
            key={index}
            className="bg-slate-700/80 backdrop-blur-sm rounded-lg p-5 
            hover:bg-slate-600/80 transform hover:scale-102 transition-all duration-300
            hover:shadow-lg hover:shadow-purple-500/20"
          >
            {detail}
          </li>
        ))}
      </ol>
    </div>
  );
}
