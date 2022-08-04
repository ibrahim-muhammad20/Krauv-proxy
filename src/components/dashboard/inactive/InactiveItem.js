import React from "react";
import main1 from "../../../assets/dashboard/inactive/main1.png";
import in1 from "../../../assets/dashboard/inactive/1.png";
import in2 from "../../../assets/dashboard/inactive/2.png";
import in3 from "../../../assets/dashboard/inactive/3.png";
import in4 from "../../../assets/dashboard/inactive/4.png";
import in5 from "../../../assets/dashboard/inactive/5.png";
import in6 from "../../../assets/dashboard/inactive/6.png";

const InactiveItem = ({ title }) => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black overflow-y-scroll h-[calc(100vh-159.49px)]">
      <div className="flex flex-col items-center justify-center space-y-12 bg-[#fff] dark:bg-[#18181A] p-12 rounded shadow mx-3 my-4">
        <div>
          <img src={main1} alt="main-icon" className="mx-auto" />
        </div>
        <div className="mx-auto">
          <h3 className="h3 font-bold">Try Krau {title}</h3>
          <p className="text-gray-500 dark:text-gray-300">
            Access one of the{" "}
            <strong className="dark:text-white">
              Largest and most stable API tools
            </strong>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-col-3 gap-3 mx-auto">
          <div className="flex gap-3">
            <img src={in1} alt="icon" className="h-16 w-16" />
            <div className="">
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={in2} alt="icon" className="h-16 w-16" />
            <div>
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={in3} alt="icon" className="h-16 w-16" />
            <div>
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={in4} alt="icon" className="h-16 w-16" />
            <div>
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={in5} alt="icon" className="h-16 w-16" />
            <div>
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={in6} alt="icon" className="h-16 w-16" />
            <div>
              <h5 className="h5 font-bold">Unlimited Current Sessions</h5>
              <p className="text-gray-500 dark:text-gray-300">
                Send an unlimited number of concurrent sessions that allow you
                to scale up easily.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-300">
              Starts From{" "}
              <strong className="dark:text-white">$100/ months </strong>
            </p>
            <button className="btn bg-gradient-to-t from-[#5CFFC0] via-[#00DE88] to-[#00DE88] py-2 px-10 dark:hover:text-white rounded-lg w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InactiveItem;
