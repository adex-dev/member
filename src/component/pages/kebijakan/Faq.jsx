import React from "react";
import Faqs from "../../class/Faqs";
const Faq = () => {
  return (
    <div className="pt-24 h-screen w-screen">
      <div className="bg-slate-600 w-screen -mt-2 mb-6 h-16 flex items-center justify-center">
        <h1 className="lg:text-4xl text-2xl  text-white font-inter">
          <b>Faq</b>
        </h1>
      </div>
      <div className="container mx-auto px-4">
          <Faqs />
      </div>
    </div>
  );
};

export default Faq;
