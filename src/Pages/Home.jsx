import React from "react";
import bannerImage from "../../public/banner-image.jpg";
import PrimaryBtn from "../Components/PrimaryBtn";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="container mx-auto pt-20 text-gray-600 body-font h-[85vh] flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-5">
          <h1>Services - social Welfare - Microfinance</h1>
          <h1 className="text-4xl font-extrabold text-black font-mono">
            Microfinance (Apna Karobaar)
          </h1>
          <p className=" text-black">
            Your loan can be the bridge to someone's brighter future. It offers
            hope where it's needed most, creating opportunities. A small act of
            kindness can spark life-changing growth. Together, we can transform
            lives, one loan at a time.
          </p>
          <div className="flex gap-2 items-center">
            <PrimaryBtn
            routLink={'loan-form'}
              BtnText={"Get Loan"}
              additinalClasses={
                " duration-300 hover:scale-105 hover:bg-green-700 bg-customGreen"
              }
            />
            <PrimaryBtn
              BtnText={"Get Loan"}
              additinalClasses={
                "duration-300 hover:scale-105 hover:bg-green-700 bg-[#0368B4]"
              }
            />
          </div>
        </div>
        <div className="w-[50%] mt-10 -z-40">
          <img className="bg-cover p-10" src={bannerImage} alt="" />
        </div>
      </section>

    </div>
  );
};

export default Home;
