import React from 'react'
import step1 from "../../../assets/img/poin/poin_step 1.png";
import step2 from "../../../assets/img/poin/poin_step 2.png";
import step3 from "../../../assets/img/poin/poin_step 3.png";
import step4 from "../../../assets/img/poin/poin_step 4.png";
import redem1 from "../../../assets/img/poin/redeem_step 2.png";
import reedem2 from "../../../assets/img/poin/redeem_step 3.png";
import {useTranslation} from "react-i18next";
const Reedem = () => {
    const [t] = useTranslation("global")
    return (
        <>
            <div className="pt-24 min-h-screen w-screen">
                <div className="px-4 w-full h-[70vh] flex items-center text-dark">
                    <div className={`pt-12`}>
                        <h2 className={`uppercase font-Oswaldbold text-lg lg:text-3xl text-center`}>{t("claim.line1")}</h2>
                        <p className={`text-center text-dark`}>{t("claim.line2")}</p>
                    <div className="grid lg:grid-cols-4 grid-cols-2  pt-12 gap-4 text-center justify-center text-dark lg:text-sm text-xs font-OswaldLight">
                        <div className={`flex flex-col items-center lg:h-[200px]`}>
                            <img src={step1} className="object-cover  mb-6 lg:h-full h-[100px]" alt="potongan harga" />
                            <p>{t("claim.line3")}</p>
                        </div>
                        <div className={`flex flex-col items-center lg:h-[200px] mb-6`}>
                            <img src={step2} className="object-cover lg:h-full h-[100px] mb-6" alt="Royalti" />
                            <p>{t("claim.line4")}</p>
                        </div>
                        <div  className={`flex flex-col items-center lg:h-[200px] h-[100px] mb-6`}>
                            <img src={step3} className="object-cover h-full mb-6" alt="Voucher" />
                            <p>{t("claim.line5")}</p>
                        </div>
                        <div className={`flex flex-col items-center lg:h-[200px] h-[100px] mb-6`}>
                            <img src={step4} className="object-cover h-full mb-6" alt="Voucher" />
                            <p>{t("claim.line6")}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="px-4 w-full mt-12 h-full">
                    <div className={`pt-12`}>
                        <h2 className={`uppercase font-Oswaldbold text-lg lg:text-3xl text-center`}>{t("claim.line7")}</h2>
                    <div className="grid lg:grid-cols-4 grid-cols-2  pt-12 gap-4 text-center justify-center text-dark lg:text-sm text-xs font-OswaldLight">
                        <div className={`flex flex-col items-center lg:h-[200px]`}>
                            <img src={step1} className="object-cover  mb-6 lg:h-full h-[100px]" alt="potongan harga" />
                            <p>{t("claim.line8")}</p>
                        </div>
                        <div className={`flex flex-col items-center lg:h-[200px] mb-6`}>
                            <img src={step2} className="object-cover lg:h-full h-[100px] mb-6" alt="Royalti" />
                            <p>{t("claim.line9")}</p>
                        </div>
                        <div  className={`flex flex-col items-center lg:h-[200px] h-[100px] mb-6`}>
                            <img src={redem1} className="object-cover h-full mb-6" alt="Voucher" />
                            <p>{t("claim.line10")}</p>
                        </div>
                        <div className={`flex flex-col items-center lg:h-[200px] h-[100px] mb-6`}>
                            <img src={reedem2} className="object-cover h-full mb-6" alt="Voucher" />
                            <p>{t("claim.line11")}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reedem
