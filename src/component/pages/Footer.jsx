import React from "react";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const [t] = useTranslation("global")
  return (
    <>
      <footer className=" w-full mt-10 pt-10 bg-dark">
        <div className="container">
          <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                src={logo}
                className='block mx-auto w-[100px]  border-2 border-white rounded-full shadow-xl shadow-amber-50"'
                alt="logo"
              />
            </div>
            <div className="w-full grid lg:grid-cols-6 grid-cols-3 gap-4 py-6">
              <div>
                <span className="text-white font-inter text-base ">
                  {t("footer.bantuan")}
                </span>
                <ul className="text-white/80 font-OswaldLight text-sm leading-6 py-6 capitalize">
                  <li>{t("footer.payment")}</li>
                  <li>{t("footer.contact")}</li>
                  <li>{t("footer.ask")}</li>
                </ul>
              </div>
              <div>
                <span className="text-white font-inter text-base ">
                {t("footer.perusahaan")}
                </span>
                <ul className="text-white/80 font-OswaldLight text-sm leading-6 py-6">
                  <li>{t("footer.company.about")}</li>
                  <li>{t("footer.company.kebijakan")}</li>
                  <li>{t("footer.company.syarat")}</li>
                </ul>
              </div>
              <div>
                <span className="text-white font-inter text-base ">
                {t("footer.tautan")}
                </span>
                <ul className="text-white/80 font-OswaldLight text-sm leading-6 py-6">
                  <li>Store</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
