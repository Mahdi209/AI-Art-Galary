import React from "react";
import list from "../AiList";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SectionThree() {
  return (
    <div className="w-[22rem] lg:w-[40rem] h-screen flex flex-col justify-center">
      <h2 className="text-center text-5xl lg:text-8xl mb-10   text-white">
        ادوات انشاء الصور
      </h2>
      <ul className="lg:w-full  text-xl  lg:text-3xl text-center  bg-opacity-60 border border-white space-y-3  rounded-lg p-5 text-white">
        {list.map((item, index) => (
          <li
            className="bg-slate-700 bg-opacity-70  flex flex-row-reverse justify-between items-center  rounded-md p-2 "
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
            <a href={item.href} target="_blank" rel="noreferrer">
              <FaArrowAltCircleRight className="w-10 h-10" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
