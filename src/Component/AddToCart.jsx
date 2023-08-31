import React, { useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddCart } from "../store/HomeSlice";

export default function AddToCart({ product }) {
  const [color, setColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const Decrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  };
  const Increment = () => {
    quantity < product?.stock
      ? setQuantity(quantity + 1)
      : setQuantity(quantity);
  };
  const payload = {
    product: product,
    quantity: quantity,
    color: color,
  };
  const newPayload = { ...payload };
  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <p>Colors :</p>
        <>
          {product?.colors?.map((c) => {
            return (
              <div
                style={{ backgroundColor: c }}
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
            );
          })}
        </>
      </div>
      <div className="flex flex-row justify-between items-center w-[120px] my-6 ">
        <div
          className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer"
          onClick={() => Decrement()}
        >
          <GrFormSubtract size={20} />
        </div>
        <div className="text-lg text-center px-4">{quantity}</div>
        <div
          className="border w-full py-1 flex justify-center items-center rounded-sm cursor-pointer"
          onClick={() => Increment()}
        >
          <GrFormAdd size={20} />
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(AddCart(newPayload));
        }}
      >
        <Button children={"Add To Cart"}></Button>
      </div>
    </>
  );
}
