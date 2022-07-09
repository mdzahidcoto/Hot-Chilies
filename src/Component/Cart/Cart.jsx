import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopDataContext } from "../../Context/ShopContext";

const Cart = ({user}) => {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [bName, setBName] = useState("");
  const [road, setRoad] = useState("");
  const [flat, setFlat] = useState("");
  const [instruction, setInstruction] = useState("");
  const {
    deliveryAddress,
    setDeliveryAddress,
    orderAmount,
    setOrderAmount,
    singleFood,
  } = ShopDataContext();
  const navigate = useNavigate();

// cleat the state with user logout delivery address
  !user && setDeliveryAddress({}) && localStorage.clear();

  const { name, src, detail, price } = singleFood;
 
// total prize counting
  const subTotal = (price * orderAmount).toFixed(2);
  const tax = (subTotal * 0.15).toFixed(2);
  let deliveryFee = 0;

  if (subTotal < 40) {
    deliveryFee = (subTotal * 0.2).toFixed(2);
  }
  if (subTotal < 100 && subTotal > 40) {
    deliveryFee = (subTotal * 0.1).toFixed(2);
  }
  if (subTotal > 100) {
    deliveryFee = (subTotal * 0).toFixed(2);
  }
  const total = (
    parseFloat(subTotal) +
    parseFloat(tax) +
    parseFloat(deliveryFee)
  ).toFixed(2);

  const handleDeliveryDetails = async (e) => {
    e.preventDefault();
    const newData = {
      d_method: deliveryMethod,
      b_name: bName,
      road: road,
      flat: flat,
      instruction: instruction,
      isData: true,
    };
    setDeliveryAddress(newData);
  };

  return (
    <div className="grid gap-4 grid-cols-2 h-screen p-3">
      <div className="p-4 lg:px-20">
        <h1 className="font-bold text-lg">Edit Delivery Details</h1>
        <div className="border-b-2 w-full mx-auto"></div>
        <form onSubmit={handleDeliveryDetails} className="flex-warp">
          <input
            onChange={(e) => setDeliveryMethod(e.target.value)}
            type="text" required
            placeholder="Deliver to door"
            className="p-2 rounded mt-4 bg-gray-200 w-full border"
          />
          <input
            onChange={(e) => setRoad(e.target.value)}
            type="text" required
            placeholder="107 Rd No 8"
            className="p-2 rounded mt-4 bg-gray-200 w-full border"
          />
          <input
            onChange={(e) => setFlat(e.target.value)}
            type="text" required
            placeholder="flat, suite or floor"
            className="p-2 rounded mt-4 bg-gray-200 w-full border"
          />
          <input
            onChange={(e) => setBName(e.target.value)}
            type="text" required
            placeholder="Business Name"
            className="p-2 rounded mt-4 bg-gray-200 w-full border"
          />
          <input
            onChange={(e) => setInstruction(e.target.value)}
            type="text" required
            placeholder="Add delivery instructor"
            className="p-2 rounded mt-4 bg-gray-200 w-full border"
          />
          <button
            className={
              (deliveryAddress.isData === true ? "cursor-not-allowed" : " ") +
              "bg-red-400 px-10 text-white font-serif py-2 my-5 rounded-lg"
            }
          >
            Save & Continue
          </button>
        </form>
      </div>
{/*Another half */}
      <div className=" px-6 py-8">
        <p>From LOCATION</p>
        <p>Arriving TIME</p>
        <p>Address</p>

        <div className="w-full my-4">
          <div className="grid grid-cols-4 w-full border rounded-lg px-2 py-2">
            <div>
              <img src={src} className="border h-16" alt="" />
            </div>
            <div className="col-span-2">
              <p className="text-sm">{name}</p>
              <p className="text-lg text-red-600">${price}</p>
              <p className="text-xs">{detail}</p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={
                  (orderAmount === 0 ? "cursor-not-allowed" : " ") +
                  "border px-2"
                }
                onClick={() => setOrderAmount(orderAmount - 1)}
              >
                -
              </button>
              <p className="border px-2">{orderAmount}</p>
              <button
                className="border px-2"
                onClick={() => setOrderAmount(orderAmount + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <p>Sub-Total : ${subTotal}</p>
          <p>Tax : ${tax}</p>
          <p>Delivery Fee : ${deliveryFee}</p>
          <p>Total : ${total}</p>
          <button
            onClick={() => navigate("/delivery")}
            className={
              (deliveryAddress.isData === false ? "cursor-not-allowed" : " ") +
              "bg-red-400 px-10 text-white font-serif py-2 my-5 rounded-lg"
            }
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
