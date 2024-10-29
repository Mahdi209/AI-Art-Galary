import React from "react";
import list, { editList } from "../AiList";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SectionThree() {
  return (
    <div className="">
      <h2 className="text-center font-bold text-2xl mt-10 mb-5  text-shadow ">
        ادوات انشاء الصور
      </h2>
      <ul className="w-[22rem] xl:w-full  text-xl text-justify font-serif space-y-1 border border-white bg-slate-500  bg-opacity-60  rounded-lg p-5 text-white">
        {list.map((item, index) => (
          <li
            className="bg-slate-700 flex flex-row-reverse justify-between items-center  rounded-md p-2 "
            key={index}
          >
            <div className="flex flex-row-reverse">
              <img
                src={item.icon}
                alt={item.name}
                width="50px"
                height="50px"
                className="rounded-2xl  mr-5"
              />
              <div className="flex items-center space-x-0">{item.name}</div>
            </div>
            <a href={item.href}>
              <FaArrowAltCircleRight className="w-10 h-10" />
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-center font-bold text-2xl text-shadow mt-10 mb-5">
        ادوات رفع جودة الصور
      </h2>
      <ul className="w-[22rem]  text-xl text-justify font-serif space-y-1 bg-opacity-60 border border-white bg-slate-500 rounded-lg p-5 text-white">
        {editList.map((item, index) => (
          <li
            className="bg-slate-700 flex flex-row-reverse justify-between items-center  rounded-md p-2 "
            key={index}
          >
            <div className="flex flex-row-reverse">
              <img
                src={item.icon}
                alt={item.name}
                width="50px"
                height="50px"
                className="rounded-2xl  mr-5"
              />
              <div className="flex items-center">{item.name}</div>
            </div>
            <a href={item.href}>
              <FaArrowAltCircleRight className="w-10 h-10" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
