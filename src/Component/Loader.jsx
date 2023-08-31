import React from "react";
import LoadingImaage from "../assets/Images/logo.png";
export default function Loader() {
  return (
    <div className="w-full bg-gray-200 flex flex-col justify-center items-center my-28">
      <img src={LoadingImaage} alt="loaderImg" className="w-32"></img>
      <p>Loading...</p>
    </div>
  );
}
