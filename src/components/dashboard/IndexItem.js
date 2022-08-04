import React from "react";

const IndexItem = ({ theme, icon, title }) => {
  return (
    <div className=" border-[1px] dark:hover:border-main hover:border-black border-[#fff] dark:border-[#18181A] cursor-pointer">
      <div
        className={`space-y-3  border-[1px] ${
          !theme
            ? "border-[#fff] bg-white"
            : "dark:bg-[#18181A] border-[#18181A]"
        }  p-4`}
      >
        <img src={icon} alt="icon" className="h-30 w-30 shadow" />
        <h6 className="h6 font-bold">{title}</h6>
        <p>
          Largest 100m+ residential Proxy pool in the market{" "}
          <strong className="text-red-500">Learn More</strong>
        </p>
      </div>
      <div className="bg-[#F4F4F4] dark:bg-[#383838] flex p-4">
        <div className="text-base flex-1">
          <p className="text-gray-500 dark:text-gray-300">Start From</p>
          <p className="dark:text-white">
            <strong>100$</strong>/months
          </p>
        </div>
        <button className="btn bg-gradient-to-t from-[#5CFFC0] via-[#00DE88] to-[#00DE88] py-2 px-10 dark:hover:text-white rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default IndexItem;
