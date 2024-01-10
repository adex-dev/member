import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { useTranslation } from "react-i18next";
import { Senderform } from "../../class/Senderform";
import Swal from "sweetalert2";
const Register = () => {
  const [t] = useTranslation("global");
  const [value, setValue] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [tgl, setTgl] = useState("");
  const datePickerRef = useRef(null);
  // eslint-disable-next-line
  const [gender, setGender] = useState("");
  const handleInputChange = (e, type) => {
    switch (type) {
      case "tel":
        const inputValue = e.target.value.replace(/[^0-9]/g, "");
        setValue(inputValue);
        break;
      case "nama":
        setNama(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "tgl":
        setTgl(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    // Initialize Flatpickr on component mount
    const datePicker = flatpickr(datePickerRef.current, {
      // Flatpickr options go here
      enableTime: false,
      disableMobile: true,
      dateFormat: "Y-m-d",
    });

    // Cleanup on component unmount
    return () => {
      datePicker.destroy();
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!nama || !email || !value || !tgl) {
      setError("All has Left Blank");
      return;
    } else if (!nama) {
      setError("Name has Left Blank");
      return;
    } else if (!value) {
      setError("No Phone has Left Blank");
      return;
    } else if (!email) {
      setError("Email has Left Blank");
      return;
    } else if (!tgl) {
      setTgl("Birthday has Left Blank");
      return;
    } else {
      Swal.fire({
        icon: "info",
        judul: "info!",
        text: "Proses..",
      });
      try {
        const response = await Senderform({ nama, email, value });
        const jsonData = response;
        if (response && jsonData.respon === 200) {
          Swal.fire({
            icon: "success",
            judul: "Success!",
            text: "Data sent successfully",
          }).then(() => {
            Swal.close();
          });
          setNama("");
          setEmail("");
          setValue("");
        } else {
          Swal.fire({
            icon: "error",
            judul: "Error!",
            text: "Data sent unsuccessfully",
          }).then(() => {
            Swal.close();
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          judul: "Error!",
          text: "Failed to send data",
        }).then(() => {
          Swal.close();
        });
      }
    }
  };
  if (error !== "") {
    Swal.fire({
      icon: "info",
      judul: "info!",
      text: { error },
    });
  }
  return (
    <>
      <div className="pt-24 min-h-screen w-screen">
        <div className="bg-slate-600 w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
          <h1 className="lg:text-4xl text-lg  text-white font-inter uppercase">
            <b>{t("register.header")}</b>
          </h1>
        </div>
        <div className="lg:container h-full w-full mx-auto">
          <div className="h-full flex justify-center pt-3">
            <form
              onSubmit={handleSubmit}
              className="lg:w-[30rem] w-full lg:px-12 px-4 h-full relative flex flex-col  dark:bg-white rounded py-4 justify-center  shadow-teal-500 bg-slate-700 shadow-xl"
            >
              <div className="mb-3">
                <div className="relative inline-block border border-black w-full rounded">
                  <input
                    value={nama}
                    onChange={(e) => handleInputChange(e, "nama")}
                    type="text"
                    autoComplete="off"
                    name="nama"
                    id="nama"
                    placeholder=" "
                    className="pt-6 pb-2 px-6 peer w-full rounded"
                  />
                  <label
                    className="absolute left-6 -translate-y-1/2 cursor-text  peer-focus:top-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base top-4 text-xs peer-focus:text-xs text-gray-600 transition-all"
                    htmlFor="nama"
                  >
                    {t("register.nama")}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="relative inline-block border border-black w-full rounded">
                  <input
                    value={email}
                    onChange={(e) => handleInputChange(e, "email")}
                    type="text"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder=" "
                    className="pt-6 pb-2 px-6 peer w-full rounded"
                  />
                  <label
                    className="absolute left-6 -translate-y-1/2 cursor-text  peer-focus:top-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base top-4 text-xs peer-focus:text-xs text-gray-600 transition-all"
                    htmlFor="email"
                  >
                    {t("register.email")}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="relative inline-block border border-black w-full rounded">
                  <input
                    value={value}
                    onChange={(e) => handleInputChange(e, "tel")}
                    type="tel"
                    autoComplete="off"
                    name="phone"
                    id="phone"
                    placeholder=" "
                    className="pt-6 pb-2 px-6 peer w-full rounded"
                  />
                  <label
                    className="absolute left-6 -translate-y-1/2 cursor-text  peer-focus:top-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base top-4 text-xs peer-focus:text-xs text-gray-600 transition-all"
                    htmlFor="phone"
                  >
                    {t("register.phone")}
                  </label>
                </div>
              </div>
              <div className="mb-3">
              <div className="relative inline-block border border-black w-full rounded">
                  <input
                    ref={datePickerRef}
                    value={tgl}
                    onChange={(e) => handleInputChange(e, "tgl")}
                    type="text"
                    autoComplete="off"
                    name="tglLahir"
                    id="tglLahir"
                    placeholder=" "
                    className="pt-6 pb-2 px-6 peer w-full rounded"
                  />
                  <label
                    className="absolute left-6 -translate-y-1/2 cursor-text  peer-focus:top-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base top-4 text-xs peer-focus:text-xs text-gray-600 transition-all"
                    htmlFor="tglLahir"
                  >
                    {t("register.tgl")}
                  </label>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex">
                  <label
                    htmlFor="laki"
                    className="mx-2 text-white hover:text-slate-200"
                  >
                    <input
                      type="radio"
                      value="Laki-laki"
                      checked={gender === "Laki-laki"}
                      onChange={(e) => handleInputChange(e, "gender")}
                      name="gender"
                      id="laki"
                    />{" "}
                    {t("register.laki")}
                  </label>
                  <label
                    htmlFor="perempuan"
                    className="mx-2 text-white hover:text-slate-200"
                  >
                    <input
                      type="radio"
                      value="Perempuan"
                      name="gender"
                      id="perempuan"
                      checked={gender === "Perempuan"}
                      onChange={(e) => handleInputChange(e, "gender")}
                    />{" "}
                    {t("register.perempuan")}
                  </label>
                </div>
              </div>
              <div className="mb-6 ">
                <p className="uppercase mb-5 text-center font-inter text-base lg:text-xl text-white leading-relaxed font-light">
                  <b>{t("register.benefit")}</b>
                </p>
                <p className="text-slate-200 font-OswaldLight lg:text-base text-xs text-justify leading-relaxed">
                  {t("register.benefit2")}
                </p>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="p-2 w-full h-full rounded shadow-lg ring-1 bg-primary font-Oswaldbold hover:bg-teal-500 text-white transition-all duration-500 ease-in-out"
                >
                  {t("register.button")}
                </button>
              </div>
              <div className="mb-3">
                <p className="text-white text-xs font-OswaldReguler leading-relaxed">
                  {t("register.line1")} &nbsp;{" "}
                  <a
                    className="text-red-500 hover:text-red-300 transition-all duration-300 ease-in-out font-Oswaldbold"
                    href="policy"
                  >
                    {t("register.link1")}
                  </a>{" "}
                  &nbsp; {t("register.line2")} &nbsp;{" "}
                  <a
                    className="text-red-500 hover:text-red-300 transition-all duration-300 ease-in-out font-Oswaldbold"
                    href="termandcondition"
                  >
                    {t("register.link2")}
                  </a>{" "}
                  &nbsp;{t("register.line3")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
