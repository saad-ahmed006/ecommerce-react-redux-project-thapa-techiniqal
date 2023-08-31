import React, { useEffect, useState } from "react";
import HeroBannar from "../Component/HeroBannar";
import Service from "../Component/Service";
import Product from "../Component/Product";
import Trusted from "../Component/Trusted";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProductDataSuccess } from "../store/HomeSlice";
import Loader from "../Component/Loader";
const API = "https://api.pujakaitem.com/api/products";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const featureProduct = useSelector((state) => state.home.featureProduct);

  const fetchDataFromApi = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      dispatch(getFeaturedProductDataSuccess({ featureProd: data }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataFromApi(API);
  }, [API]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroBannar title={"Thapa Store"} />
      <div className="bg-[#F6F8FA] py-16 mt-12  space-y-5 md:space-y-0 md:space-x-14">
        <h1 className="text-3xl italic font-semibold text-center py-4">
          Featured Products.
        </h1>
        <div className=" flex flex-col md:flex-row justify-center items-center flex-wrap ">
          {loading ? (
            <Loader />
          ) : (
            <>
              {featureProduct?.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  category={item.category}
                  name={item.name}
                  img={item.image}
                  price={item.price}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Service />
      <Trusted />
    </>
  );
}
