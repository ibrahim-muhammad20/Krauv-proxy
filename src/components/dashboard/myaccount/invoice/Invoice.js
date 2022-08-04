import React from "react";

const Invoice = ({ theme }) => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black h-[calc(100vh-264.49px)] overflow-y-scroll ">
      <div className="ml-6 pt-8 mb-4">
        <h5 className="h5">Your Invoice</h5>
      </div>
      <div
        className={`bg-[#fff] dark:bg-[#18181A] text-center py-20 mx-4 my-5 border-[1px] border-main rounded`}
      >
        <div className="p-10">No Date To Show</div>
      </div>
    </div>
  );
};

export default Invoice;
