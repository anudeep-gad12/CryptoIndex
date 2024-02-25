import React from "react";
import { Menu, PageHeading, NewsMain } from "../components/index";

const News = () => {
  return (
    <div>
      <Menu />
      <PageHeading />
      <div className=" w-[calc(100%-15rem)] translate-x-[15rem] lg:translate-x-[4rem] lg:w-[calc(100%-4rem)] py-4 px-2 ">
        <NewsMain />
      </div>
    </div>
  );
};

export default News;
