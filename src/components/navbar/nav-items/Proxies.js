import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import Item from "./Item";
import icon1 from "../../../assets/navbar/proxies/1.png";
import icon2 from "../../../assets/navbar/proxies/2.png";
import icon3 from "../../../assets/navbar/proxies/3.png";
import icon4 from "../../../assets/navbar/proxies/4.png";
import icon5 from "../../../assets/navbar/proxies/5.png";
import icon6 from "../../../assets/navbar/proxies/6.png";
import icon7 from "../../../assets/navbar/proxies/7.png";
import icon8 from "../../../assets/navbar/proxies/8.png";
import icon9 from "../../../assets/navbar/proxies/9.png";
import icon10 from "../../../assets/navbar/proxies/10.png";
import icon11 from "../../../assets/navbar/proxies/11.png";

const Proxies = ({ theme }) => {
  return (
    <div className="text-[#000] dark:text-[#fff]">
      <div className="relative -top-5 m-0">
        <div className="flex items-center justify-center">
          <BsTriangleFill size={30} color={theme ? "black" : "white"} />
        </div>
        <div className="p-3 grid grid-cols-3 gap-3">
          <div className="space-y-5 border-r-[1px] pr-2 mr-2 border-r-main">
            <h1 className="h5 font-bold">RESIDENTIAL PROXIES</h1>
            <Item icon={icon1} title="Resindential proxies" />
            <Item icon={icon2} title="Next-Gen Residential Proxies" />
            <Item icon={icon3} title="Mobile Proxies" />
            <Item icon={icon4} title="Rotating IPS Proxies" />
          </div>
          <div className="space-y-5 border-r-[1px] pr-2 mr-2 border-r-main">
            <h1 className="h5 font-bold">DATACENTER PROXIES</h1>
            <Item icon={icon5} title="Shared Datacenter Proxies" />
            <Item icon={icon6} title="Dedicated Data Center " />
            <Item icon={icon7} title="SOCKs Proxies" />
            <Item icon={icon8} title="Static Residential Proxies" />
          </div>
          <div className="space-y-5">
            <h1 className="h5 font-bold">TOOL & ADDONS</h1>
            <Item icon={icon9} title="Oxy Proxy Extension " />
            <Item icon={icon10} title="Oxy Proxy For Android" />
            <Item icon={icon11} title="Proxy Rotator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proxies;
