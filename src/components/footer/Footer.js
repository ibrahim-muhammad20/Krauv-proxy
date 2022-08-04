import React from "react";
import logo from "../../assets/logo/logo.png";
import footer1 from "../../assets/footer/1.png";
import footer2 from "../../assets/footer/2.png";
import footer3 from "../../assets/footer/3.png";
import footer4 from "../../assets/footer/4.png";
import { BsArrowRight } from "react-icons/bs";

const Footer = ({ theme }) => {
  return (
    <div className="dark:bg-[#18181A] bg-main py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between">
            <div className="relative">
              <img src={logo} alt="logo" className="h-16" />
              {theme && (
                <p className="font-bold text-2xl dark:text-white absolute top-4 left-[67px]">
                  Krauv Proxies
                </p>
              )}
            </div>
            <div className="flex justify-start">
              <img src={footer1} alt="social-icon" className="h-20 w-20" />
            </div>
            <div className="flex space-x-6">
              <img src={footer2} alt="social-icon" className="h-10 w-10" />
              <img src={footer3} alt="social-icon" className="h-10 w-10" />
              <img src={footer4} alt="social-icon" className="h-10 w-10" />
            </div>
          </div>
          <div className="space-y-4 dark:text-white">
            <h5 className="font-bold">COMPANY</h5>
            <p className="text-sm">About us</p>
            <p className="text-sm">Our Values</p>
            <p className="text-sm">Affiliate Program</p>
            <p className="text-sm">Service partners</p>
            <p className="text-sm">Press area</p>
            <p className="text-sm">Residential Proxies</p>
            <p className="text-sm">Careers</p>
            <p className="text-sm">Our Products</p>
          </div>
          <div className="flex flex-col justify-between dark:text-white">
            <div className="space-y-4">
              <h5 className="font-bold">PROXIES</h5>
              <p className="text-sm">Datacenter Proxies</p>
              <p className="text-sm">Shared Datacenter Proxies</p>
              <p className="text-sm">Dedicated Datacenter Proxies</p>
              <p className="text-sm">Residential Proxies</p>
              <p className="text-sm">Next-Gen Residential Proxies</p>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Subscribe"
                className="p-2 rounded"
              />
              <button className="bg-black text-main rounded px-3 py-2 relative -left-2 z-10 border-[1px] border-white">
                <BsArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
