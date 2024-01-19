import { createContext } from "react";
import all_product from "../components/Assets/all_product";
import { useState } from "react";

export const ShopContext = createContext(null); //first we create conteext with createContext

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  //secondly we create a custom method for providing data to all components

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price*cartItems[item];
      }
    }
    return totalAmount;
  };

const getTotalCartItems = () =>{
  let totalItem = 0
  for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem +=cartItems[item]
    }
  }
  return totalItem
}

  const contextValue = {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems
  }; // thirdly we create a var that has all products data

  return (
    // fourthly we return that data as provider with value conmtaining the contextValue and jsx contianing the children that it will recieve
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // finnally shopcontextprovider exported
