import React from "react";
import {useTranslation} from "react-i18next";
import Acordion2 from "../../class/Acordion2";

const Police = () => {
    const [t] = useTranslation("global");
    return (
        <>
            <div className="pt-24 min-h-screen w-screen">
                <div className="bg-dark w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
                    <h1 className="lg:text-4xl text-2xl  text-white font-inter">
                        <b>{t("body.police")}</b>
                    </h1>
                </div>
                <div className="lg:container mx-auto px-4 w-full">
                    <article
                        className="leading-relaxed antialiased mt-4 prose prose-slate mx-auto lg:prose-lg prose-p:leading-relaxed prose-p:font-OswaldReguler prose-p:text-justify prose-p:text-[15px]">
                        <p
                            className="lead !font-OswaldReguler"
                            dangerouslySetInnerHTML={{__html: t("police.line1")}}
                        ></p>
                        <p
                            className="lead !font-OswaldReguler"
                            dangerouslySetInnerHTML={{__html: t("police.line2")}}
                        ></p>
                        <p
                            className="lead !font-OswaldReguler"
                            dangerouslySetInnerHTML={{__html: t("police.line3")}}
                        ></p>
                        <p
                            className="lead !font-OswaldReguler"
                            dangerouslySetInnerHTML={{__html: t("police.line4")}}
                        ></p>
                        <p
                            className="lead !font-inter lg:text-2xl text-lg"
                            dangerouslySetInnerHTML={{__html: t("police.line5")}}
                        ></p>
                        <p
                            className="lead !font-OswaldSemibold lg:text-lg text-sm"
                            dangerouslySetInnerHTML={{__html: t("police.line6")}}
                        ></p>
                        <p
                            className="lead !font-OswaldReguler capitalize"
                            dangerouslySetInnerHTML={{__html: t("police.line7")}}
                        ></p>
                        {t("police.line8", {returnObjects: true}).map((data, i) => (
                            <Acordion2 key={i} title={data.judul} poin={data.poin} answer={data.deskription}/>
                        ))}
                        {t("police.line9", {returnObjects: true}).map((line9, l) => (
                            <div key={l}>
                                <h5 className="lg:text-2xl text-primary text-lg font-inter pt-9 uppercase">
                                    {line9.judul}
                                </h5>
                                <h4 className="lg:text-lg text-base  text-dark font-OswaldMedium">
                                    {line9.subjudul}
                                </h4>
                                {line9.alenia.map((p9, jk) => (
                                    <div key={jk}>
                                        <p
                                           className="lead !font-OswaldReguler capitalize"
                                           dangerouslySetInnerHTML={{__html: p9.line1}}
                                        ></p>
                                        {p9.poin && Array.isArray(p9.poin) && (
                                                    <Acordion2  title={p9.dessub} poin={p9.poin} answer=''/>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </article>
                </div>
            </div>
        </>
    );
};

export default Police;
