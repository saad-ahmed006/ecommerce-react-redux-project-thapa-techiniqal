import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function StarReview({ stars, reviews }) {
  const ratingStar = [];
  for (let index = 0; index < 5; index++) {
    const number = index + 0.5;
    {
      ratingStar.push(
        stars > index + 1 ? (
          <FaStar />
        ) : stars > number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )
      );
    }
  }
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="text-yellow-400 flex flex-row ">{ratingStar}</p>
      <p className="p">({reviews} customer reviews)</p>
    </div>
  );
}
