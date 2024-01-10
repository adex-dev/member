import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Navlinks = (props) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {props.links.map((link, xi) => (
        <div key={xi}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <GoChevronUp /> : <GoChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <GoChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks, mi) => (
                      <div key={mi}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, sj) => (
                          <li key={sj} className="text-sm text-gray-600 my-2.5">
                            <a href={slink.link} className="hover:text-primary">
                              {slink.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, mi) => (
              <div key={mi}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <GoChevronUp />
                      ) : (
                        <GoChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slinka, sl) => (
                      <li key={sl} className="py-3 pl-14 uppercase">
                        <a href={slinka.link}>{slinka.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
