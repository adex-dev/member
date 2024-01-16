import React from 'react'
import logo from '../../../assets/img/logo.png'
import {useTranslation} from "react-i18next";
const Contactus = () => {
    const  [t] = useTranslation("global")
    return (
        <div className="pt-24 min-h-screen w-screen overflow-x-hidden">
            <div className={`lg:container lg:mx-auto px-4 w-full`}>
                <div className={`flex items-center justify-center pt-28 w-full flex-col`}>
                        <h2 className={`uppercase text-dark font-inter lg:text-2xl text-base text-center`}>{t("contact.line1")}</h2>
                        <img src={logo} alt={`logo`} className={`block mx-auto pt-6 mb-6 `}/>
                        <a href={`https://wa.me/send/?phone=6281113105335`} target={`_blank`} className={`uppercase lg:w-1/2 w-full cursor-pointer text-center px-6 py-2 border border-black text-dark`}>{t("contact.line3")}</a>
                    <p className={`text-center px-1 mt-7`} dangerouslySetInnerHTML={{__html: t("contact.line2")}}></p>
                </div>
            </div>
        </div>
    )
}
export default Contactus
