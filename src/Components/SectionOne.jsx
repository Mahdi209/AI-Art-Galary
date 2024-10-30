import React from "react";

export default function SectionOne() {
  return (
    <div className="w-[22rem] lg:w-[40rem] mt-10 h-screen text-xl flex flex-col justify-center">
      <h4 className="text-5xl lg:text-8xl  font-bold mt-10 text-center mb-10 text-white text-shadow">
        مواضيع المعرض
      </h4>
      <ol className=" text-xl lg:w-[100%] lg:text-3xl text-center space-y-3  bg-opacity-60 border transition-all duration-1000 border-white rounded-lg p-5 text-white">
        <li className="bg-slate-700 bg-opacity-70  rounded-md p-5">
          الاماكن المقدسه في العراق
        </li>
        <li className="bg-slate-700 bg-opacity-70 rounded-md p-5">
          الاماكن الاثرية في العراق
        </li>
        <li className="bg-slate-700 bg-opacity-70 rounded-md p-5">
          {" "}
          قضية فلستطين ولبنان
        </li>
        <li className="bg-slate-700 bg-opacity-70 rounded-md p-5">
          الارهاب وشهداء سبايكر
        </li>
        <li className="bg-slate-700 bg-opacity-70 rounded-md p-5">
          اي رسومات وافكار ذات معاني هادفة
        </li>
      </ol>
    </div>
  );
}
