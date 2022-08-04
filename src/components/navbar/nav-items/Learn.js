import React from "react";
import { BsTriangleFill } from "react-icons/bs";

const Learn = ({ theme }) => {
  return (
    <div className="text-[#000] dark:text-[#fff]">
      <div className="relative -top-5 m-0">
        <div className="flex items-center justify-center">
          <BsTriangleFill size={30} color={theme ? "black" : "white"} />
        </div>
      </div>
      <div className="px-3 pb-3 flex whitespace-nowrap">
        <div className="space-y-6 border-r-2 border-r-main pr-10 mr-10">
          <div className="space-y-3">
            <h1 className="h5 font-bold">GETTING STARTED</h1>
            <p className="h6">Documentation</p>
            <p className="h6">Quick start guides</p>
            <p className="h6">Integrations</p>
            <p className="h6">GitHub</p>
            <p className="h6">FAQ</p>
          </div>
          <div className="space-y-3">
            <h1 className="h5 font-bold">USEFULL INFORMATION</h1>
            <p className="h6">Customer Stories</p>
            <p className="h6">Use Cases</p>
            <p className="h6">Blog</p>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="h5 font-bold">USEFULL INFORMATION</h1>
          <p className="h6">Customer Stories</p>
          <p className="h6">Use Cases</p>
          <p className="h6">Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
