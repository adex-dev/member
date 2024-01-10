import React from "react";
import { useTranslation } from "react-i18next";
import Acordion2 from "../../class/Acordion2";
const Police = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="pt-24 min-h-screen w-screen">
        <div className="bg-slate-600 w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
          <h1 className="lg:text-4xl text-2xl  text-white font-inter">
            <b>{t("body.police")}</b>
          </h1>
        </div>
        <div className="lg:container mx-auto px-4 w-full">
          <article className="leading-relaxed antialiased mt-4 prose prose-slate mx-auto lg:prose-lg prose-p:font-OswaldReguler prose-p:text-justify prose-p:text-[15px]">
            <p
              className="lead !font-OswaldReguler"
              dangerouslySetInnerHTML={{ __html: t("police.line1") }}
            ></p>
            <p
              className="lead !font-OswaldReguler"
              dangerouslySetInnerHTML={{ __html: t("police.line2") }}
            ></p>
            <p
              className="lead !font-OswaldReguler"
              dangerouslySetInnerHTML={{ __html: t("police.line3") }}
            ></p>
            <p
              className="lead !font-OswaldReguler"
              dangerouslySetInnerHTML={{ __html: t("police.line4") }}
            ></p>
            <p
              className="lead !font-inter lg:text-2xl text-lg"
              dangerouslySetInnerHTML={{ __html: t("police.line5") }}
            ></p>
            <p
              className="lead !font-OswaldSemibold lg:text-lg text-sm"
              dangerouslySetInnerHTML={{ __html: t("police.line6") }}
            ></p>
            <p
              className="lead !font-OswaldReguler capitalize"
              dangerouslySetInnerHTML={{ __html: t("police.line7") }}
            ></p>
            {t("police.line8", { returnObjects: true }).map((data, i) => (
                  <Acordion2 key={i} title={data.judul} poin={data.poin} answer={data.deskription} />
              ))}
          </article>
        </div>
      </div>
    </>
  );
};

export default Police;
