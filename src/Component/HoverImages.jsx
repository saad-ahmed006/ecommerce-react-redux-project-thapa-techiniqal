import React, { useState } from "react";
import Im1 from "../assets/Images/logo1.png";
import Im2 from "../assets/Images/logo2.png";
import Im3 from "../assets/Images/logo3.png";
import Im4 from "../assets/Images/logo4.png";
import Im5 from "../assets/Images/logo5.png";
export default function HoverImages() {
  //   const images = [Im1, Im2, Im3, Im4, Im5];
  const images = [
    { url: Im1 },
    { url: Im2 },
    { url: Im3 },
    { url: Im4 },
    { url: Im5 },
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className="flex md:flex-row justify-center items-center">
      <div className="space-y-3 ">
        {images.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              // alt={curElm.filename}
              className="w-[140px]"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      <div className="p-2">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
}
