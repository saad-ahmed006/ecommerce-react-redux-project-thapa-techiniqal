import React from 'react'
import  {RiDeleteBin6Line} from 'react-icons/ri'
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";

import Img from '../assets/Images/logo.png'
export default function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
    {/* IMAGE START */}
    <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {/* <Image
            src={p.thumbnail.data.attributes.url}
            alt={p.name}
            width={120}
            height={120}
        /> */}
        <img src={Img}></img>
    </div>
    {/* IMAGE END */}

    <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
            {/* PRODUCT TITLE */}
            <div className="text-lg md:text-2xl font-semibold text-[#6254F3] italic">
                {/* {p.name} */}Shoes
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                {/* {p.subtitle} */}Nike Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                {/* MRP : &#8377;{p.price} */}PKR : 2000
            </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
            {/* {p.subtitle} */}nike
        </div>

        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                <div className="flex items-center gap-1">
                    <div className="font-semibold">Size:</div>
                    <select
                        className="hover:text-black"
                        // onChange={(e) =>
                            // updateCartItem(e, "selectedSize")
                        // }
                    >
                        {/* {p.size.data.map((item, i) => {
                            return (
                                <option
                                    key={i}
                                    value={item.size}
                                    disabled={
                                        !item.enabled ? true : false
                                    }
                                    selected={
                                        data.selectedSize === item.size
                                    }
                                >
                                    {item.size}
                                </option>
                            );
                        })} */}
                    </select>
                </div>

                <div className="flex flex-row justify-between items-center w-[120px] my-6 ">
              <div className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer">
                <GrFormSubtract size={20} />
              </div>
              <div className="text-lg text-center px-4">5</div>
              <div className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer">
                <GrFormAdd size={20} />
              </div>
            </div>
            </div>
            <RiDeleteBin6Line
                // onClick={() =>
                //     dispatch(removeFromCart({ id: data.id }))
                // }
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            />
        </div>
    </div>
</div>
)
}