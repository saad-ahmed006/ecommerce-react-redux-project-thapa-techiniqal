import React, { useEffect, useState } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Button from "../Component/Button";
import { FaCheck } from "react-icons/fa";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import HoverImages from "../Component/HoverImages";
import { Link } from "react-router-dom";
// const API = "https://api.pujakaitem.com/api/products";
export default function SingleProduct() {
  const colors = ["bg-red-700", "bg-green-700", "bg-blue-700"];
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <div className="w-full py-5 bg-gray-100 text-xl fontb italic px-6">
       <Link to={'/'}><span className="text-[#6254F3]">Home</span></Link>/Category
      </div>
      <section className="py-1">
        {/* <PageNavigation title={name} /> */}
        <div className="flex justify-center items-center">
          <div className="w-2/5">
            <HoverImages/>
          </div>
          <div className="w-[500px] px-6 py-12 bg-white">
            <h2 className="font-bold mb-3">name</h2>
            {/* <Star stars={stars} reviews={reviews} /> */}
            <p>stars reviews</p>

            <p className="text-xs my-2">
              {/* MRP:<del><FormatCurruncy price={price + 250000} /></del> */}
              MRP  :  <span className="text-ellipsis">4000</span>
            </p>
            <p className="text-[#6254F3] text-xs font-bold my-2 italic">
              {/* Deal of the Day:<FormatCurruncy price={price} /> */}
              Deal of the Day:5555
            </p>
            <p className="my-1 text-xs">description</p>
            <div className="flex justify-between py-6">
              <div className="flex flex-col items-center">
                <TbTruckDelivery className="text-3xl bg-gray-300 rounded-full p-1" />
                <p className="text-sm">Free Delivery</p>
              </div>
              <div className="flex flex-col items-center">
                <TbReplace className="text-3xl bg-gray-300 rounded-full p-1" />
                <p className="text-sm">30 Days Replacement</p>
              </div>
              <div className="flex flex-col items-center">
                <TbTruckDelivery className="text-3xl bg-gray-300 rounded-full p-1" />
                <p className="text-sm">Thapa Delivered</p>
              </div>
              <div className="flex flex-col items-center">
                <MdSecurity className="text-3xl bg-gray-300 rounded-full p-1" />
                <p className="text-sm">2 Year Warranty</p>
              </div>
            </div>
            <div className="border-t"></div>
            {/* <p className="mb-2">Available:<span>{stock > 0 ? "InStock" : "Not Available"}</span></p> */}
            <p className="mb-2">
              Available:<span>5</span>
            </p>
            <p className="mb-2">
              ID:<span>id</span>
            </p>
            <p className="mb-2">
              Brand:<span>campany</span>
            </p>
            <hr className="w-90 border-1.5 border-black my-2" />
            <div className="flex flex-row items-center space-x-2">
              <p>Colors :</p>
              {colors.map((c) => {
                return (
                  <>
                    <div
                      className={
                        color === c
                          ? `w-4 h-4 ${c} rounded-full flex justify-center items-center cursor-pointer`
                          : `w-4 h-4 ${c} opacity-60 rounded-full flex justify-center items-center cursor-pointer`
                      }
                      onClick={() => setColor(c)}
                    >
                      {" "}
                      {color === c ? <FaCheck size={12} color="white" /> : null}
                    </div>
                  </>
                );
              })}

            </div>
            {/* {stock > 0 ? <AddToCard product={singleProduct}/> : ""} */}
            <div className="flex flex-row justify-between items-center w-[120px] my-6 ">
              <div className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer">
                <GrFormSubtract size={20} />
              </div>
              <div className="text-lg text-center px-4">5</div>
              <div className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer">
                <GrFormAdd size={20} />
              </div>
            </div>
            <Button children={"Add To Cart"}></Button>
          </div>
        </div>
      </section>
    </>
  );
}
