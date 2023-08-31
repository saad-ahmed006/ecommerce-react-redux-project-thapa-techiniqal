import React, { useEffect, useState } from "react";
export default function HoverImages({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <div className="space-y-3 ">
        {images?.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="w-[140px]"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      <div className=" p-2">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="w-[300px] rounded-md"
        />
      </div>
    </div>
  );
}
