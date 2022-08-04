import React from "react";

const ProductItem = ({ darkColor, color, title }) => {
  return (
    <div className={`bg-[${color}] dark:bg-[${darkColor}] p-8`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="font-bold text-lg">{title}</p>
          <p className="text-gray-500">Inactive</p>
        </div>
        <div>
          <button className="btn bg-[#54FFBD] py-2 px-10 dark:hover:text-white rounded-lg w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
