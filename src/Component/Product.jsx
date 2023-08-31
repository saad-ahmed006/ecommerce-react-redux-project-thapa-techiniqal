import React from "react";
import { useNavigate } from "react-router-dom";
export default function Product({ id, category, name, img, price }) {
  const navigate = useNavigate();
  return (
    <section
      className="bg-white  rounded-md shadow-md mx-2 my-2 px-2 py-2 w-[280px] h-[220px] cursor-pointer"
      onClick={() => navigate(`/singleproduct/${id}`)}
    >
      <div className="relative overflow-hidden ">
        <img src={img} alt="Feature" className=" rounded-md" />
        <div className="absolute top-1 right-2 bg-white py-1 px-3 rounded-full text-md uppercase text-[#6254F3]">
          {category}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 transform -translate-x-full transition-transform duration-300 opacity-0 hover:opacity-100 rounded-md"></div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <h3 className="text-black capitalize text-xs font-bold ">{name}</h3>
        <p className="text-[#6254F3] text-xs ">
          PKR : {(price / 100).toFixed(2)}
        </p>
      </div>
    </section>
  );
}
