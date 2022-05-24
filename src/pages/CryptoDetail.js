import React from "react";
import { Menu, CryptoCurrencyDetail, PageHeading } from "../components/index";

const CryptoDetail = () => {
  return (
    <>
      <Menu />
      <PageHeading />
      <div className=" w-[calc(100%-15rem)] translate-x-[15rem] lg:translate-x-[4rem] lg:w-[calc(100%-4rem)] py-4 px-2 ">
        <CryptoCurrencyDetail />
      </div>
    </>
  );
};

export default CryptoDetail;
