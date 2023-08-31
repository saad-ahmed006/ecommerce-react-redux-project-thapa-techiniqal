import React from "react";
import Button from "./Button";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <section className=" bg-[#07132E] text-white  relative px-4 mt-6">
      <div className="">
        <div className="  bg-red-200 flex justify-center items-center ">
          <div className="absolute bg-gray-200  w-[250px] sm:w-[400px] md:w-[600px] py-6 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center top-[-50px]">
            <div className="md:mb-0 mb-4 text-center md:text-left">
              <p className="text-sm text-black">Ready to get Started?</p>
              <p className="text-sm text-black">Talk to us Today?</p>
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-16 flex md:flex-row md:justify-center space-x-4 flex-wrap mx-auto">
          <div className="Content md:pr-10">
            <h2 className="text-lg font-semibold mb-2">Thapa Techiniqal</h2>
            <p className="text-xs">
              Search for the keywords to learn more about each warning.
            </p>
          </div>
          <div className="Content md:pr-10 mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">
              Subscribe to get important Updates
            </h2>
            <input type="email" className="px-4 py-2 w-full rounded-md mb-2" />
            <Button>Subscribe</Button>
          </div>
          <div className="Content md:pr-10 mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex">
              <AiFillYoutube className="ContentIcon mr-2" />
              <BsFacebook className="ContentIcon mr-2" />
              <AiFillInstagram className="ContentIcon" />
            </div>
          </div>
          <div className="Content mt-6 md:mt-0">
            <h2 className="text-lg font-semibold mb-2">Call Us</h2>
            <p>22233344455</p>
          </div>
        </div>
      </div>
      <p className="CopyRight text-center mt-10">
        @2023 ThapaStore. CopyRight Right Reserved
      </p>
    </section>
  );
}
