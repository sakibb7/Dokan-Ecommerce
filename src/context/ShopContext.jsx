import { createContext, useState } from "react";
//Import demo products
import { products } from "../data/productData";

export const ShopContext = createContext(null);

/**
 * Title: This will create a default cart
 *
 * -> It loops through products and returns an array of object
 * * Example : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 }
 *
 */
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  /**
 * Title: This function calculates the total amounts of items in a shopping cart
 * * If I select any products this function will calculate total amount
 * 
 * -> First it gets every products (item) that is matched with the id(cartItems).
 * -> Then takes the price(itemPrice.price) and multiplies with the total item
 * 

*/
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemPrice.price;
        console.log(itemPrice);
      }
    }
    return totalAmount;
  };

  /**
   * Title: This function calculates the total number of items in a shopping cart
   *
   */

  const getTotalCartItem = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }

    return totalAmount;
  };

  /**
   * title: This function sets the cart item everytime I clicked plus button
   * -> It takes the previous item and creates a new array
   * * const initialCartItems = {item1: 2, item2: 3,item3: 1};
   * * Calling the addToCart function -> addToCart('item2');
   * * Updated cart Items will look like this one: {item1: 2, item2: 4,item3: 1} It adds item2.
   */

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItem,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
