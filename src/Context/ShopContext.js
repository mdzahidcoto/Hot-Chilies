import React, { useState, useContext, createContext } from "react";
import { lunch } from "../Resources/Image";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [orderAmount, setOrderAmount] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState(
    JSON.parse(localStorage.getItem("deliveryAddress"))
  );
  const [food, setFood] = useState(lunch);
  const [singleFood, setSingleFood] = useState(" ");
// Set the local storage
  localStorage.setItem("deliveryAddress", JSON.stringify(deliveryAddress));
  console.log(deliveryAddress)

  return (
    <ShopContext.Provider
      value={{
        orderAmount,
        setOrderAmount,
        food,
        setFood,
        singleFood,
        setSingleFood,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const ShopDataContext = () => {
  return useContext(ShopContext);
};
