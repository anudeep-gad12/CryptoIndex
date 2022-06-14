import React from "react";
import { Menu, PageHeading, CryptoTable } from "../components/index";
const CryptoList = () => {
  return (
    <>
      <Menu />
      <PageHeading />
      <div className=" w-[calc(100%-15rem)] translate-x-[15rem] lg:translate-x-[4rem] lg:w-[calc(100%-4rem)] py-4 px-2 ">
        <CryptoTable />
      </div>
    </>
  );
};

export default CryptoList;
