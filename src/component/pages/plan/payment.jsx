import React, {useState} from 'react'
import {useTranslation} from "react-i18next";

const Payment = () => {
    const [open,setOpen] = useState('')
    const  [t] = useTranslation("global")
    return (
        <>
            <div className="pt-24 min-h-screen w-screen">
                <div className="bg-dark w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
                    <h1 className="lg:text-4xl text-2xl  text-white font-inter">
                        <b>{t("body.payment")}</b>
                    </h1>
                </div>
                <div className="lg:container w-full mx-auto px-4 h-full">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-1 lg:pt-12 pt-6`}>
                        <div className={`lg:leading-10 leading-relaxed lg:text-lg text-sm font-inter`}>
                            <p className={`cursor-pointer mb-5`}  onClick={() => {
                                setOpen('payment');
                            }}>{t("payment.line1")}</p>
                            <p onClick={()=>{
                                setOpen(('informasi'))
                            }} className={`cursor-pointer`}>{t("payment.line2")}</p>
                        </div>
                        <div className={open==='payment' || open ==='' ? 'block' : 'hidden'}>
                            <h3 className={`lg:text-lg text-base text-dark font-OswaldMedium antialiased leading-6 mb-7`}>{t("payment.line1")}</h3>
                            <p className={`text-sm font-OswaldLight text-dark antialiased leading-relaxed`}>{t("payment.line3")}</p>
                            <div className={`mb-6`}><p className={`text-sm font-Oswaldbold antialiased leading-6`}> 1. Cash</p>
                                <p className={`px-6 text-sm font-OswaldLight antialiased leading-relaxed`}>{t("payment.line4")}</p></div>
                            <div className={`mb-6`}>
                                <p className={`text-sm font-Oswaldbold antialiased leading-6`}> 2. Debit / Credit Card</p>
                                <ul className={`px-6 text-sm font-Oswaldbold antialiased leading-relaxed list-disc `}>
                                    <li>Bank Mandiri</li>
                                    <li>Bank BCA</li>
                                    <li>Bank BNI</li>
                                    <li>Bank BRI</li>
                                    <li>Bank PERMATA</li>
                                    <li>Bank {t("payment.line5")}</li>
                                    <li>VISA</li>
                                    <li>MASTER</li>
                                </ul>
                            </div>
                            <div className={`mb-6`}>
                                <p className={`text-sm font-Oswaldbold antialiased leading-6`}> 3. E-Wallet</p>
                                <ul className={`px-6 text-sm font-Oswaldbold antialiased leading-relaxed list-disc `}>
                                    <li>SHOOPE PAY</li>
                                    <li>DANA</li>
                                    <li>GOPAY</li>
                                    <li>LINK AJA</li>
                                    <li>OVO</li>
                                </ul>
                            </div>
                            <div className={`mb-6`}>
                                <p className={`text-sm font-Oswaldbold antialiased leading-6`}> 4. VOUCHER</p>
                                <ul className={`px-6 text-sm font-Oswaldbold antialiased leading-relaxed list-disc `}>
                                    <li>SODEXO</li>
                                </ul>
                            </div>
                        </div>
                        <div className={open==='informasi' ? 'block' : 'hidden'}>
                            <h3 className={`lg:text-lg text-base text-dark font-OswaldMedium antialiased leading-6 mb-7`}>Apakah Informasi Pembayaran saya akan aman</h3>
                            <p className={`text-sm font-OswaldLight text-dark antialiased leading-relaxed mb-6`}>Kami Menjaga keamanan dengan sangat serius, sehingga kami melakukan segalanya yang kami bisa untuk melindungi informasi Kamu. Semua data rahasia, termasuk informasi pembayaran.</p>
                            <p className={`text-sm font-OswaldLight text-dark antialiased leading-relaxed mb-6`}>Jika ada biaya yang tidak terotorisasi muncul di kartu kredit kamu setelah bebelanja di resto kami, Kamu harus segera memberitahu penyedia kartu kredit Kamu sesuai dengan aturan dan prosedur pelaporan kartu kredit Kamu. Resto Nahm & Isoide. akan bertanggung jawab atas pembelian yang dilakukan di restoran kami hanya jika penggunaan kartu kredit yang tidak terotorisasi oleh kamu bukan karena kesalahan kamu sendiri.</p>
                            <p className={`text-sm font-OswaldLight text-dark antialiased leading-relaxed`}>Perhatikan bahwa kami tidak akan pernah meminta pelanggan untuk menginformasikan detail akun atau kartu kredit melalui email. Jika Kamu menerima email yang mengaku berasal dari Isoide & Nahm atau Jaygee Group dan meminta Kamu melakukannya, JANGAN merespon dan segera hubungi kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payment
