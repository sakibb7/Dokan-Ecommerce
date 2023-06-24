import Footer from "../layouts/global/Footer";
import Navabar from "../layouts/global/Navbar";
import SpecialOffer from "../layouts/home/SpecialOffer";
import { useContext } from "react";
import { products } from "../data/productData";
import { ShopContext } from "../context/ShopContext";
import CartItems from "../components/home/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const shippingCharge = 5;
  const taxEstimate = totalAmount * 0.2;
  const orderTotal = totalAmount + taxEstimate + shippingCharge;

  return (
    <div>
      <Navabar />
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="border-b pb-16">
          <h1 className="font-[600] text-4xl text-slate-800">Shopping Cart</h1>
          <p className="text-slate-900 font-[500] pt-4">
            Homepage / Shopping Cart
          </p>
        </div>
        <div className="flex justify-start w-full items-top py-10 ">
          <div className="w-2/3  border-r pr-10">
            {products.map((product) => {
              if (cartItems[product.id] > 0) {
                return <CartItems data={product} key={products.id} />;
              }
            })}
          </div>
          {totalAmount > 0 ? (
            <div className="w-1/3 pl-12 flex flex-col gap-4 ">
              <h2 className="text-lg font-[600] pb-2">Order Summary</h2>
              <div className="text-slate-500 text-sm flex justify-between items-center border-b pb-4">
                <p>subtotal</p>
                <p className="text-slate-800 font-[600]">${totalAmount}</p>
              </div>
              <div className="text-slate-500 text-sm flex justify-between items-center border-b pb-4">
                <p>Shipping estimate</p>
                <p className="text-slate-800 font-[600]">
                  ${shippingCharge}.00
                </p>
              </div>
              <div className="text-slate-500 text-sm flex justify-between items-center border-b pb-4">
                <p>Tax estimate</p>
                <p className="text-slate-800 font-[600]">
                  ${taxEstimate.toFixed(2)}
                </p>
              </div>
              <div className="text-slate-500 text-sm flex justify-between items-center pb-4">
                <p className="text-base text-slate-800 font-[600]">
                  Order total
                </p>
                <p className="text-slate-800 font-[600] text-base">
                  ${orderTotal}
                </p>
              </div>
              <Link to="/checkout">
                <button className="bg-slate-800 text-lg font-[500] text-white rounded-full py-3 w-full">
                  Checkout
                </button>
              </Link>
              <p className="text-slate-500 text-sm text-center font-[400]">
                Learn more{" "}
                <span className="text-slate-800 font-[600]">
                  <u>Taxes</u>
                </span>{" "}
                and{" "}
                <span className="text-slate-800 font-[600]">
                  <u>Shipping</u>
                </span>{" "}
                information
              </p>
            </div>
          ) : (
            <h1 className="text-2xl text-slate-800 font-[500] text-center">
              Your cart is empty
            </h1>
          )}
        </div>
      </div>
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default Cart;
