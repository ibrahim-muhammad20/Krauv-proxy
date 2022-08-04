import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

const Setting = () => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black h-[calc(100vh-264.49px)] overflow-y-scroll ">
      <div className="ml-6 pt-8 mb-4">
        <h5 className="h5">Your Invoice</h5>
      </div>
      <div
        className={`bg-[#fff] dark:bg-[#18181A] p-10 mx-4 my-5 border-[1px] border-main rounded`}
      >
        <p className="text-xl font-bold">Region</p>
        <div className="flex justify-between items-center">
          <p>Your Current Region Is Global</p>
          <div className="flex items-center space-x-4">
            <p className="font-bold">Change Region</p>
            <button className="btn btn-light rounded flex space-x-2">
              <MdOutlineLanguage size={25} />
              <span>Global</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
