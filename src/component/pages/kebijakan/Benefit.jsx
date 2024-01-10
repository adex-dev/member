import React from "react";
import potongan from "../../../assets/icon/potongan.jpeg";
import royalti from "../../../assets/icon/royalti.jpg";
import voucher from "../../../assets/icon/voucher.jpg";
import { useTranslation } from "react-i18next";
const Benefit = () => {
    const [t] = useTranslation("global");
  return (
    <>
      <div className="pt-24 h-screen w-screen">
        <div className="bg-slate-600 w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
          <h1 className="lg:text-4xl text-2xl  text-white font-inter">
            <b>{t('body.benefit')}</b>
          </h1>
        </div>
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-3 py-28 gap-4 text-center justify-center lg:text-lg text-xs font-bold">
            <div>
              <img src={potongan} className="object-cover" alt="potongan harga" />
              <p>Potongan harga</p>
            </div>
            <div>
              <img src={royalti} className="object-cover" alt="Royalti" />
              <p>Royalti</p>
            </div>
            <div>
              <img src={voucher} className="object-cover" alt="Voucher" />
              <p>Voucher</p>
            </div>
          </div>
          <a href="term" className="text-sm text-slate-400 hover:underline lowercase lg:ml-24 ml-5 mt-24">*{t("body.term")}</a>
        </div>
      </div>
    </>
  );
};

export default Benefit;
