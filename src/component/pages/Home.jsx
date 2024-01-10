import React from "react";
import bgtop from "../../assets/img/home/bgtop.png";
import bgleft from "../../assets/img/home/bgleft.png";
import bgright from "../../assets/img/home/bgright.png";
const Home = () => {
  return (
    <>

      <div className="pt-24">
          <img
          loading="lazy"
            src={bgtop}
            alt="bgtop"
            className="-mt-4 mb-4 object-cover rounded shadow-xl h-[180px] lg:h-1/2 w-screen"
          />
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          <a href="join">
          <img
          loading="lazy"
            src={bgleft}
            alt="bgleft"
            className="w-screen -mt-4 object-cover rounded shadow-xl h-full cursor-pointer"
          />
          </a>
          <a href="kx">
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
