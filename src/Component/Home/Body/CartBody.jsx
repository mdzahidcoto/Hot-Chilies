import React from "react";
import { useNavigate } from "react-router-dom";
import { ShopDataContext } from "../../../Context/ShopContext";

const CartBody = () => {
  const { singleFood, food, orderAmount, setOrderAmount } = ShopDataContext();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 gap-4 mx-auto my-4 px-4 py-4">
          <div className="grid-rows-3 px-8 py-4">
            <div className="row-span-2 w-full h-60">
              <h1 className="text-3xl"> {singleFood.name}</h1>
              <p className="text-xs">{singleFood.detail}</p>

              <div className="flex items-center">
                <p className="text-lg mr-6">${singleFood.price}</p>
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
            <div className="grid-cols-2 flex mt-4">
              <div>
                <img src={food[0].src} className="h-16 w-16 mr-4" alt="" />{" "}
              </div>
              <div>
                <img src={food[1].src} className="h-16 w-16" alt="" />{" "}
              </div>
            </div>
          </div>
          <div className="p-4 h-72 flex justify-center items-center">
            <img src={singleFood.src} className="h-60 w-60 " alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/cart")}
            className="mx-auto buttons bg-red-400 hover:text-red-400"
          >
            Go to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
