import React from "react";

export default function Button({ children }) {
  return (
    <button className="text-white bg-[#6254F3] hover:shadow-md hover:scale-96 transition-all duration-200 ease-in-out rounded-sm px-5 py-2 text-sm uppercase cursor-pointer">
      {children}
    </button>
  );
}
