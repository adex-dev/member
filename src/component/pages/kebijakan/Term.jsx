import React from "react";
import { useTranslation } from "react-i18next";

const Term = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="pt-24 h-screen w-screen">
        <div className="bg-slate-600 w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
          <h1 className="lg:text-4xl text-2xl  text-white font-inter">
            <b>{t("body.term")}</b>
          </h1>
        </div>
        <div className="container mx-auto px-4 w-full">
          <div className="flex h-full w-full items-center justify-center">
            <ol className="font-OswaldReguler list-disc lg:text-base text-xs px-4">
              {t("Term", { returnObjects: true }).map((data, i) => (
                <li key={i}>
                 {data.answer}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Term;
