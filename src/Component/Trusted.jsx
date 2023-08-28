import React from "react";
import Logo1 from "../assets/Images/logo1.png";
import Logo2 from "../assets/Images/logo2.png";
import Logo3 from "../assets/Images/logo3.png";
import Logo4 from "../assets/Images/logo4.png";
import Logo5 from "../assets/Images/logo5.png";
export default function Trusted() {
  return (
    <section className="bg-bg text-center py-20">
      <div className="container mx-auto">
        <h4 className="text-2xl font-bold mb-8">Trusted By 1000+ Companies</h4>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-[150px] md:w-[190px] mb-4 md:mb-0 px-4">
            <img
              src={Logo1}
              alt="Trusted Logo"
              className="w-1/2 md:w-full mx-auto"
            />
          </div>
          <div className="w-[150px] md:w-[190px] mb-4 md:mb-0 px-4">
            <img
              src={Logo2}
              alt="Trusted Logo"
              className="w-1/2 md:w-full mx-auto"
            />
          </div>
          <div className="w-[150px] md:w-[190px] mb-4 md:mb-0 px-4">
            <img
              src={Logo3}
              alt="Trusted Logo"
              className="w-1/2 md:w-full mx-auto"
            />
          </div>
          <div className="w-[150px] md:w-[190px] mb-4 md:mb-0 px-4">
            <img
              src={Logo4}
              alt="Trusted Logo"
              className="w-1/2 md:w-full mx-auto"
            />
          </div>
          <div className="w-[150px] md:w-[190px] mb-4 md:mb-0 px-4">
            <img
              src={Logo5}
              alt="Trusted Logo"
              className="w-1/2 md:w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
