import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="flexBetween gap-8 sm:gap-4 border-b pb-10 sm:pb-4 mb-10 sm:px-2">
      <img
        src={image}
        alt=""
        className="bg-slate-100 h-36 sm:h-36 sm:w-28 rounded-lg"
      />
      <div className="sm:flex sm:flex-col sm:flex-start">
        <div className="">
          <h2 className="test-slate-800 font-[600] text-lg">{title}</h2>
          <div className="flexStart gap-4 text-slate-600 text-sm font-[500] py-3">
            <p className="border-r pr-4">Black</p>
            <p>2xl</p>
          </div>
          <p className="border rounded-full py-1 w-24 text-slate-500 font-[500] text-xs text-center mt-12 sm:mt-2">
            In Stock
          </p>
        </div>
        <div className=" py-3 px-4 sm:px-0 rounded-full">
          <button
            className="text-slate-500 font-[400] text-2xl border rounded-full px-3 py-0.5"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>{" "}
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
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
      <div className="flexCol gap-20">
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
};

export default CartItems;
