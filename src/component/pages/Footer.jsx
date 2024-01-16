import React from "react";
import { useTranslation } from "react-i18next";
import {useNavigate} from "react-router-dom";
const Footer = () => {
    const [t] = useTranslation("global")
  const navigate = useNavigate();
  const goDetail = (id)=>{
      navigate(`${id}`)
  }
  const  oncek=()=>{
      window.location.href="https://isoide.co.id/storelist"
  }
  return (
    <>
      <footer className=" w-full mt-10 pt-10 bg-transparent">
        <div className="lg:container w-full lg:mx-auto mx-4">
          <div className="w-full">
            <div className="w-full grid lg:grid-cols-6 grid-cols-2 gap-4 py-6">
              <div>
                <span className="text-dark font-inter text-base ">
                  {t("footer.bantuan")}
                </span>
                <ul className="text-dark font-OswaldLight text-sm leading-6 py-6 capitalize">
                  <li className={`cursor-pointer`} onClick={(e) => goDetail('payment')}>{t("footer.payment")}</li>
                  <li className={`cursor-pointer`} onClick={(e) => goDetail('helpdesk')}>{t("footer.contact")}</li>
                </ul>
              </div>
              <div>
                <span className="text-dark font-inter text-base ">
                {t("footer.perusahaan")}
                </span>
                <ul className="text-dark font-OswaldLight text-sm leading-6 py-6">
                  <li className="cursor-pointer" onClick={(e) => goDetail('about')}>{t("footer.company.about")}</li>
                  <li className={`cursor-pointer`} onClick={(e)=>goDetail('policy')}>{t("footer.company.kebijakan")}</li>
                  <li className={`cursor-pointer`} onClick={(e)=>goDetail('termandcondition')}>{t("footer.company.syarat")}</li>
                </ul>
              </div>
              <div>
                <span className="text-dark font-inter text-base ">
                {t("footer.tautan")}
                </span>
                <ul className="text-dark font-OswaldLight text-sm leading-6 py-6">
                  <li className={`cursor-pointer`} onClick={oncek}>Store</li>
                  <li className={`cursor-pointer`}
                      onClick={(e) => goDetail('reedem')}>{t("footer.company.reedem")}</li>
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
