import React from "react";
import profile from "../../../../assets/dashboard/account/profile.png";

const Profile = ({ theme }) => {
  return (
    <div className="bg-[#E5E5E5] dark:bg-black h-[calc(100vh-264.49px)] overflow-y-scroll ">
      <div className={`bg-[#fff] dark:bg-[#18181A] lg:p-8 mx-4 my-5`}>
        <div className="flex flex-col-reverse xl:flex-row p-10">
          <div className="lg:flex-1 md:px-10 space-y-10">
            <div className="flex flex-col space-y-3">
              <label className="dark:text-white font-bold h6 md:h5">Full name</label>
              <input
                type="text"
                className="outline-none bg-[#F4F4F4] border-[1px] border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="dark:text-white font-bold h5">Email</label>
              <input
                type="email"
                className="outline-none bg-[#F4F4F4] border-[1px] border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="dark:text-white font-bold h5">
                Mobile Number
              </label>
              <input
                type="number"
                className="outline-none bg-[#F4F4F4] border-[1px] border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="dark:text-white font-bold h5">Country</label>
              <input
                type="text"
                className="outline-none bg-[#F4F4F4] border-[1px] border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="dark:text-white font-bold h5">
                Card Number
              </label>
              <input
                type="number"
                className="outline-none bg-[#F4F4F4] border-[1px] border-gray-300 p-2 rounded"
              />
            </div>
          </div>
          <div className="m-10">
            <img src={profile} alt="profile" className="lg:h-44 lg:w-44" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
