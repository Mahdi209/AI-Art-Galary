import React from "react";

export default function SectionOne() {
  return (
    <div className="w-[22rem] mt-10  font-serif text-xl">
      <p className="text-center bg-slate-400 rounded-lg  p-5 hover:scale-110 transition-all duration-300">
        AI ART GALLERY
        <span className="mr-2 ">
          هوة معرض يشارك فيه الطلبة اعمالهم لعرض مهاراتهم في استخدام{" "}
          <span className="ml-2">AI</span>
          لانتاج الصور الرقمية.
        </span>
      </p>
      <h4 className="text-2xl font-bold mt-10 text-center mb-3 text-shadow">
        مواضيع المعرض
      </h4>
      <ol className=" text-xl  space-y-1 bg-slate-500 bg-opacity-60 border border-white rounded-lg p-5 text-white">
        <li className="bg-slate-700 rounded-md p-2">
          الاماكن المقدسه في العراق.
        </li>
        <li className="bg-slate-700 rounded-md p-2">
          الاماكن الاثرية في العراق.
        </li>
        <li className="bg-slate-700 rounded-md p-2"> قضية فلستطين ولبنان.</li>
        <li className="bg-slate-700 rounded-md p-2">الارهاب وشهداء سبايكر.</li>
        <li className="bg-slate-700 rounded-md p-2">
          اي رسومات وافكار ذات معاني هادفة .
        </li>
      </ol>
    </div>
  );
}
