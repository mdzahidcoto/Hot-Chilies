import React from "react";
import { useNavigate } from "react-router-dom";
import { ShopDataContext } from "../../../Context/ShopContext";
import CartBody from "./CartBody";

const Body = () => {
  const { food, singleFood, setSingleFood } = ShopDataContext();
  const navigate = useNavigate();

  if (singleFood === ' ') {
    return (
      <div className="px-10 py-4 mx-6 my-2">
        <div className="grid gap-x-2 gap-y-6 lg:grid-cols-3 sm:grid-cols-2 p-2 ">
          {food.map((e) => {
            return (
              <div className="h-56 place-content-center">
                <div className="grid gap-3 grid-rows-2">
                  <div className="h-36 mx-auto" onClick={() => setSingleFood(e)}>
                    <img src={e.src} className="h-36" alt="Breakfast" />
                  </div>
                  <div className="h-14 text-center">
                    <p className="text-sm font-semibold">{e.name}</p>
                    <p className="text-xs">{e.detail}</p>
                    <p className="text-lg font-bold">${e.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={() =>navigate('/cart')}
            className="buttons font-mono bg-red-400 hover:text-red-400"
          >
            Continue order
          </button>
        </div>
      </div>
    );
  } else {
    return <CartBody />
  }
};

export default Body;

// <Link to = '/item' element={}></Link>