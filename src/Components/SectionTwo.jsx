import React from "react";

export default function SectionTwo() {
  return (
    <div className="w-[22rem] lg:w-[40rem] h-screen flex flex-col justify-center">
      <h2 className="text-center text-5xl lg:text-8xl mb-10   text-white ">
        التفاصيل{" "}
      </h2>
      <ol className=" lg:w-full  text-xl  lg:text-3xl text-center  bg-opacity-60 border border-white space-y-3  rounded-lg p-5 text-white">
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5 ">
          كما هوة واضح من عنوان المعرض فعلى الصورة ان تكون منشئه باستخدام الذكاء
          الاصطناعي
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          تستطيع المشاركة ب 5 صور كحد اقصى
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          ال <span>Aspeect Ratio</span> للصورة هوة 1:1 يعني الصورة لازم تكون
          مربعة
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          ستتم طباعة الصور بقياس 20 * 20 inch تقريبا 50 cm مربع
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          لضمان طباعة صورك بدقة عالـــية يجـــب ان تكــــون ابعـاد الصــور بــين
          <br />
          <span className="text-base lg:text-3xl">
            (3000px * 3000px) و (6000px * 6000px)
          </span>
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          يجب ان تكون الصور بصيغة png
        </li>
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          اخر قسم هوة عبارة عن ادوات تكدر تستخدمها بالشغل ابتداءا من انشاء الصور
          الى تعديلها وزيارة دقتها وضبط حجمها
        </li>
      </ol>
    </div>
  );
}
