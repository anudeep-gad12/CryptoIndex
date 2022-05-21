import React, { Fragment } from "react";
import { Menu, Main, NewsSide } from "../components/index";

const Home = () => {
  return (
    <div className="bg-grey-extralight min-h-[100vh]">
      <Menu />
      <div className="py-2 shadow-md flex justify-center w-[calc(100%-15rem)] translate-x-[15rem] lg:translate-x-[4rem] lg:w-[calc(100%-4rem)]">
        <h1 className="text-2xl font-semibold tracking-normal text-grey-dark ">
          CryptoIndex
        </h1>
      </div>

      <div className="w-[calc(100%-18rem)] lg:w-[calc(100%-4rem)] absolute left-[16.5rem] lg:left-[4rem] grid grid-cols-[2fr_1fr] md:grid-rows-2 md:grid-cols-1 gap-4 md:gap-2 mx-auto px-2 py-4 ">
        <Main />
        <NewsSide />
      </div>
    </div>
  );
};

export default Home;
