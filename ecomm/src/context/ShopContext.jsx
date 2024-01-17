import { createContext } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null); //first we create conteext with createContext

const ShopContextProvider = (props) => {
  //secondly we create a custom method for providing data to all components
  const contextValue = { all_product }; // thirdly we create a var that has all products data
  return (
    // fourthly we return that data as provider with value conmtaining the contextValue and jsx contianing the children that it will recieve
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // finnally shopcontextprovider exported
