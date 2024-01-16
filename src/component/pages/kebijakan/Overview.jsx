import React from "react";
import { useTranslation } from "react-i18next";
const Overview = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className=" min-h-screen w-screen">
        <div className="h-screen w-screen -mt-2 mb-6  flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-2xl  text-dark uppercase font-inter">
            <b>{t("body.overview")}</b>
          </h1>
          <p className="text-center lg:w-[80%] px-2 w-full lg:text-lg text-xs pt-6 mb-6 font-OswaldLight">
           {t("overview.text")}
          </p>
          <a href="benefit" className="h-12 lg:text-lg font-OswaldSemibold text-sm rounded shadow-lg capitalize hover:bg-red-500 hover:text-white text-center ring-black p-2 flex items-center text-white transition-all ease-out duration-500 bg-red-600">{t("body.overviewbtn")}</a>
        </div>
      </div>
    </>
  );
};

export default Overview;
