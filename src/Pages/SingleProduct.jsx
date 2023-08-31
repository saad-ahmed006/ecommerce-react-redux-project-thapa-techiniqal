import React, { useEffect, useState } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Loader from "../Component/Loader";
import HoverImages from "../Component/HoverImages";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDataSuccess } from "../store/HomeSlice";

import axios from "axios";
import AddToCart from "../Component/AddToCart";
import StarReview from "../Component/StarReview";
const API = "https://api.pujakaitem.com/api/products?id=";
export default function SingleProduct() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const featureSingleProduct = useSelector(
    (state) => state.home.featureSingleProduct
  );

  const fetchDataFromApi = async (url) => {
    try {
      const res = await axios.get(`${url}${id}`);
      const data = await res.data;
      dispatch(getSingleProductDataSuccess({ singleProd: data }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataFromApi(API);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {featureSingleProduct?.map((item) => {
            return (
              <>
                <div
                  className="w-full py-5 bg-gray-100 text-xl fontb italic px-6"
                  key={item?.id}
                >
                  <Link to={"/"}>
                    <span className="text-[#6254F3] capitalize">Home</span>
                  </Link>
                  /{item?.category}
                </div>
                <section className="py-1">
                  <div className="flex flex-col md:flex-row justify-center items-center ">
                    <div className="">
                      <HoverImages images={item?.image} />
                    </div>
                    <div className="w-full md:w-[500px] px-3 md:px-6 py-12 bg-white">
                      <h2 className="font-bold mb-3 capitalize text-ellipsis">
                        {item?.name}
                      </h2>
                      <StarReview stars={item?.stars} reviews={item?.reviews} />

                      <p className="text-xs my-2v ">
                        MRP :{" "}
                        <span className="">{item?.price / 100 + 2500}</span>
                      </p>
                      <p className="text-[#6254F3] text-xs font-bold my-2 italic">
                        Deal of the Day: {(item?.price / 100).toFixed(2)}
                      </p>
                      <p className="my-1 text-xs">{item?.description}</p>
                      <div className="flex justify-between py-6">
                        <div className="flex flex-col items-center">
                          <TbTruckDelivery className="text-3xl bg-gray-300 rounded-full p-1" />
                          <p className="text-sm">Free Delivery</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <TbReplace className="text-3xl bg-gray-300 rounded-full p-1" />
                          <p className="text-sm">30 Days Replacement</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <TbTruckDelivery className="text-3xl bg-gray-300 rounded-full p-1" />
                          <p className="text-sm">Thapa Delivered</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <MdSecurity className="text-3xl bg-gray-300 rounded-full p-1" />
                          <p className="text-sm">2 Year Warranty</p>
                        </div>
                      </div>
                      <div className="border-t"></div>
                      <p className="mb-2">
                        Available:{" "}
                        <span className=" text-[#6254F3] italic">
                          {item?.stock > 0 ? "InStock" : "Not Available"}
                        </span>
                      </p>
                      <p className="mb-2">
                        ID: <span className="capitalize">{item?.id}</span>
                      </p>
                      <p className="mb-2">
                        Brand:{" "}
                        <span className="capitalize">{item?.company}</span>
                      </p>
                      <hr className="w-90 border-1.5 border-black my-2" />
                      {item?.stock > 0 ? <AddToCart product={item} /> : ""}
                    </div>
                  </div>
                </section>
              </>
            );
          })}
        </>
      )}
    </>
  );
}
