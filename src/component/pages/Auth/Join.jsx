import React from "react";
import bgtop from "../../../assets/img/home/bgtop.png";
import { useTranslation } from "react-i18next";

const Join = () => {
     const [t] = useTranslation("global")
  return (
    <>
      <div className="pt-24 h-screen w-screen">
        <img
          loading="lazy"
          src={bgtop}
          alt="bgtop"
          className="-mt-4 mb-4 object-cover rounded shadow-xl h-[180px] lg:h-1/2 w-screen"
        />
        <div className="container mx-auto  ">
          <h1 className="text-center font-inter text-2xl">{t("join.header")}</h1>
          <div className="leading-6 mx-5 lg:mx-0  mt-6 h-full flex  justify-center">
            <div className="text-justify lg:w-[500px] w-fulllg:text-lg text-base font-OswaldReguler ">
              <p>
              {t("join.line1")} &nbsp;
                <a className="text-red-600" href="register">
                {t("join.line1_link")}
                </a> &nbsp;{t("join.line2")} &nbsp;
                <a className="text-red-600" href="3">
                {t("join.line2_link")}
                </a>&nbsp;{t("join.line3")}.
              </p>
              <p className="pt-6">
              {t("join.line4")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
