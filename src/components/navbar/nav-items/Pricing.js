import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import Item from "./Item";
import icon1 from "../../../assets/navbar/pricing/1.png";
import icon2 from "../../../assets/navbar/pricing/2.png";
import icon3 from "../../../assets/navbar/pricing/3.png";
import icon4 from "../../../assets/navbar/pricing/4.png";
import icon5 from "../../../assets/navbar/pricing/5.png";
import icon6 from "../../../assets/navbar/pricing/6.png";
import icon7 from "../../../assets/navbar/pricing/7.png";
import icon8 from "../../../assets/navbar/pricing/8.png";
import icon9 from "../../../assets/navbar/pricing/9.png";
import icon10 from "../../../assets/navbar/pricing/10.png";

const Pricing = ({ theme }) => {
  return (
    <div className="text-[#000] dark:text-[#fff]]">
      <div className="relative -top-5 m-0">
        <div className="flex items-center justify-center">
          <BsTriangleFill size={30} color={theme ? "black" : "white"} />
        </div>
        <div className="p-3 grid grid-cols-2 gap-3">
          <div className="space-y-5 border-r-[1px] pr-3 mr-2 border-r-main">
            <h1 className="h5 font-bold dark:text-white">Proxies</h1>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon1} title="Share Datacenter proxies" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon2} title="Dedicaed data center" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon3} title="Residnetal Proxies" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon4} title="Next-Gen Residental Proxies" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon5} title="Shared Datacenter Proxies" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon6} title="Dedicated Data Center " />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon7} title="SOCKs Proxies" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="h5 font-bold dark:text-white">API's Proxies</h1>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon8} title="SERP Scraper API" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon9} title="E-Commerce API" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Item icon={icon10} title="Web Scraper API" />
              <div className="text-base border-l border-l-black dark:border-l-main pl-2">
                <p className="text-gray-500 dark:text-gray-300">Start From</p>
                <p className="dark:text-white">
                  <strong>100$</strong>/months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
