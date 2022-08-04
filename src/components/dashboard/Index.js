import React from "react";
import icon1 from "../../assets/dashboard/index/1.png";
import icon2 from "../../assets/dashboard/index/2.png";
import icon3 from "../../assets/dashboard/index/3.png";
import Graph from "./Graph";
import IndexItem from "./IndexItem";
import { GrDocumentText } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { SiFoursquarecityguide } from "react-icons/si";
import { DiGithubAlt } from "react-icons/di";

const Index = ({ theme }) => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black h-[calc(100vh-159.49px)] overflow-y-scroll relative">
      <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
        <h5 className="h5">Proxy Solution</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
        <IndexItem title="Residential Proxies" theme={theme} icon={icon1} />
        <IndexItem
          title="Shared Datacenter Proxies"
          theme={theme}
          icon={icon2}
        />
        <IndexItem
          title="Dedicated Datacenter Proxies"
          theme={theme}
          icon={icon3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6 mx-auto">
        <div className="col-span-2">
          <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
            <h5 className="h5">Proxy Sales Graph</h5>
          </div>
          <div className="h-[350px]">
            <Graph theme={theme} />
          </div>
        </div>
        <div>
          <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
            <h5 className="h5">Resources</h5>
          </div>
          <div className="p-3 bg-[#F4F4F4] rounded dark:bg-[#383838]">
            <div className="flex gap-2 items-center border-b-[1px] border-b-gray-500 dark:border-b-gray-300 pb-2 mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <GrDocumentText size={30} color="black" />
              </div>
              <p className="font-bold text-lg">Documentation</p>
            </div>
            <div className="flex gap-2 items-center border-b-[1px] border-b-gray-500 dark:border-b-gray-300 pb-2 mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <BiHelpCircle size={30} color="black" />
              </div>
              <p className="font-bold text-lg">FAQs</p>
            </div>
            <div className="flex gap-2 items-center border-b-[1px] border-b-gray-500 dark:border-b-gray-300 pb-2 mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <SiFoursquarecityguide size={30} color="black" />
              </div>
              <p className="font-bold text-lg">Quick start guides</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <DiGithubAlt size={30} color="black" />
              </div>
              <p className="font-bold text-lg">Github</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
        <h5 className="h5">Scraping Solution</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6">
        <IndexItem title="SERP Scraper API" theme={theme} icon={icon1} />
        <IndexItem title="Web Scraper API" theme={theme} icon={icon2} />
        <IndexItem title="E-commerce API" theme={theme} icon={icon3} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-6 mx-auto">
        <div className="col-span-2">
          <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
            <h5 className="h5">API Sales Graph</h5>
          </div>
          <div className="h-[350px]">
            <Graph theme={theme} />
          </div>
        </div>
        <div className="pb-20">
          <div className="pl-6 py-4 bg-[#E5E5E5] dark:bg-black">
            <h5 className="h5">Resources</h5>
          </div>
          <div className="p-3 bg-[#F4F4F4] rounded dark:bg-[#383838]">
            <div className="flex gap-2 items-center border-b-[1px] border-b-gray-500 dark:border-b-gray-300 pb-2 mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <GrDocumentText size={30} color="black" />
              </div>
              <p className="font-bold text-lg">Proxy manager for android</p>
            </div>
            <div className="flex gap-2 items-center border-b-[1px] border-b-gray-500 dark:border-b-gray-300 pb-2 mb-2">
              <div className="p-3 bg-[#fff] rounded">
                <BiHelpCircle size={30} color="black" />
              </div>
              <p className="font-bold text-lg">Proxy extension for chrome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
