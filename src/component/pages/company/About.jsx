import React from 'react'
import SCU from "../../../assets/img/scu.jpg";
import {useTranslation} from "react-i18next";
const About = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <div className="pt-24 min-h-screen w-screen">
                <div className=" w-screen -mt-2 mb-6 lg:h-[300px] h-40 flex items-center justify-center">
                    <div className={`relative w-full h-full `}>
                        <img
                            src={SCU}
                            alt="logo"
                            className="md:cursor-pointer h-full lg:object-cover object-fill w-full absolute"
                        />
                    </div>
                </div>
                <div className="lg:container h-full w-full lg:mx-auto">
                    <div className="flex  justify-center w-full">
                        <div className={`inline-block lg:w-1/2 w-full mx-2 text-center leading-relaxed`}>
                            <h1 className="lg:text-4xl text-lg text-primary font-inter uppercase mb-5">
                                <b>{t("body.about")}</b>
                            </h1>
                            <p className={`text-wrap text-dark font-OswaldLight lg:text-base text-sm antialiased leading-6`}>
                                {t("about.line1")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`w-screen lg:container lg:mx-auto  px-3 py-6`}>
                    <div className={`grid lg:grid-cols-3 grid-cols-1 gap-1 lg:gap-4 `}>
                        {
                            t("about.line2" , {returnObjects: true}).map((j,i)=> (
                                <div key={i} className={`relative w-full h-[500px] rounded shadow-2xl backdrop-blur-md`}>
                                    <div className={` absolute top-1/2 -translate-y-1/2 z-20  text-center px-5`}>
                                        <h3 className={`text-primary lg:text-4xl text-2xl font-Oswaldbold text-center uppercase`}>{j.judul}</h3>
                                        <p className={`pt-6 text-dark font-OswaldLight antialiased text-sm leading-7`}>
                                            {j.deskripsi}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
