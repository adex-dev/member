import React from "react";
import Acordion from "./Acordion";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const [t] = useTranslation("global");
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      {t('faq', { returnObjects: true }).map((data, i) => (
        <div key={i}>
          <Acordion title={data.title} answer={data.answer} />
        </div>
      ))}
    </div>
  );
};

export default Faqs;
