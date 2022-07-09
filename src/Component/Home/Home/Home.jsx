import React from "react";
import { useNavigate } from "react-router-dom";
import { ShopDataContext } from "../../../Context/ShopContext";
import { breakfast, dinner, lunch } from "../../../Resources/Image";
import Body from "../Body/Body";
import Footer from "../Foot/Footer";

const Home = () => {
  const { setFood } = ShopDataContext();
  const navigate = useNavigate();

  const handleMatchPath = () => {
    console.log("clicked");
  };

  const handleClick = (e) => {
    if (e === "Breakfast") {
      setFood(breakfast);
      navigate("/breakfast");
    }
    if (e === "Lunch") {
      setFood(lunch);
      navigate("/lunch");
    }
    if (e === "Dinner") {
      setFood(dinner);
      navigate("/dinner");
    }
  };
  return (
    <div>
      <div className="h-68 w-full">
        <div className="bg-[url('/src/Resources/red-onion/images/bannerbackground.png')] h-full bg-center bg-cover">
          <div className="flex justify-center items-center h-56">
            <input
              type="text"
              id="search"
              className="inputs w-2/5 z-10 border-red-500"
            />
            <button
              onClick={handleMatchPath}
              className="px-4 pl-10 py-1 ml-[-40px] bg-red-400 rounded-full z-0 border border-red-500 text-white font-semibold"
            >
              Search...
            </button>
          </div>
          <nav className="flex justify-center py-2 bg-white h-10 w-full font-semibold">
            <button className="mx-4" onClick={() => handleClick("Breakfast")}>
              Breakfast
            </button>
            <button className="mx-4" onClick={() => handleClick("Lunch")}>
              Lunch
            </button>
            <button className="mx-4" onClick={() => handleClick("Dinner")}>
              Dinner
            </button>
          </nav>
        </div>
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
