import React from "react";

const Item = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-3">
      <div>
        <img src={icon} alt="icon" className="h-14 w-14" />
      </div>
      <div className="space-y-1">
        <h5 className="font-bold text-base dark:text-white">{title}</h5>
        <p className="text-gray-500 text-sm dark:text-gray-300">
          human-like Scraping without IP Blocking
        </p>
      </div>
    </div>
  );
};

export default Item;
