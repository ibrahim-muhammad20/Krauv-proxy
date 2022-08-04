import React from "react";
import { useNavigate } from "react-router-dom";

const Recovery = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)]">
      <div className="px-4 py-3 dark:bg-[#18181A] dark:text-white space-y-2 md:space-y-6">
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold h4 dark:text-white text-center">
            Password Reset
          </h1>
          <p className="text-center">
            Enter your account email address and we will send you a password
            reset link.
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <label className="text-gray-400">Email Address or Username</label>
            <input
              className="outline-none border-[1px] border-gray-400 w-full p-3 text-sm mb-4 dark:bg-[#18181A]"
            />
          </div>
          <div className="flex gap-6 flex-col sm:flex-row pt-2">
            <button
              className="btn py-2 px-7 whitespace-nowrap mx-auto dark:text-white w-full border-[1px] rounded-lg border-black dark:border-white  text-center"
              onClick={() => navigate("/dashboard/login")}
            >
              Back
            </button>
            <button
              className="btn bg-main py-2 px-10 rounded-lg w-full whitespace-nowrap"
              onClick={() => navigate("/dashboard/recovery/check")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
