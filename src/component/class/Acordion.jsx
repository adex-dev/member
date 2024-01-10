import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";


const Acordion = (props) => {
  const [acrodionopen, setAcordionopen] = useState(false);
  return (
    <div className="py-2">
      <button onClick={()=>setAcordionopen(!acrodionopen)} className="flex justify-between w-full text-left">
        <h5 className="text-xs lg:text-base font-inter">{props.title}</h5>
        {acrodionopen ?  <LuMinus size={25} className={`transform origin-center rotate-90 transition duration-500 ease-out ${acrodionopen && "!rotate-180"}`}/> : <GoPlus size={25} className={`transform origin-center rotate-90 transition duration-500 ease-out ${acrodionopen && "!rotate-180"}`}/>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm font-OswaldLight ${
          acrodionopen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-xs lg:text-base font-Oswalextraligt w-[80%] pt-3">{props.answer}</p>
      </div>
    </div>
  );
};

export default Acordion;
