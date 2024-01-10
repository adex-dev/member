import React, {useCallback, useEffect, useState} from "react";
import logo from "../../assets/img/logo.png";
import Navlinks from "./Navlinks";
import {useTranslation} from "react-i18next";
import {GoChevronDown} from "react-icons/go";
import {Itemlink as Linksen} from "../language/en/Itemlink";
import {Itemlink as Linksid} from "../language/id/Itemlink";

export const Navbar = () => {
    const [links, setLinks] = useState([]);
    const [t, i18next] = useTranslation("global");
    const [langactive, setLangactive] = useState(false);
    const [langvalue, setLangvalue] = useState(false);
    const [open, setOpen] = useState();
    const handlerscroll = () => {
        const header = document.querySelector("nav");
        const fixedheader = header.offsetTop;
        window.pageYOffset > fixedheader
            ? header.classList.add("navbar-fixed")
            : header.classList.remove("navbar-fixed");
    };
    const handlechange = (lang) => {
        sessionStorage.setItem("bahasa", lang);
        cekbahasa();
        setLangactive(false);
    };
    const cekbahasa = useCallback(() => {
        const bahasa = sessionStorage.getItem("bahasa");
        if (bahasa === "Indonesia") {
            setLangvalue(false);
            i18next.changeLanguage("id");
            setLinks(Linksid);
        } else {
            setLangvalue(true);
            i18next.changeLanguage("en");
            setLinks(Linksen);
        }
    }, [setLangvalue, i18next]);
    const handleMouseEnter = () => {
        setLangactive(true);
    };

    const handleMouseLeave = () => {
        setLangactive(false);
    };

    useEffect(() => {
        cekbahasa();
        window.addEventListener("scroll", handlerscroll);
        return () => {
            window.removeEventListener("scroll", handlerscroll);
        };
    }, [cekbahasa]);
    return (
        <>
            <nav className="bg-primary absolute w-full top-0 left-0 z-20 shadow-lg">
                <div className="flex items-center font-medium justify-around">
                    <div className="z-10 p-5 md:w-auto w-full flex justify-between">
                        <img
                            src={logo}
                            alt="logo"
                            className="md:cursor-pointer h-12 border-2 border-white rounded-full shadow-xl shadow-amber-50"
                        />
                        <div className="md:hidden flex items-center">
                            <div className="relative w-full mx-2">
                                <div
                                    className="relative inline-block group"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        onClick={() => {
                                            setLangactive(!langactive);
                                        }}
                                        type="button"
                                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-secondari hover:text-dark shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  relative"
                                    >
                                        {langvalue ? "English" : "Indonesia"} &nbsp;
                                        <span
                                            className="text-xl md:mt-1 md:ml-2 md:block hidden"
                                        >
                      <GoChevronDown/>
                    </span>
                                    </button>
                                    <div
                                        className={`absolute right-0 z-10  w-full  rounded-md bg-white hover:text-dark shadow-lg ring-1 dark:ring-white ring-black ring-opacity-5 focus:outline-none transition-all duration-500 ease-in-out ${
                                            langactive ? "" : "scale-0 origin-center"
                                        }`}
                                    >
                                        <div className="py-1">
                      <span
                          onClick={() => handlechange("English")}
                          className={`text-gray-700  px-4 py-2 text-sm cursor-pointer ${
                              langvalue ? "hidden" : "block"
                          }`}
                      >
                        English
                      </span>
                                            <span
                                                onClick={() => handlechange("Indonesia")}
                                                className={`text-gray-700  text-center py-2 text-sm cursor-pointer ${
                                                    langvalue ? "block" : "hidden"
                                                }`}
                                            >
                        Indonesia
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setOpen(!open);
                                }}
                                name="hamburger"
                                type="button"
                                className={`text-3xl md:hidden  ${
                                    open ? "navbarline-active" : ""
                                }`}
                            >
                                <span className="navbarline origin-top-left transition duration-500 ease-in-out"></span>
                                <span className="navbarline  transition duration-500 ease-in-out"></span>
                                <span className="navbarline origin-top-left transition duration-500 ease-in-out"></span>
                            </button>
                        </div>
                    </div>
                    <ul className="md:flex hidden uppercase text-secondari items-center gap-8 font-OswaldReguler">
                        <li>
                            <a href="/" className="py-7 px-3 inline-block">
                                {t("navbar.home")}
                            </a>
                        </li>
                        <Navlinks links={links}/>
                        <li>
                            <a href="login" className="py-7 px-3 inline-block">
                                {t("navbar.login")}
                            </a>
                        </li>
                        <li>
                            <div className="relative w-[150px] ">
                                <div
                                    className="relative inline-block group"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        onClick={() => {
                                            setLangactive(!langactive);
                                        }}
                                        type="button"
                                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold lg:text-gray-900 text-secondari shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 relative"
                                    >
                                        {langvalue ? "English" : "Indonesia"} &nbsp;
                                        <span
                                            className="text-xl md:mt-1 md:ml-2 md:block hidden"
                                        >
                      <GoChevronDown/>
                    </span>
                                    </button>
                                    <div
                                        className={`absolute right-0 z-10  w-full  rounded-md bg-white shadow-lg ring-1  ring-opacity-5 focus:outline-none transition-all duration-500 ease-in-out ${
                                            langactive ? "" : "scale-0 origin-center"
                                        }`}
                                    >
                                        <div className="py-1">
                      <span
                          onClick={() => handlechange("English")}
                          className={`text-gray-700 px-4 py-2 text-sm cursor-pointer ${
                              langvalue ? "hidden" : "block"
                          }`}
                      >
                        English
                      </span>
                                            <span
                                                onClick={() => handlechange("Indonesia")}
                                                className={`text-gray-700 px-4 py-2 text-sm cursor-pointer ${
                                                    langvalue ? "block" : "hidden"
                                                }`}
                                            >
                        Indonesia
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* mobile mnu */}
                    <ul
                        className={`md:hidden text-secondari -!z-10 bg-primary fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 font-OswaldReguler ${
                            open ? "left-0" : "left-[-100%]"
                        } `}
                    >
                        <li>
                            <a href="/" className="py-7 px-3 inline-block">
                                {t("navbar.home")}
                            </a>
                        </li>
                        <Navlinks links={links}/>
                        <li>
                            <a href="/login" className="py-7 px-3 inline-block">
                                {t("navbar.login")}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
