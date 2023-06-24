import Navabar from "../layouts/global/Navbar";
import Footer from "../layouts/global/Footer";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { products } from "../data/productData";

const Checkout = () => {
  const {
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const shippingCharge = 5;
  const taxEstimate = totalAmount * 0.2;
  const orderTotal = totalAmount + taxEstimate + shippingCharge;

  return (
    <div>
      <Navabar />
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="border-b pb-16">
          <h1 className="font-[600] text-4xl text-slate-800">Checkout</h1>
          <p className="text-slate-900 font-[500] pt-4">
            Homepage / Shopping Cart / Checkout
          </p>
        </div>
        <div className="w-full flex justify-start items-start">
          <div className="w-[65%] pr-20">
            <div className="border rounded-lg mt-10 flex justify-between items-center p-4">
              <div>
                <p className="text-slate-800">CONTACT INFO</p>
                <p className="font-[500] pt-2">Ecrico Smith +855-666-3453</p>
              </div>
              <div>
                <button className="border py-2 px-3 rounded-lg bg-slate-50 font-[500] text-slate-600 text-sm">
                  Change
                </button>
              </div>
            </div>
            <div className="border-t border-r border-l rounded-t-lg my-10 flex justify-between items-center p-4">
              <div>
                <p className="text-slate-800">SHIPPING INFO</p>
                <p className="font-[500] pt-2">Ecrico Smith +855-666-3453</p>
              </div>
              <div>
                <button className="border py-2 px-3 rounded-lg bg-slate-50 font-[500] text-slate-600 text-sm">
                  Change
                </button>
              </div>
            </div>
            <div className="w-full mt-[-40px]">
              <form action="" className="flex gap-8 flex-col border p-10">
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      First name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="Cole"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="Enrico"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-[70%]">
                    <label htmlFor="fname" className=" font-[500]">
                      Address
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="123, Dream Avenue, USA"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-[30%]">
                    <label htmlFor="fname" className=" font-[500]">
                      App, Suite<sup> *</sup>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="Enrico"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      City
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="Norris"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      Country
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="United States"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="Texas"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fname" className=" font-[500]">
                      Postal code
                    </label>
                    <input
                      type="text"
                      name="fname"
                      value="2500"
                      className="border text-slate-600 py-2 px-4 mt-2 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <button className="bg-slate-800 font-[500] text-white rounded-full py-3 w-1/3">
                    Save & Continue
                  </button>
                  <button className="bg-slate-50 py-4 px-8 ml-8 rounded-full hover:bg-slate-100">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[35%] py-10">
            <p className="text-slate-800 font-[600] text-xl">Order summary</p>
            <div className="flex flex-col justify-between items-top gap-8 border-b py-10">
              {products.map(({ id, title, image, price }) => {
                if (cartItems[id] > 0) {
                  return (
                    <div key={id} className="flex justify-between">
                      <div className="flex justify-start items-top gap-8">
                        <img
                          src={image}
                          alt=""
                          className="bg-slate-100 h-32 w-28 rounded-lg"
                        />
                        <div className="flex flex-col justify-start">
                          <div>
                            <h2 className="test-slate-800 font-[600] text-md">
                              {title}
                            </h2>
                            <div className="flex justify-start items-center gap-4 text-slate-600 text-sm font-[500] py-3">
                              <p className="border-r pr-4">Black</p>
                              <p>2xl</p>
                            </div>
                          </div>
                          <div className=" py-3 rounded-full">
                            <button
                              className="text-slate-500 font-[400] text-2xl border rounded-full px-3 py-0.5"
                              onClick={() => removeFromCart(id)}
                            >
                              -
                            </button>{" "}
                            <input
                              value={cartItems[id]}
                              onChange={(e) =>
                                updateCartItemCount(Number(e.target.value), id)
                              }
                              className="text-center w-[40px] py-2"
                            />
                            <button
                              className="text-slate-500 font-[400] text-2xl border rounded-full px-2.5 py-0.5"
                              onClick={() => addToCart(id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-center">
                        <p className="border-2 border-green-500 text-green-500 font-[500] px-3 rounded-lg">
                          ${price}
                        </p>
                        <button
                          className="text-blue-600 font-[500] text-sm"
                          onClick={() => removeFromCart(id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="py-10">
              <p className="font-[500] text-sm text-slate-800">Discount code</p>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  className="border rounded-full py-1.5 my-4"
                />
                <button className="bg-slate-200 text-slate-700 font-[500] py-2 px-4 rounded-full">
                  Apply
                </button>
              </div>
              <div className=" flex flex-col gap-4 py-4">
                <div className="text-slate-500 text-sm flex justify-between items-center border-b pb-4">
                  <p>subtotal</p>
                  <p className="text-slate-800 font-[600]">${totalAmount}</p>
                </div>
                <div className="text-slate-500 text-sm flex justify-between items-center border-b pb-4">
                  <p>Shipping estimate</p>
                  <p className="text-slate-800 font-[600]">${shippingCharge}</p>
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
                <button className="bg-slate-800 text-lg font-[500] text-white rounded-full py-3">
                  Confirm order
                </button>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
