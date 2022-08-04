import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import icon1 from "../../../assets/navbar/scraper/1.png";
import icon2 from "../../../assets/navbar/scraper/2.png";
import icon3 from "../../../assets/navbar/scraper/3.png";
import Item from "./Item";

const ScrapperApis = ({ theme }) => {
  return (
    <div className="text-[#000] dark:text-[#fff]">
      <div className="relative -top-5 m-0">
        <div className="flex items-center justify-center">
          <BsTriangleFill size={30} color={theme ? "black" : "white"} />
        </div>
        <div className="space-y-5 p-3">
          <Item icon={icon1} title="SERP Scraper API" />
          <Item icon={icon2} title="E-commerce API" />
          <Item icon={icon3} title="SWeb Scraper API" />
        </div>
      </div>
    </div>
  );
};

export default ScrapperApis;
