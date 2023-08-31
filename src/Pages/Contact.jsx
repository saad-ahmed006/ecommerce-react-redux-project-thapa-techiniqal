import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Have questions, suggestions, or feedback? Reach out to us using
              the form below, and we'll get back to you as soon as possible.
            </p>
            <form className="mt-6">03214323571</form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="text-sm md:text-base text-gray-600">
              Swing by our physical location to experience our sneakers up
              close. Our team is excited to welcome you and assist with any
              queries you may have.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Nikee Shoes Store</h3>
              <p className="text-gray-600">1234 Sneaker Street</p>
              <p className="text-gray-600">Cityville, Sneakerville</p>
            </div>
          </div>
        </div>
        <Link
          to={"/"}
          className="flex justify-center items-center mx-auto  mt-12 w-full sm:w-[300px] py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75 "
        >
          Enjoy Shopping
        </Link>
      </div>
    </div>
  );
}
