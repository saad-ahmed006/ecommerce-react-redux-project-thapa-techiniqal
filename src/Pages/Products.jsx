import React, { useState, useEffect } from "react";
import Product from "../Component/Product";
import Loader from "../Component/Loader";
import axios from "axios";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDataSuccess } from "../store/HomeSlice";
const API = "https://api.pujakaitem.com/api/products?id=";

const categoryText = [
  { id: 1, name: "Mobile", matchCategory: "mobile" },
  { id: 2, name: "Laptop", matchCategory: "laptop" },
  { id: 3, name: "Computer", matchCategory: "computer" },
  { id: 4, name: "Accessories", matchCategory: "accessories" },
  { id: 5, name: "Watch", matchCategory: "watch" },
];
const DropDownText = [
  { id: 1, name: "Apple ", matchCompany: "apple" },
  { id: 2, name: "Samsung", matchCompany: "samsung" },
  { id: 3, name: "Dell", matchCompany: "dell" },
  { id: 4, name: "nokia", matchCompany: "nokia" },
  { id: 5, name: "Asus", matchCompany: "asus" },
  { id: 6, name: "Lenova", matchCompany: "lenova" },
  { id: 7, name: "Rolex", matchCompany: "rolex" },
];

export default function Products() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.home.Products);
  const [filter, setFilter] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [option, setOption] = useState("Select Company");

  const fetchDataFromApi = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      dispatch(getProductsDataSuccess({ Prod: data }));
      setLoading(false);
      setFilter(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataFromApi(API);
  }, [API]);

  // seach Filter
  const SearchFunc = () => {
    const updateItem = Products?.filter((filt) =>
      filt.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setOption("Select Company");
    setFilter(updateItem);
  };

  useEffect(() => {
    SearchFunc();
  }, [searchInput, setSearchInput]);

  // Fiter category
  const FilterItem = (category) => {
    const updateItem = Products?.filter((filt) => filt.category === category);
    setOption("Select Company");
    setFilter(updateItem);
    setActiveCategory(category);
  };
  //  company category
  const FilterCampanyProduct = (campany) => {
    const updateItem = Products?.filter((filt) => filt.company === campany);
    setFilter(updateItem);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // main
    <div className=" flex flex-col md:flex-row justify-center items-center mb-24 ">
      <div className="w-full md:w-[250px] md:h-[694px] px-5 rounded-sm py-3 md:py-0">
        {/* search */}
        <div className="py-1 md:py-4 mb-1">
          <input
            type="search"
            placeholder="Search Item"
            className="border border-gray-200 outline-none rounded-sm  px-2  w-full md:w-[120px] lg:w-[150px]"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {/* category */}
        <div className=" my-2 md:my-6">
          <h5 className="font-bold italic">Category</h5>
          <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6">
            <p
              className={`italic cursor-pointer ${
                activeCategory === "All" ? "underline" : ""
              }  `}
              onClick={() => {
                setFilter(Products);
                setActiveCategory("All");
                setOption("Select Company");
              }}
            >
              All
            </p>
            {categoryText.map((text) => {
              return (
                <p
                  key={text.id}
                  className={`italic cursor-pointer  ${
                    activeCategory === text.matchCategory ? "underline" : ""
                  } `}
                  onClick={() => FilterItem(text.matchCategory)}
                >
                  {text.name}
                </p>
              );
            })}
          </div>
        </div>
        {/* drop Down */}
        <div className=" md:w-[120px] lg:w-[150px] bg-gray-100 border-b border-black rounded-sm px-2 py-2 flex flex-row justify-between items-center">
          <p className="text-sm">{option}</p>
          {!openDropDown ? (
            <BiSolidDownArrow
              size={14}
              className="text-black cursor-pointer"
              onClick={() => {
                setOpenDropDown(true);
              }}
            />
          ) : (
            <BiSolidUpArrow
              size={14}
              className="text-black cursor-pointer"
              onClick={() => {
                setOpenDropDown(false);
              }}
            />
          )}
        </div>
        {openDropDown ? (
          <div className="md:w-[120px] lg:w-[150px] space-y-2 py-2 px-2 bg-gray-100">
            {DropDownText?.map((campan) => {
              return (
                <p
                  className="border-b border-black cursor-pointer"
                  onClick={() => {
                    setOpenDropDown(false);
                    FilterCampanyProduct(campan.matchCompany);
                    setOption(campan.name);
                  }}
                >
                  {campan.name}
                </p>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* right side products */}
      <div className="md:w-[900px]  ">
        <div className="bg-gray-100  py-4 mb-1 border border-black border-t-0 border-l-0 border-r-0 rounded-sm shadow-sm">
          <p className="text-center italic font-semibold ">{`Total ${Products?.length} products`}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center  py-4 h-[630px] overflow-y-scroll">
          {filter.length ? (
            <>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {filter?.map((item) => (
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
            </>
          ) : (
            <div className=" flex justify-center items-center italic font-semibold">
              No Product Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
