import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsCurrencyBitcoin, BsNewspaper } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="fixed top-0 left-0 w-[15rem] lg:w-[4rem] bg-grey-dark h-[100vh] rounded-r-lg">
      <div className="text-grey-light mt-10 text-2xl flex justify-around items-center">
        <h1 className="text-2xl lg:hidden">CryptoIndex</h1>
      </div>
      <div className="text-grey-light list-none flex flex-col gap-6 mt-16">
        <NavLink
          to="/home"
          className={(navData) =>
            navData.isActive
              ? "active flex items-center gap-6 pl-8  py-3  rounded-lg mx-4 lg:mx-1 tooltip lg:hover:after:content-['home']"
              : "flex items-center gap-6 pl-8 py-3 rounded-lg mx-4 hover:bg-accent-dark lg:mx-1 tooltip lg:hover:after:content-['home']"
          }
        >
          <AiOutlineHome className="h-5 w-5  translate-x-[-10px]" />
          <p className="lg:hidden ">Home</p>
        </NavLink>

        <NavLink
          to="/cryptocurrency"
          className={(navData) =>
            navData.isActive
              ? "active flex items-center gap-6 pl-8 py-3 rounded-lg mx-4 lg:mx-1  tooltip lg:hover:after:content-['Cryptocurrency']"
              : "flex items-center gap-6 pl-8 py-3 rounded-lg mx-4 hover:bg-accent-dark lg:mx-1  tooltip lg:hover:after:content-['Cryptocurrency']"
          }
        >
          <BsCurrencyBitcoin className="h-5 w-5  translate-x-[-10px] " />
          <p className="lg:hidden">Cryptocurrency</p>
        </NavLink>

        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive
              ? "active flex items-center gap-6 pl-8 py-3 rounded-lg mx-4 lg:mx-1 lg:hover:after:content-['News'] tooltip"
              : "flex items-center gap-6 pl-8 py-3 rounded-lg mx-4 hover:bg-accent-dark lg:mx-1 tooltip lg:hover:after:content-['News']"
          }
        >
          <BsNewspaper className="h-5 w-5 translate-x-[-10px]" />
          <p className="lg:hidden">News</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
