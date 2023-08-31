import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../store/HomeSlice";
export default function CartItem({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-black   ">
      <>
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
          <img
            className="rounded-sm"
            src={data?.image[0]?.url}
            alt={data?.image[0]?.filename}
          ></img>
        </div>
        {/* IMAGE END */}

        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            {/* PRODUCT TITLE */}
            <div className="text-lg md:text-2xl font-semibold text-[#6254F3] italic capitalize">
              {data?.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden capitalize">
              {data?.company}
            </div>

            {/* PRODUCT PRICE */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              PKR : {(data?.price / 100).toFixed(0)}.00
            </div>
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-md font-medium text-black/[0.5] hidden md:block capitalize">
            {data?.company}
          </div>
          <div className="text-lg flex flex-row items-center ">
            Choosed Color :{" "}
            <div
              className="w-4 h-4 rounded-full mx-3 mt-1"
              style={{ backgroundColor: data?.selected_color }}
            ></div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex flex-row justify-between items-center w-[120px] my-6 ">
                <div className="text-lg text-center  ">
                  Quantity : {data?.quantity}
                </div>
              </div>
            </div>
            <RiDeleteBin6Line
              onClick={() => dispatch(RemoveFromCart({ id: data?.id }))}
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            />
          </div>
        </div>
      </>
    </div>
  );
}
