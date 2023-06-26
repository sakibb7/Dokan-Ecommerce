import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/productData";
import { ShopContext } from "../context/ShopContext";

import Navbar from "../layouts/global/Navbar";
import SpecialOffer from "../layouts/home/SpecialOffer";
import Footer from "../layouts/global/Footer";
import {
  productImage1,
  productImage2,
  productImage3,
  AiFillStar,
  IoBagHandle,
} from "../assets";

const ProductDetails = () => {
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const productData = products.filter((product) => product.title === title);

    setBodyData(productData[0]);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <div className="w-full flex justify-start items-top gap-12 py-10">
          <div className="w-1/2 grid grid-cols-2 gap-8">
            <img
              src={productImage1}
              alt=""
              className="col-span-2 rounded-[20px]"
            />
            <img src={productImage2} alt="" className="rounded-[20px]" />
            <img src={productImage3} alt="" className="rounded-[20px]" />
          </div>
          <div className="flexCol pt-10">
            <h1 className="text-3xl font-[600] text-slate-800">
              {bodyData.title}
            </h1>
            <div className="flexStart py-4">
              <p className="border-2 border-green-500 text-green-500 font-[600] px-3 rounded-lg text-lg">
                ${bodyData.price}
              </p>
              <p className="flexCenter border-l-2 pl-4 ml-4 py-1 font-[500]">
                <AiFillStar style={{ color: "#facc15" }} size={20} />
                <span className="pl-1"> {bodyData.rating}</span>
              </p>
              <p className="text-slate-700 px-4">
                (<u>{bodyData.reviews} reviews</u>)
              </p>
              <p className="text-slate-700 font-[500]">New in</p>
            </div>
            <div className="py-4">
              <p>
                Color: <span className="font-[500]">Black</span>
              </p>
            </div>
            <div className="py-4">
              <p>
                Size: <span className="font-[500]">XS</span>
              </p>
              <div className="flexStart gap-4 py-4">
                <button className="border rounded-lg text-lg font-[500] px-4 py-2">
                  XS
                </button>
                <button className="border rounded-lg text-lg font-[500] px-4 py-2">
                  S
                </button>
                <button className="border rounded-lg text-lg font-[500] px-4 py-2">
                  M
                </button>
                <button className="border rounded-lg text-lg font-[500] px-4 py-2">
                  L
                </button>
                <button className="border rounded-lg text-lg font-[500] px-4 py-2">
                  XL
                </button>
              </div>
            </div>

            <div className="flexBetween gap-4 border-b pb-8">
              <div className="bg-slate-50 py-3 px-4 rounded-full">
                <button
                  className="text-slate-500 font-[400] text-2xl border rounded-full px-3 py-0.5 cursor-pointer"
                  onClick={() => removeFromCart(bodyData.id)}
                >
                  -
                </button>{" "}
                <input
                  value={cartItems[bodyData.id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), bodyData.id)
                  }
                  className="text-center w-[40px] bg-slate-50 py-2"
                />
                <button
                  className="text-slate-500 font-[400] text-2xl border rounded-full px-2.5 py-0.5  cursor-pointer"
                  onClick={() => addToCart(bodyData.id)}
                >
                  +
                </button>
              </div>
              <div className="bg-slate-800 text-slate-50 px-32 py-4 flexCenter gap-2 font-[500] text-md rounded-full">
                <IoBagHandle />{" "}
                <Link to="/cart">
                  <button>Add to cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mb-20 pb-20 w-[70%]">
          <h2 className="text-2xl text-slate-900 font-[600] py-10">
            Product Details
          </h2>
          <div className="flexCol gap-4 text-slate-700">
            <p>
              The patented eighteen-inch hardwood Arrowhead deck --- finely
              mortised in, makes this the strongest and most rigid canoe ever
              built. You cannot buy a canoe that will afford greater
              satisfaction.
            </p>
            <p>
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
            <ul className="flexCol gap-4">
              <li>Regular fit, mid-weight t-shirt</li>
              <li>Natural color, 100% premium combed organic cotton</li>
              <li>
                Quality cotton grown without the use of herbicides or pesticides
                - GOTS certified
              </li>
              <li>Soft touch water based printed in the USA</li>
            </ul>
          </div>
        </div>
      </div>
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default ProductDetails;
