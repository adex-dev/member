import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const Acordion2 = (props) => {
  const [acrodionopen, setAcordionopen] = useState(false);
  return (
    <div className={`py-2 transform duration-500 ease-in-out ${acrodionopen ? 'h-full' : 'overflow-y-hidden h-[50px]'}`}>
    <button
      onClick={() => setAcordionopen(!acrodionopen)}
      className="flex justify-between w-full text-left"
    >
      <h5 className="text-xs lg:text-base font-inter">{props.title}</h5>
      {acrodionopen ? (
        <LuMinus
          size={25}
          className={`transform origin-center rotate-90 transition duration-500 ease-out ${
            acrodionopen && "!rotate-180"
          }`}
        />
      ) : (
        <GoPlus
          size={25}
          className={`transform origin-center rotate-90 transition duration-500 ease-out ${
            acrodionopen && "!rotate-180"
          }`}
        />
      )}
    </button>
    <div
      className={`grid  gap-y-2 overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm font-OswaldLight ${
        acrodionopen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <p className="overflow-hidden text-xs lg:text-base font-Oswalextraligt w-[80%] pt-3">
        {props.answer}
      </p>
      <div>
        {props.poin.map((p, j) => (
          <div key={j}>
            <p
              className="overflow-hidden text-xs !text-center lg:text-base font-Oswalextraligt w-[80%] pt-2"
              dangerouslySetInnerHTML={{
                __html: p.judul,
              }}
            ></p>
            {p.alenia && Array.isArray(p.alenia) && (
              <ul className="list-disc pl-4">
                {p.alenia.map((h, k) => (
                  <li
                    key={k}
                    dangerouslySetInnerHTML={{
                      __html: h.line1,
                    }}
                  ></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  </div>
  
  );
};

export default Acordion2;
