import React from "react";

export default function SectionTwo() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-2xl mt-10 mb-5 text-shadow ">
        التفاصيل{" "}
      </h2>
      <ol className=" w-[22rem] text-xl text-justify font-serif  bg-opacity-60 border border-white space-y-1 bg-slate-500 rounded-lg p-5 text-white">
        <li className="bg-slate-700 rounded-md p-2">
          كما هوة واضح من العنوان المعرض فعلى الصورة ام تكون منشة باستخدام
          الذكاء الاصطناعي
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          تكدر تشارك ب ٥ صور كحد اقصى
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          ال <span>Aspeect Ratio</span> للصورة هوة 1:1 يعني الصورة لازم تكون
          مربعة
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          ستتم طباعة الصور بقياس 20 * 20 inch تقريبا 50 cm مربع
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          لضمان طباعة صورك بدقة عالـــية يجـــب ان تكــــون ابعـاد الصــور بــين
          <br />
          <span className="text-base">
            (3000px * 3000px) و (6000px * 6000px)
          </span>
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          اخر قسم هوة عبارة عن ادوات تكدر تستخدمها بالشغل ابتداءا من انشاء الصور
          الى تعديلها وزيارة دقتها وضبط حجمها
        </li>
      </ol>
    </div>
  );
}
