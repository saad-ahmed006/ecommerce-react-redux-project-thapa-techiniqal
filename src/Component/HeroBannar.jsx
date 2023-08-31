import React from "react";
import Button from "./Button";
import HeroImage from "../assets/Images/hero.jpg";
import { Link } from "react-router-dom";

export default function HeroSection({ title }) {
  return (
    <section className="bg-white mt-[5px] pt-8 flex flex-row items-center">
      <div className="flex flex-col md:flex-row justify-center items-center p-5">
        <div className="md:w-[500px] text-center md:text-left md:pr-12">
          <h5 className="text-primary text-md text-[#6254F3] font-bold mb-3">
            Welcome to
          </h5>
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p className="text-md mb-3">
            "Welcome to Thapa Store, your ultimate shopping destination.
            Discover a wide range of high-quality products and exceptional
            deals. Experience shopping redefined at Thapa Store!"
          </p>
          <Link to={"/products"}>
            <Button>Shop Now</Button>
          </Link>
        </div>
        <img
          src={HeroImage}
          alt="Hero Image"
          className="mt-4 w-[500px] md:mt-0 md:w-1/3 h-auto md:h-full rounded-md md:rounded-ee-full		"
        />
      </div>
    </section>
  );
}
