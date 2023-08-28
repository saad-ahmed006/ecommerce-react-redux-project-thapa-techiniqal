import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Service() {
  return (
    <section className=" py-16">
      <div className="md:w-full md:h-[210px] flex flex-col md:flex-row justify-center items-center px-4 md:px-0 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full h-[210px] md:w-[280px] md:h-[210px]  flex flex-col items-center justify-center  bg-[#F6F8FA]">
          <TbTruckDelivery className="text-[#6254F3] text-4xl mb-3" />
          <h3 className="text-sm font-semibold">
            Super Fast and Free Delivery
          </h3>
        </div>
        <div className="w-full h-[210px] md:w-[280px] md:h-[210px]   flex flex-col md:flex-col justify-between space-y-4 md:space-y-4 ">
          <div className="flex-1 bg-bg rounded-md  flex  flex-col md:flex-row items-center justify-center bg-[#F6F8FA]">
            <MdSecurity className="text-[#6254F3] text-4xl " />
            <h3 className="text-sm font-semibold">Non Contacting Shipping</h3>
          </div>
          <div className="flex-1 bg-bg rounded-md  flex  flex-col md:flex-row  items-center justify-center  bg-[#F6F8FA]">
            <GiReceiveMoney className="text-[#6254F3] text-4xl " />
            <h3 className="text-sm font-semibold">Money-Bank Guaranteed</h3>
          </div>
        </div>
        <div className="w-full h-[210px] md:w-[280px] md:h-[210px] flex flex-col items-center justify-center bg-[#F6F8FA]">
          <RiSecurePaymentLine className="text-[#6254F3] text-4xl mb-3" />
          <h3 className="text-sm font-semibold">Super Secure Payment System</h3>
        </div>
      </div>
    </section>
  );
}
