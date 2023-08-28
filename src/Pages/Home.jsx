import React from "react";
import HeroBannar from "../Component/HeroBannar";
import Service from "../Component/Service";
import Product from "../Component/Product";
import Trusted from "../Component/Trusted";
import Footer from "../Component/Footer";
export default function Home() {
  return (
    <>
      <HeroBannar title={"Thapa Store"} />
      <div className="bg-[#F6F8FA] flex flex-col md:flex-row justify-center items-center py-4 mt-12 md:h-[300px] space-y-5 md:space-y-0 md:space-x-14">
        <Product />
        <Product />
        <Product />
      </div>
      <Service />
      <Trusted />
      <Footer />
    </>
  );
}
