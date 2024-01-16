import React from "react";
import bgtop from "../../assets/img/home/bgtop.png";
import bgleft from "../../assets/img/home/bgleft.png";
import bgright from "../../assets/img/home/bgright.png";
import {useTranslation} from "react-i18next";
const Home = () => {
    const [t] = useTranslation("global")
  return (
    <>

      <div className="pt-24">
          <div className={`h-[250px] lg:h-[600px] block relative w-screen mb-3 pt-3`}>
              <img
                  loading="lazy"
                  src={bgtop}
                  alt="bgtop"
                  className="-mt-4 mb-4 -z-10  absolute rounded shadow-xl w-full h-full "
              />
              <div className={`flex items-center justify-center w-full h-full lg:mt-16 mt-6`}>
              <span className={`text-center  lg:w-1/2 w-full text-white font-OswaldLight antialiased leading-relaxed lg:text-lg text-xs`}>{t("body.home")}</span>
              </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <a href="join">
                  <img
                      loading="lazy"
                      src={bgleft}
                      alt="bgleft"
            className="w-screen -mt-4 object-cover rounded shadow-xl h-full cursor-pointer"
          />
          </a>
          <a href="/">
          <img
          loading="lazy"
            src={bgright}
            alt="bgright"
            className="w-screen -mt-4 object-cover rounded shadow-xl h-full cursor-pointer"
          />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
